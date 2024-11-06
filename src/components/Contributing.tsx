import { Typography, Box } from '@mui/material';

const Contributing = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default', color: 'text.secondary' }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        Contributing
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto' }}>
        Contributions are welcome! Please refer to the repository’s contribution guidelines for more information.
      </Typography>
    </Box>
  );
};

export default Contributing;
