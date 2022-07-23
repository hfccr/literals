import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import jwt_decode from 'jwt-decode';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function LiteralDetailsDialog({
  open,
  handleClose,
  tag,
  jwt,
  verification,
  readableConditions,
}) {
  const {
    name,
    category,
    description,
    gracePeriod,
    accessControlConditions,
    resourceId,
  } = tag;
  const { payload } = verification;
  const { sub } = payload;
  const decodedJwt = jwt_decode(jwt);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText
              primary="Checks"
              secondary={
                'Signature of JWT is valid, access control conditions hash matches resource id path, org id matches, base url matches, jwt expiry time plus grace period is in the future'
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Address" secondary={sub} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Category" secondary={category} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Description" secondary={description} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Grace Period" secondary={gracePeriod} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="LIT Rules Humanized"
              secondary={readableConditions}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <pre>
              <ListItemText
                primary="LIT Rules"
                secondary={JSON.stringify(accessControlConditions, null, 2)}
              />
            </pre>
          </ListItem>
          <Divider />
          <ListItem>
            <pre>
              <ListItemText
                primary="LIT Resource"
                secondary={JSON.stringify(resourceId, null, 2)}
              />
            </pre>
          </ListItem>
          <Divider />
          <ListItem>
            <pre>
              <ListItemText
                primary="Proof"
                secondary={JSON.stringify(decodedJwt, null, 2)}
              />
            </pre>
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
