import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Workings = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={4} alignItems="center">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Roboto Mono',
            textAlign: 'center',
          }}
        >
          Protocol
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: 'md', textAlign: 'center', color: '#fff' }}
        >
          A Protocol And A Service To Create And Distribute Provable Facts To
          Enable Trust
        </Typography>
      </Stack>
    </Container>
  );
};
