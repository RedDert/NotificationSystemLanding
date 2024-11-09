import { Box, Typography, Avatar } from '@mui/material';
import { strings } from '../data/strings';

const ProfileHeader = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'primary.dark', color: 'text.primary', textAlign: 'center' }}>
      <Avatar
        src={strings.profile.avatarUrl}
        alt="Profile Picture"
        sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
      />
      <Typography variant="h4" fontWeight="bold">{strings.profile.name}</Typography>
      <Typography variant="body1">{strings.profile.bio}</Typography>
    </Box>
  );
};

export default ProfileHeader;
