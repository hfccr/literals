import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { lit } from '../lit/index';

function TagCard({ tag }) {
  const [readableConditions, setReadableConditions] = useState('');
  const { name, description, accessControlConditions } = tag;
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{readableConditions}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TagCard;
