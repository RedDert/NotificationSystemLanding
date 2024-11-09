import { Box, Card, CardContent, Typography } from '@mui/material';
import { strings } from '../data/strings';

const TeamList = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 'bold' }}>
        My Teams
      </Typography>
      
      <Box display="flex" flexDirection="column" gap={2}>
        {strings.teams.map((team, index) => (
          <Card key={index} sx={{ boxShadow: 3, bgcolor: 'background.paper' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                {team.name}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                {team.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamList;
