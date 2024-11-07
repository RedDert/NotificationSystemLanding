import { createFileRoute } from '@tanstack/react-router';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, Outlet } from '@tanstack/react-router';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

const TeamsPage = () => {
  return (
    <>
      <nav className="flex space-x-6 p-4 bg-purple-600 text-white shadow-md">
        <Link to="/new" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
          <AddCircleIcon fontSize="small" />
          Create new team
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export const Route = createFileRoute('/teams')({
  component: TeamsPage,
});

export default TeamsPage;
