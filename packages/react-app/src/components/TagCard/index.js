import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { lit } from '../lit/index';

function TagCard({ tag }) {
  const [readableConditions, setReadableConditions] = useState('');
  const { name, icon, description, accessControlConditions } = tag;
  useEffect(() => {
    const getHumanConditions = async () => {
      const humanConditions = await lit.getHumanizedAccessControlConditions(
        accessControlConditions
      );
      setReadableConditions(humanConditions);
    };

    getHumanConditions();
  }, [accessControlConditions]);
  return (
    <div>
      <Card>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {description}
          </Typography> */}
          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            <Avatar alt={name} src={icon} />
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </Stack>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              alert(
                `Conditions: ${readableConditions}, JSON: ${JSON.stringify(
                  accessControlConditions
                )}`
              );
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TagCard;
