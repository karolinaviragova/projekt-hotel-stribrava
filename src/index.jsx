import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { Confirmation } from './components/Confirmation/confirmation';
import { AdminPage } from './pages/AdminPage';
import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
