import { createFileRoute } from '@tanstack/react-router';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, Outlet } from '@tanstack/react-router';
import TeamList from '../components/TeamList';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

const TeamsPage = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex space-x-6 p-4" style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}>
        <Link 
          to="/new" 
          activeProps={activeProps} 
          className="flex items-center space-x-2 transition font-bold"
          style={{ color: theme.palette.text.primary }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.palette.primary.light)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.palette.text.primary)}
        >
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
