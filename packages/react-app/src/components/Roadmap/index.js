import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function Roadmap() {
  const dense = false;
  const secondary = false;
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            color="white"
          >
            Roadmap -> (Looking for grants to take this forward)
          </Typography>
          <Demo sx={{ background: '#fff' }}>
            <List dense={dense}>
              <ListItem>
                <ListItemText
                  color="white"
                  primary="Complete Covalent Implementation"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Launch Server For Embedding Literals"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Decentralize Literal Management"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
