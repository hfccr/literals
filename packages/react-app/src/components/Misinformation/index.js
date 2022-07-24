import React from 'react';
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

const lensLogo =
  'https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg';

function SocialVerified() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={lensLogo} />
          </ListItemAvatar>
          <ListItemText
            primary="We use only 10% of our brains"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  elive.eth
                </Typography>
                {' 150 likes 5 dislikes'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingLeft: 2 }}>
            <Avatar alt="Travis Howard" src={lensLogo} />
          </ListItemAvatar>
          <ListItemText
            primary="No that's incorrect. Studies have found out that the number is much higher."
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  alice.eth
                </Typography>
                {' 5 likes 100 dislikes'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}
function SocialScammer() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={lensLogo} />
          </ListItemAvatar>
          <ListItemText
            primary="We use only 10% of our brains"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  elive.eth
                </Typography>
                {' 150 likes 5 dislikes'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingLeft: 2 }}>
            <Avatar alt="Travis Howard" src={lensLogo} />
          </ListItemAvatar>
          <ListItemText
            primary="No that's incorrect. Studies have found out that the number is much higher."
            secondary={
              <React.Fragment>
                <Stack spacing={1} direction="row" sx={{ margin: 1 }}>
                  <Chip
                    size="small"
                    label="Human"
                    avatar={
                      <Avatar
                        src={
                          'https://pbs.twimg.com/profile_images/1380603982205321217/EuVE1qKL_400x400.jpg'
                        }
                      />
                    }
                  />
                  <Chip
                    size="small"
                    label="Doctor"
                    avatar={
                      <Avatar
                        src={
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORy2u3wUJhYiuFUdLuxFmTgYrQI6YyICoDw&usqp=CAU'
                        }
                      />
                    }
                  />
                </Stack>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  alice.eth
                </Typography>
                {' 5 likes 100 dislikes'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export function Misinformation() {
  return (
    <div>
      <Grid container spacing={8} sx={{ padding: 8 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            By looking at the number of likes and dislikes on the posts, a
            typical person would assume the first fact to be correct.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SocialVerified />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            Literal tags can help make the user a better decision in this case.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SocialScammer />
        </Grid>
      </Grid>
    </div>
  );
}
