import { Box, Typography, Grid, Paper } from '@mui/material';
import { strings } from '../data/strings';

const Features = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default', color: 'text.secondary' }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Features
      </Typography>
      <Grid container spacing={3}>
        {strings.features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 3, boxShadow: 2, bgcolor: 'background.paper', color: 'text.secondary' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                {feature.title}
              </Typography>
              <Typography>{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
