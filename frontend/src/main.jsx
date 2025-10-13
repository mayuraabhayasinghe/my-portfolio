import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Projects from './Pages/Projects.jsx';
import Home from './Pages/Home.jsx';


//Creating route structure
const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {path:"", element: <Home/>},
    { path: "projects", element: <Projects/> },
  ]
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
