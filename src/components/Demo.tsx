import { Box, Typography } from '@mui/material';

const Demo = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper', color: 'text.secondary' }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        Demo not avilable yet
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box component="img" src="/path/to/demo-image.png" alt="Demo" sx={{ borderRadius: 2, boxShadow: 2 }} />
      </Box>
    </Box>
  );
};

export default Demo;
