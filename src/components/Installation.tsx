import { Box, Typography, CircularProgress } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { strings } from '../data/strings';

const Installation = () => {
  const [installationContent, setInstallationContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${strings.org}/${strings.repo}/main/README.md`
        );

        if (!response.ok) throw new Error('Failed to fetch installation instructions');

        const text = await response.text();
        const installationMatch = text.match(/## Installation([\s\S]*?)(## |$)/);
        setInstallationContent(installationMatch ? installationMatch[1].trim() : 'Installation section not found.');
      } catch (error) {
        setInstallationContent('Unable to load installation instructions.');
      }
    };
    fetchInstructions();
  }, []);

  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper', color: 'text.secondary' }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        Installation
      </Typography>
      {installationContent ? (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
          <ReactMarkdown>{installationContent}</ReactMarkdown>
        </Box>
      ) : (
        <CircularProgress sx={{ display: 'block', mx: 'auto' }} />
      )}
    </Box>
  );
};

export default Installation;
