import { Link, Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Home, Info, AccountCircle } from '@mui/icons-material';
const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => {
    const navigate = useNavigate();

    // Redirect to the home route on initial load
    useEffect(() => {
      navigate({ to: '/Home' });
    }, [navigate]);

    return (
      <>
        <nav className="flex space-x-6 p-4 bg-purple-600 text-white shadow-md">
        <Link to="/home" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
          <Home fontSize="small" />
            Home
          </Link>
          <Link to="/about" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
          <Info fontSize="small" />
            About
          </Link>
          <Link to="/profile" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
          <AccountCircle fontSize="small" />
            Profile
          </Link>
        </nav>
        <Outlet />
      </>
    );
  },
});
