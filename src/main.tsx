import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './index.css';

const router = createRouter({ routeTree });

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a', // Purple for primary color
      light: '#9c4dcc',
      dark: '#38006b',
    },
    secondary: {
      main: '#ff4081', // Pinkish-red for secondary color
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#f3e5f5', // Light purple background
    },
    text: {
      primary: '#ffffff', // White text for contrast
      secondary: '#000000', // Black text for readability
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
