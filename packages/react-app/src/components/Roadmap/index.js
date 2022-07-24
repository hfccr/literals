import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

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
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Roadmap (Looking for grants to take this forward)
          </Typography>
          <Demo>
            <List dense={dense}>
              <ListItem>
                <ListItemText
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
