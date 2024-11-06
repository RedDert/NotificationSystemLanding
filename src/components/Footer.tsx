import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, bgcolor: 'primary.main', color: 'text.secondary', textAlign: 'center' }}>
      <Typography>&copy; {new Date().getFullYear()} Project Name. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
