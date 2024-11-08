import { createFileRoute } from '@tanstack/react-router';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, Outlet } from '@tanstack/react-router';
import TeamList from '../components/TeamList';
import Footer from '../components/Footer';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

const TeamsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex space-x-6 p-4 bg-purple-600 text-white shadow-md">
        <Link to="/new" activeProps={activeProps} className="flex items-center space-x-2 hover:text-purple-200 transition font-bold">
          <AddCircleIcon fontSize="small" />
          Create new team
        </Link>
      </nav>
      <div className="flex-grow p-6">
        <TeamList />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export const Route = createFileRoute('/teams')({
  component: TeamsPage,
});

export default TeamsPage;
