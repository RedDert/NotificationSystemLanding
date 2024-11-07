import { createFileRoute } from '@tanstack/react-router';
import TeamCreationForm from '../components/TeamCreationForm';

export const Route = createFileRoute('/new')({
  component: () => (
    <div className="min-h-screen flex items-center justify-center">
      <TeamCreationForm />
    </div>
  ),
});
