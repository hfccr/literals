import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useEthers } from '@usedapp/core';
import { lit } from '../lit/index';
import { ChipController } from '../ChipController';

export function MyTags() {
  const { account, error } = useEthers();
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
  return <div>{tags}</div>;
}
