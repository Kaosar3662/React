import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/log-in.jsx';
import Contact from './pages/contact.jsx';
import NotFound from './pages/404.jsx';
import Index from './pages/Index.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Index /> },
    { path: '*', element: <NotFound /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/contact', element: <Contact /> },
  ],
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
