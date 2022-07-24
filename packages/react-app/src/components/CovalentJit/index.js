import React from 'react';
import { NETWORK } from './../../constants';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useEthers } from '@usedapp/core';
import { checkAccessControlCondition } from './covalent';

const lensLogo =
  'https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg';

function SocialScammer(verification) {
  let message = 'Not Verified';
  console.log('Verification is', verification);
  if (verification === true || verification.verification === true) {
    message = 'Verified';
  } else {
    message = 'Not Verified';
  }
  return (
    <Card sx={{ maxWidth: 360 }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Covalent"
              src="https://www.covalenthq.com/static/images/network/covalent-logomark.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="You have at least 0.1 ETH in your account"
            secondary={
              <React.Fragment>
                <Chip label={message} size="small" sx={{ margin: 2 }} />
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export function CovalentJit() {
  const { error, account, chainId } = useEthers();
  const [verification, setVerification] = React.useState(false);
  React.useEffect(() => {
    const verify = async () => {
      if (account && !error) {
        const chainName = NETWORK(chainId).name;
        const accessControlConditions = {
          contractAddress: '',
          standardContractType: '',
          chain: chainName,
          method: 'eth_getBalance',
          parameters: [':userAddress', 'latest'],
          returnValueTest: {
            comparator: '>=',
            value: '100000000000000000', // 0.1 ETH
          },
        };
        const verified = await checkAccessControlCondition(
          account,
          chainId,
          accessControlConditions
        );
        console.log('setting verification ', verified);
        setVerification(verified);
      }
    };
    verify();
  }, [account, chainId, error]);
  return (
    <div>
      <Grid container spacing={8} sx={{ padding: 8 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            Covalent JIT provides a Just In Time verification of the access
            control conditions. This means no verification submission is
            required by the user. They can be plugged in anywhere and all the
            tags will be verified without any workflow from the address. This
            provides an as of now guarantee of the result. Future versions will
            fully support the LIT ACL language.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SocialScammer verification={verification} />
        </Grid>
      </Grid>
    </div>
  );
}
