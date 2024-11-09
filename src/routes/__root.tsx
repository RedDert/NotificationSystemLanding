import { Link, Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { Home, Info, AccountCircle } from '@mui/icons-material';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Redirect to /home if we're at the root path
    useEffect(() => {
      if (window.location.pathname === '/') {
        navigate({ to: '/home', replace: true });
      }
    }, [navigate]);

    return (
      <>
        <nav
          className="flex space-x-6 p-4 shadow-md"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
          }}
        >
          <Link
            to="/home"
            activeProps={activeProps}
            className="flex items-center space-x-2 hover:opacity-80 transition font-bold"
          >
            <Home fontSize="small" />
            Home
          </Link>
          <Link
            to="/about"
            activeProps={activeProps}
            className="flex items-center space-x-2 hover:opacity-80 transition font-bold"
          >
            <Info fontSize="small" />
            About
          </Link>
          <Link
            to="/teams"
            activeProps={activeProps}
            className="flex items-center space-x-2 hover:opacity-80 transition font-bold"
          >
            <Groups2Icon fontSize="small" />
            Teams
          </Link>
          <Link
            to="/profile"
            activeProps={activeProps}
            className="flex items-center space-x-2 hover:opacity-80 transition font-bold"
          >
            <AccountCircle fontSize="small" />
            Profile
          </Link>
        </nav>
        <div
          className="min-h-screen"
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <Outlet />
        </div>
      </>
    );
  },
});
