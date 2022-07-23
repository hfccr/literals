import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DAppProvider, Mumbai } from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = 'LRgCJdTSgtBL-io5LIjqTJ-Pd0dYFdSZ';
const config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]:
      'https://polygon-mumbai.g.alchemy.com/v2/' + INFURA_PROJECT_ID,
  },
};

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app',
});

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
