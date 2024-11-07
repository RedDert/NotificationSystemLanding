import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  component: () => <div>Profile Page Content</div>,
});
