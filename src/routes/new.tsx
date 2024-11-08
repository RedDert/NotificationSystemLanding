import { createFileRoute } from '@tanstack/react-router';
import TeamCreationForm from '../components/TeamCreationForm';
import Footer from '../components/Footer';

export const Route = createFileRoute('/new')({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <TeamCreationForm />
      </div>
      <Footer />
    </div>
  ),
});
