import hash from 'object-hash';

const baseUrl = 'universal-tags';
const orgId = 'universal-tags2';
const role = 'none';
export const categories = {
  gaming: 'Gaming',
  finance: 'Finance',
  poap: 'POAP',
  human: 'Human',
  lens: 'Lens',
  tableland: 'Tableland',
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
        icon: '',
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
        icon: '',
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
        icon: '',
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
        name: 'Token Holder',
        category: categories.gaming,
        description: 'This user holds a NFT token',
        gracePeriod: 100000,
        icon: '',
        color: '',
        accessControlConditions: [
          [
            {
              contractAddress: '0xc716950e5deae248160109f562e1c9bf8e0ca25b',
              standardContractType: 'ERC1155',
              chain: 'mumbai',
              method: 'balanceOf',
              parameters: [':userAddress', '95'],
              returnValueTest: {
                comparator: '>',
                value: '0',
              },
            },
          ],
        ],
        resourceId: {
          baseUrl: '',
          path: '2',
          orgId: 'literal-tags',
          role: '',
          extraData:
            '{"name": "Token Holder", "category": "gaming", "description": "This user owns an ERC token", "gracePeriod": "100000", "icon": "", "color": "" }',
        },
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
