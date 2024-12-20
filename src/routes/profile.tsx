import { createFileRoute } from '@tanstack/react-router';
import ProfileHeader from '../components/ProfileHeader';
import ActivitySummary from '../components/ActivitySummary';
import Preferences from '../components/Preferences';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export const Route = createFileRoute('/profile')({
  component: () => (
    <Box className="font-sans">
      <ProfileHeader />
      <ActivitySummary />
      <Preferences />
      <Footer />
    </Box>
  ),
});
