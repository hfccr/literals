import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const Intro = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={4} alignItems="center">
        <MilitaryTechIcon sx={{ fontSize: 128 }} />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Roboto Mono',
            textAlign: 'center',
          }}
        >
          LITERAL
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 'md', textAlign: 'center' }}>
          A Protocol To Create And Distribute Provable Facts Against An Address
          To Enable Trust
        </Typography>
      </Stack>
    </Container>
  );
};
