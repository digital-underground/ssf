import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Mission = () => {
    return (
      <Container
        id="mission"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '80%' },
            textAlign: { sm: 'left', md: 'center' },
            paddingTop: '580vh',
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We believed everyone should have access to technology literacy and a career in tech.
            We aimed to connect community with opportunity, by supporting local non-profits and getting students valuable work experience.
            We solved human problems with technology.
          </Typography>
        </Box>
      </Container>
    );
  }

export default Mission;
