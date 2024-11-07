import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/new')({
  component: () => <div>congratz, this place is not easy to find</div>,
});
