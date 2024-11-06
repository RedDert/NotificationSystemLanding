import { Link, Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRoute({
  component: () => {
    const navigate = useNavigate();

    // Redirect to the App route on initial load
    useEffect(() => {
      navigate({ to: '/App' });
    }, [navigate]);

    return (
      <>
        <nav className="flex space-x-6 p-4 bg-purple-600 text-white shadow-md">
          <Link to="/App" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
            Home
          </Link>
        </nav>
        <Outlet />
      </>
    );
  },
});
