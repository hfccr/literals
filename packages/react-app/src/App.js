import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700.css';
// import { Contract } from '@ethersproject/contracts';
import // shortenAddress,
// useCall,
// useEthers,
// useLookupAddress,
'@usedapp/core';
import React, { useEffect } from 'react';
import { Nav } from './components/Nav';
import { AppHeader } from './components/AppHeader';
import Container from '@mui/material/Container';

// import { addresses, abis } from '@brub/contracts';
// import GET_TRANSFERS from './graphql/subgraph';
// import { WalletButton } from './components/WalletButton';

function App() {
  // Read more about useDapp on https://usedapp.io/
  // const { error: contractCallError, value: tokenBalance } =
  //   useCall({
  //     contract: new Contract(addresses.ceaErc20, abis.erc20),
  //     method: 'balanceOf',
  //     args: ['0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C'],
  //   }) ?? {};

  // const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

  useEffect(() => {
    // lit.connect();
    const run = async () => {
      //await lit.encrypt();
      //await lit.decrypt();
      // await lit.saveJwtCondition();
      // await lit.getJwt();
      // await lit.mintLit();
    };
    run();
  }, []);

  // useEffect(() => {
  //   if (subgraphQueryError) {
  //     console.error(
  //       'Error while querying subgraph:',
  //       subgraphQueryError.message
  //     );
  //     return;
  //   }
  //   if (!loading && data && data.transfers) {
  //     console.log({ transfers: data.transfers });
  //   }
  // }, [loading, subgraphQueryError, data]);

  return (
    <div>
      <AppHeader />
      <Container maxWidth="xl">
        <Nav />
      </Container>
    </div>
  );
}

export default App;
