import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './pages/App';
import About from './pages/About';

const router = createHashRouter([
  {
    path: "/",
    element: App(),
  },
  {
    path: "/about",
    element: About(),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);

