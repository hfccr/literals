import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function Xmtp() {
  return (
    <Grid container spacing={7} sx={{ marginTop: 8, padding: 8 }}>
      <Grid item xs={6}>
        <Typography variant="h5">
          XMTP introductions and conversations become much more powerful with
          literals
        </Typography>
      </Grid>
      <Box sx={{ pb: 7, maxWidth: 500, maxHeight: 400 }}>
        <CssBaseline />
        <List>
          {messageExamples.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary="" />
              <Chip
                label={secondary}
                size="small"
                avatar={<Avatar src={person} />}
                sx={{ margin: 2 }}
              />
            </ListItem>
          ))}
        </List>
        <Paper sx={{}} elevation={3}>
          <BottomNavigation
            showLabels
            value={0}
            onChange={(event, newValue) => {}}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Grid>
  );
}

const messageExamples = [
  {
    primary:
      'Hey there! I am a member at MolochDAO and we would love to get you on board. What would be a good time to chat?',
    secondary: 'MolochDAO',
    person:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F450%2F1*GI6KjvxWgBd9aKONZb6Cqg.jpeg&f=1&nofb=1',
  },
  {
    primary:
      'I saw your DApp and I would like to invest in it. Let us catch up this Monday.',
    secondary: `Whale`,
    person: 'https://cdn-icons-png.flaticon.com/512/2834/2834539.png',
  },
];
