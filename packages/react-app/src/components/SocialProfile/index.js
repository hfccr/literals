import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';

const lensLogo =
  'https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg';

function SocialVerified() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={lensLogo}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <VerifiedIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="0xAC45...6514, Founder, ETHLocal"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Click on this link to submit your project
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button aria-label="add to favorites">Submit</Button>
      </CardActions>
    </Card>
  );
}
function SocialScammer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={lensLogo}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Scammer"
        subheader="0xAC45...6514, Dev at Eth Local"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Click on this link to submit your project. Also, send some eth to my
          address to complete submission.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button aria-label="add to favorites">Submit</Button>
        <Button aria-label="share">Send Eth</Button>
      </CardActions>
    </Card>
  );
}

function Social() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={lensLogo}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Dave"
        subheader="0xAC45...6514, Dev at Eth Local"
      />
      <CardContent>
        <Stack spacing={1} direction="row" sx={{ margin: 1 }}>
          <Chip
            size="small"
            label="ETHLocal Member"
            avatar={
              <Avatar src="https://pbs.twimg.com/profile_images/1333830155287097349/rGY9wviF_400x400.jpg" />
            }
          />
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Click on this link to submit the project.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button aria-label="add to favorites">Submit</Button>
      </CardActions>
    </Card>
  );
}

export function SocialProfile() {
  return (
    <div>
      <Grid container spacing={8} sx={{ padding: 8 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            Verification via web2 based methods is centralized, gated to the
            platform and only available to a select few
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SocialVerified />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            Interacting with unverified profile is difficult and involves risk
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SocialScammer />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="white">
            Literals provide decentralized, verifiable and open sources of truth
            to provide trust
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Social />
        </Grid>
      </Grid>
    </div>
  );
}
