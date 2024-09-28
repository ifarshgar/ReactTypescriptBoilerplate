import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayoutPage } from 'Pages/MainLayout.page';
import { DashboardPage } from 'Pages/Dashboard.page';
import { AboutPage } from 'Pages/About.page';
import { ErrorPage } from 'Pages/Error.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutPage />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
