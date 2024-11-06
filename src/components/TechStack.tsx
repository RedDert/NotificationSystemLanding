import { Box, Typography, Link } from '@mui/material';
import { techStackData } from '../data/techStackData';

const TechStack = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default', color: 'text.secondary' }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        Tech Stack
      </Typography>
      <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
        {techStackData.map((tech, index) => (
          <Link
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <Box component="img" src={tech.icon} alt={`${tech.name} icon`} sx={{ width: 64, height: 64, mb: 1 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {tech.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
