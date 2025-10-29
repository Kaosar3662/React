import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Signup from './pages/signup.jsx'
import Login from './pages/log-in.jsx'
import Contact from './pages/contact.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import NotFound from './pages/404.jsx';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/contact", element: <Contact /> },
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
<RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
)
