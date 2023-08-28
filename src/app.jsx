import { RouterProvider, createHashRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './app/Root';

const router = createHashRouter([{ path: '*', Component: Root }]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
