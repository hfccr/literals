import React from 'react';
import { tags } from './../../tags';
import TagCard from './../TagCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEthers } from '@usedapp/core';
import { NETWORK } from './../../constants';
import Container from '@mui/material/Container';
import { lit } from '../lit/index';

export function Explore() {
  const { error, chainId } = useEthers();
  if (!chainId || error) {
    return <div>Connect Wallet</div>;
  }
  const chainName = NETWORK(chainId).name;
  const appliedTags = tags[chainName];
  const tagCards = appliedTags.tests.map((tag, index) => (
    <Grid item xs={6} key={index}>
      <TagCard tag={tag} />
    </Grid>
  ));
  const publishAllTags = async () => {
    await lit.publishAllTags(appliedTags.tests, chainName);
    console.log('All tags published');
    alert('All tags published');
  };
  const applyForTags = async () => {
    await lit.applyForTags(appliedTags.tests, chainName);
  };
  return (
    <Container sx={{ padding: 4 }}>
      <Button
        onClick={() => {
          publishAllTags();
        }}
      >
        Publish All
      </Button>
      <Button
        onClick={() => {
          applyForTags();
        }}
      >
        Apply For Tags
      </Button>
      <Grid container spacing={5}>
        {tagCards}
      </Grid>
    </Container>
  );
}
