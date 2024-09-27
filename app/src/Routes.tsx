import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard.page';
import { AboutPage } from './pages/About.page';

const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  { path: '/about', element: <AboutPage /> },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
