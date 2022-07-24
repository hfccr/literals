import LitJsSdk from 'lit-js-sdk';
import { NFTStorage } from 'nft.storage/dist/bundle.esm.min.js';

const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVmMWE5MDVDZDdFMWVGZjMxMDM3OGI2ZTJjQjUyMDFhMmNjN0QxNDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1ODY2MjI0NzQxNCwibmFtZSI6ImhhY2tmcyJ9.cuo_BUP-uSQV1s85sbHrKJ91_a7uRDhff1eaDhBE1Pg';

const nftClient = new NFTStorage({ token: API_KEY });
const dataURI =
  'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';

const client = new LitJsSdk.LitNodeClient();

const prefix = 'test1';
const chain = 'mumbai';
const quantity = 1;
const permanent = false;

const accessControlConditions = [
  {
    contractAddress: '',
    standardContractType: '',
    chain,
    method: 'eth_getBalance',
    parameters: [':userAddress', 'latest'],
    returnValueTest: {
      comparator: '>=',
      value: '1000000000000', // 0.000001 ETH
    },
  },
];

const resourceId = {
  baseUrl: 'brub.com',
  path: '/a_path.html',
  orgId: 'brub',
  role: '',
  extraData: '',
};

class Lit {
  async getExampleImage() {
    const blob = await (await fetch(dataURI)).blob();
    return blob;
  }

  async storeAsNft(address) {
    const literals = await this.getAllLiteralsForAddress(address);
    console.log('literals', literals);
    const image = await this.getExampleImage();
    const nft = {
      image, // use image Blob as `image` field
      name: 'Storing Literal verifications in IPFS',
      description: 'Non custodial tagging service',
      properties: {
        literals,
      },
    };
    const metadata = await nftClient.store(nft);

    console.log('Literals stored as NFt!');
    console.log('Metadata URI: ', metadata.url);
    return metadata;
  }
  async storeAllLiteralsForAddress(literals, address) {
    localStorage.setItem(`${prefix}${address}`, JSON.stringify(literals));
    return true;
  }
  async getAllLiteralsForAddress(address) {
    console.log(`${prefix}${address}`);
    const item = localStorage.getItem(`${prefix}${address}`);
    console.log('Got item', item);
    console.log('address', address);
    let literals = [];
    try {
      const parsedItems = JSON.parse(item);
      if (Array.isArray(parsedItems)) {
        literals = parsedItems;
      }
    } catch (e) {
      console.log('No literals found for address ', address);
    }
    return literals;
  }
  async applyForTags(tags, chain) {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    console.log('authSig', authSig);
    const { address } = authSig;
    console.log('address', address);
    const literals = [];
    const passNames = [];
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      const { name, accessControlConditions, resourceId } = tag;
      console.log('APPLYING name', name);
      console.log(
        'APPLYING for accessControlConditions',
        accessControlConditions
      );
      console.log('APPLYING for RESOURCE ID ', resourceId);
      let jwt;
      try {
        jwt = await this.litNodeClient.getSignedToken({
          accessControlConditions,
          chain,
          authSig,
          resourceId,
        });
        console.log('jwt', jwt);
        const verification = LitJsSdk.verifyJwt({ jwt });
        console.log('verification', verification);
        literals.push({ tag, jwt, verification });
        passNames.push(name);
        await this.storeAllLiteralsForAddress(literals, address);
      } catch (e) {
        console.log('FAILED TEST FOR TAG', name);
      }
    }
    console.log('literals', literals);
    if (passNames.length === 0) {
      alert(`Sorry. You did not qualify for any tags`);
    } else {
      alert(`Congrats! You qualified for ${passNames.join(', ')}`);
    }
    return true;
  }
  async publishAllTags(tags, chain) {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    console.log('tags', tags);
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      const { name, accessControlConditions, resourceId } = tag;
      console.log('SAVING accessControlConditions', accessControlConditions);
      console.log('SAVING RESOURCE ID ', resourceId);
      await this.litNodeClient.saveSigningCondition({
        accessControlConditions,
        chain,
        authSig,
        resourceId,
        permanent,
      });
      console.log('Saved ', name);
    }
    return true;
  }
  async hashUnifiedAccessControlConditions(accessControlConditions) {
    const hash = await LitJsSdk.hashUnifiedAccessControlConditions({
      accessControlConditions,
    });
    return hash;
  }
  async getHumanizedAccessControlConditions(accessControlConditions) {
    const humanizedAccessControlConditions = LitJsSdk.humanizeAccessControlConditions(
      { accessControlConditions }
    );
    return humanizedAccessControlConditions;
  }
  async getSignature() {
    const authSig = await LitJsSdk.checkAndSignAuthMessage({
      chain,
    });
    console.log(authSig);
  }
  async saveJwtCondition() {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    await this.litNodeClient.saveSigningCondition({
      accessControlConditions,
      chain,
      authSig,
      resourceId,
    });
  }
  async getJwt() {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const jwt = await this.litNodeClient.getSignedToken({
      accessControlConditions,
      chain,
      authSig,
      resourceId,
    });
    console.log('jwt', jwt);
    return jwt;
  }
  async mintLit(chain) {
    const {
      tokenId,
      tokenAddress,
      mintingAddress,
      txHash,
      errorCode,
      authSig,
    } = await LitJsSdk.mintLIT({ chain: 'mumbai', quantity: 1 });
    console.log('Lit minted');
    console.log('tokenId', tokenId);
    console.log('tokenAddress', tokenAddress);
    console.log('mintingAddress', mintingAddress);
    console.log('txHash', txHash);
    console.log('errorCode', errorCode);
    console.log('authSig', authSig);
    return {
      tokenId,
      tokenAddress,
      mintingAddress,
      txHash,
      errorCode,
      authSig,
    };
  }
  async setLitAcl() {
    const accessControlConditions = [
      {
        contractAddress: '0xc716950e5deae248160109f562e1c9bf8e0ca25b',
        standardContractType: 'ERC1155',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress', '95'],
        returnValueTest: {
          comparator: '>',
          value: '0',
        },
      },
    ];
    if (!this.litNodeClient) {
      await this.connect();
    }
    const message = 'What is the problem is the';
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      message
    );
    console.log('encryptedString', encryptedString);
    console.log('symmetricKey', symmetricKey);
    this.encryptedString = encryptedString;
    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
    });
    console.log('encryptedSymmetricKey', encryptedSymmetricKey);
    this.encryptedSymmetricKey = encryptedSymmetricKey;
  }
  async encrypt() {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const message = 'What is this?';
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      message
    );
    console.log('encryptedString', encryptedString);
    this.encryptedString = encryptedString;
    console.log('symmetricKey', symmetricKey);
    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
    });
    console.log('encryptedSymmetricKey', encryptedSymmetricKey);
    this.encryptedSymmetricKey = LitJsSdk.uint8arrayToString(
      encryptedSymmetricKey,
      'base16'
    );
    return {
      encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        'base16'
      ),
    };
  }
  async decrypt(encryptedString, encryptedSymmetricKey) {
    encryptedString = this.encryptedString;
    encryptedSymmetricKey = this.encryptedSymmetricKey;
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig,
    });

    const decryptedString = await LitJsSdk.decryptString(
      encryptedString,
      symmetricKey
    );
    console.log('decryptedString', decryptedString);
    return { decryptedString };
  }
  async connect() {
    await client.connect();

    document.addEventListener(
      'lit-ready',
      function(e) {
        console.log('LIT network is ready');
        // setNetworkLoading(false) // replace this line with your own code that tells your app the network is ready
      },
      false
    );
    this.litNodeClient = client;
  }
}

export const lit = new Lit();
