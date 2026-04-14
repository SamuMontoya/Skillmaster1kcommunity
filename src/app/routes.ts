import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { SkillDetail } from './pages/SkillDetail';
import { Challenges } from './pages/Challenges';
import { Admin } from './pages/Admin';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'catalog', Component: Catalog },
      { path: 'catalog/:id', Component: SkillDetail },
      { path: 'challenges', Component: Challenges },
      { path: 'admin', Component: Admin },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound }
    ]
  }
]);
