import hash from 'object-hash';

const baseUrl = 'universal-tags';
const orgId = 'universal-tags4';
const role = 'none';
export const categories = {
  gaming: 'Gaming',
  finance: 'Finance',
  poap: 'POAP',
  human: 'Human',
  lens: 'Lens',
  tableland: 'Tableland',
  medicine: 'Medicine',
};

const generateResourceId = (tag) => {
  const {
    name,
    category,
    description,
    gracePeriod,
    icon,
    color,
    accessControlConditions,
  } = tag;
  const metadata = { name, category, description, gracePeriod, icon, color };
  return {
    baseUrl,
    path: hash(accessControlConditions),
    orgId,
    role,
    extraData: JSON.stringify(metadata),
  };
};

const rawTags = {
  mumbai: {
    tests: [
      {
        type: 'lit',
        name: 'Whale',
        category: categories.finance,
        description: 'This user holds a a ton of balance',
        gracePeriod: 100000,
        icon: 'https://cdn-icons-png.flaticon.com/512/2834/2834539.png',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '',
            standardContractType: '',
            chain: 'mumbai',
            method: 'eth_getBalance',
            parameters: [':userAddress', 'latest'],
            returnValueTest: {
              comparator: '>=',
              value: '100000000000000000',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Minimum Balance',
        category: categories.finance,
        description: 'This user holds a non zero balance',
        gracePeriod: 100000,
        icon: 'https://static.thenounproject.com/png/1108855-200.png',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '',
            standardContractType: '',
            chain: 'mumbai',
            method: 'eth_getBalance',
            parameters: [':userAddress', 'latest'],
            returnValueTest: {
              comparator: '>=',
              value: '10000000000000',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Broke',
        category: categories.finance,
        description: 'This user holds zero balance',
        gracePeriod: 100000,
        icon: 'https://cdn-icons-png.flaticon.com/512/2762/2762463.png',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '',
            standardContractType: '',
            chain: 'mumbai',
            method: 'eth_getBalance',
            parameters: [':userAddress', 'latest'],
            returnValueTest: {
              comparator: '=',
              value: '00000000000000',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Lens User',
        category: categories.lens,
        description: 'This user has a Lens Profile',
        gracePeriod: 100000,
        icon:
          'https://pbs.twimg.com/profile_images/1490782523701481474/DtyJ_8ej_400x400.jpg',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress', '97'],
            returnValueTest: {
              comparator: '>',
              value: '0',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'HackFS POAP',
        category: categories.poap,
        description: 'This user has visited Hack FS',
        gracePeriod: 100000,
        icon:
          'https://play-lh.googleusercontent.com/H6qGtBrQCaomzOESGol-eMHo2Jdq__RaCkB4RZgZcvlvNneN1c3f-MxAepULd1qLOA=w240-h480-rw',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress', '97'],
            returnValueTest: {
              comparator: '>',
              value: '1',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Human',
        category: categories.human,
        description: 'This user is a verified from Proof Of Humanity DAO',
        gracePeriod: 100000,
        icon:
          'https://pbs.twimg.com/profile_images/1380603982205321217/EuVE1qKL_400x400.jpg',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress'],
            returnValueTest: {
              comparator: '>',
              value: '0',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Gaming DAO Member',
        category: categories.gaming,
        description: 'This user is a member of Gaming DAO',
        gracePeriod: 100000,
        icon: 'https://cdn-icons-png.flaticon.com/512/5260/5260498.png',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress'],
            returnValueTest: {
              comparator: '>',
              value: '0',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Tableland Rig Owner',
        category: categories.tableland,
        description: 'This user owns a tableland rig',
        gracePeriod: 100000,
        icon: 'https://tableland.xyz/rigs/all/812.jpg',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress', '97'],
            returnValueTest: {
              comparator: '>',
              value: '0',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Doctor',
        category: categories.medicine,
        description: 'This user is a member of Doctor DAO',
        gracePeriod: 100000,
        icon:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORy2u3wUJhYiuFUdLuxFmTgYrQI6YyICoDw&usqp=CAU',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xc716950e5DEae248160109F562e1C9bF8E0CA25B',
            standardContractType: 'ERC1155',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress', '97'],
            returnValueTest: {
              comparator: '>',
              value: '1',
            },
          },
        ],
      },
      {
        type: 'lit',
        name: 'Crypto Kitty Beginner',
        category: categories.gaming,
        description: 'Owns a crypto kitty',
        gracePeriod: 100000,
        icon: 'https://www.cryptokitties.co/images/kitty-eth.svg',
        color: '',
        accessControlConditions: [
          [
            {
              contractAddress: '0xbb5253f7f9a2ffdca2e7bfdc96570f363bda1342',
              standardContractType: 'ERC20',
              chain: 'mumbai',
              method: 'balanceOf',
              parameters: [':userAddress'],
              returnValueTest: {
                comparator: '=',
                value: '10000000000000000000',
              },
            },
          ],
        ],
      },
      {
        type: 'lit',
        name: 'Crypto Kitty Pro',
        category: categories.gaming,
        description: 'Owns a rare crypto kitty',
        gracePeriod: 100000,
        icon:
          'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/124.png',
        color: '',
        accessControlConditions: [
          {
            contractAddress: '0xbb5253f7f9a2ffdca2e7bfdc96570f363bda1342',
            standardContractType: 'ERC20',
            chain: 'mumbai',
            method: 'balanceOf',
            parameters: [':userAddress'],
            returnValueTest: {
              comparator: '>=',
              value: '200000000000000000000',
            },
          },
        ],
      },
    ],
  },
};

Object.keys(rawTags).forEach((chain) => {
  const tagsForChain = rawTags[chain].tests;
  tagsForChain.forEach((tag) => {
    const resourceId = generateResourceId(tag);
    tag.resourceId = resourceId;
  });
});

export const tags = rawTags;
