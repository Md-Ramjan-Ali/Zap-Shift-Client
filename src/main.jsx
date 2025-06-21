import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router';
import router from './Router/router.jsx';

import "aos/dist/aos.css";
import Aos from 'aos';
Aos.init({
  duration: 1000,
  once: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
