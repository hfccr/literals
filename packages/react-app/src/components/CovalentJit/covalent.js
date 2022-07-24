const COVALENT_API = 'https://api.covalenthq.com/v1';
const COVALENT_API_KEY = 'ckey_461d4adeec1f42f9ada0360a020';

export const checkAccessControlCondition = async (
  address,
  chainId,
  accessControlCondition
) => {
  console.log('address', address);
  console.log('chainId', chainId);
  console.log('Got access control condition', accessControlCondition);
  const { method } = accessControlCondition;
  const { returnValueTest } = accessControlCondition;
  const { comparator } = returnValueTest;
  if (method === 'eth_getBalance' && comparator === '>=') {
    const url = `${COVALENT_API}/${chainId}/address/${address}/balances_v2/?key=${COVALENT_API_KEY}`;
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log('data,', data);
    const ethItem = data.data.items.find(
      (item) => typeof item.contract_ticker_symbol === 'string'
    );
    console.log({ ethItem });
    console.log('testing');
    console.log(
      ethItem.balance - accessControlCondition.returnValueTest.value >= 0
    );
    if (ethItem) {
      return (
        ethItem.balance - accessControlCondition.returnValueTest.value >= 0
      );
    } else {
      return false;
    }
  } else {
    return false;
  }
};
