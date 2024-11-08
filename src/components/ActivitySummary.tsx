import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { strings } from '../data/strings';

const ActivitySummary = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default', color: 'text.secondary', px: 3 }}>
      <Typography variant="h5" fontWeight="bold" align="center" sx={{ mb: 3 }}>
        {strings.profile.activityTitle}
      </Typography>
      <List>
        {strings.profile.activities.map((activity, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivitySummary;
