import { Box, Typography, Button, Stack } from '@mui/material';
import { strings } from '../data/strings';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'primary.dark',
        color: 'text.primary',
      }}
    >
      <Typography variant="h1" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
        {strings.hero.title}
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        {strings.hero.tagline}
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        {strings.hero.description}
      </Typography>

      {/* Stack is just mui's version of flexbox, you set the row OR column and spacing like below*/}
      <Stack 
      direction="row" spacing={2}>
        <Button
          href={strings.githubUrlBackend}
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.hero.githubButtonBackend}
        </Button>

        <Button
          href={strings.githubUrlFrontend}
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.hero.githubButtonFrontend}
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
