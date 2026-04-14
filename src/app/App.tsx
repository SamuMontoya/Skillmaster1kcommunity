import { RouterProvider } from 'react-router';
import { SkillProvider } from './context/SkillContext';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';

export default function App() {
  return (
    <SkillProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </SkillProvider>
  );
}
