import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import { strings } from '../data/strings';

const Preferences = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default', color: 'text.secondary', px: 3 }}>
      <Typography variant="h5" fontWeight="bold" align="center" sx={{ mb: 3 }}>
        {strings.profile.preferencesTitle}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {strings.profile.preferences.map((preference, index) => (
          <FormControlLabel
            key={index}
            control={<Switch color="primary" defaultChecked={preference.defaultChecked} />}
            label={preference.label}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Preferences;
