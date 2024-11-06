import { Box, Typography, Button } from '@mui/material';
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
        bgcolor: 'primary.main',
        color: 'text.primary',
      }}
    >
      <Typography variant="h1" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
        {strings.hero.title}
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        {strings.hero.tagline}
      </Typography>
      <Button
      href={strings.githubUrl}
      variant="contained"
      sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}
      target="_blank"
      rel="noopener noreferrer"
      >
      View on GitHub
      </Button>
          </Box>
        );
      };

      export default Hero;
