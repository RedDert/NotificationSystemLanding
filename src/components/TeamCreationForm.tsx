import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { strings } from '../data/strings';

const TeamCreationForm = () => {
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTeam = () => {
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500, margin: 'auto', bgcolor: 'background.paper', color: 'text.secondary', boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
        {strings.newTeamForm.title}
      </Typography>
      
      <TextField
        label="Team Name"
        fullWidth
        variant="outlined"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder={strings.newTeamForm.namePlaceholder}
        sx={{ mb: 3 }}
      />
      
      <TextField
        label="Description"
        fullWidth
        multiline
        minRows={3}
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={strings.newTeamForm.descriptionPlaceholder}
        sx={{ mb: 3 }}
      />
      
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCreateTeam}
        sx={{ mt: 2, fontWeight: 'bold' }}
      >
        {strings.newTeamForm.submitButton}
      </Button>
    </Box>
  );
};

export default TeamCreationForm;
