import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEthers } from '@usedapp/core';
import { lit } from '../lit/index';
import { ChipController } from '../ChipController';
import { NETWORK } from './../../constants';

export function MyTags() {
  const { account, error, chainId } = useEthers();
  const [literals, setLiterals] = useState([]);
  useEffect(() => {
    const getLiterals = async () => {
      console.log(account);
      if (account) {
        const literals = await lit.getAllLiteralsForAddress(
          account.toLowerCase()
        );
        setLiterals(literals);
      }
    };
    getLiterals();
  }, [account, error]);
  if (literals.length === 0) {
    return (
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        No tags found! Go to Explore and generate some!
      </Alert>
    );
  }
  const tags = literals.map(({ tag, jwt, verification }, index) => {
    return (
      <ChipController
        tag={tag}
        jwt={jwt}
        verification={verification}
        key={index}
      />
    );
  });
  const mint = async () => {
    const chainName = NETWORK(chainId).name;
    const mint = await lit.mintLit(chainName);
    alert(JSON.stringify(mint));
  };
  const getIpfsLink = async () => {
    const metadata = await lit.storeAsNft(account.toLowerCase());
    alert(JSON.stringify(metadata));
  };
  return (
    <div>
      <Button
        onClick={() => {
          getIpfsLink();
        }}
      >
        Get IPFS Link
      </Button>
      <Button
        onClick={() => {
          mint();
        }}
      >
        Be Eligible For More Tags
      </Button>
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ margin: 4 }}
      >
        {tags}
      </Stack>
    </div>
  );
}
