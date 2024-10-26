import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,children: [
      {
        path: "/",element: <Home></Home>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
