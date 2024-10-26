import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ArchitecturalDesign from './Components/Services/ArchitecturalDesign';
import StructuralDesign from './Components/Services/StructuralDesign';
import ElectricalDesign from './Components/Services/ElectricalDesign';
import Estimating from './Components/Services/Estimating';
import SoilTestPiling from './Components/Services/SoilTestPiling';
import PlumbingDesign from './Components/Services/PlumbingDesign';
import DigitalSurvey from './Components/Services/DigitalSurvey';
import DuplexHouseDesign from './Components/Services/DuplexHouseDesign';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,children: [
      {
        path: "/",element: <Home></Home>,
      },
      {
        path: "/structuralDesign",element: <StructuralDesign></StructuralDesign>,
      },
      {
        path: "/architecturalDesign",element: <ArchitecturalDesign></ArchitecturalDesign>,
      },
      {
        path: "/electricalDesign",element: <ElectricalDesign></ElectricalDesign>,
      },
      {
        path: "/estimatingCosting",element: <Estimating></Estimating>,
      },
      {
        path: "/soilTestPiling",element: <SoilTestPiling></SoilTestPiling>,
      },
      {
        path: "/plumbingDesign",element: <PlumbingDesign></PlumbingDesign>,
      },
      {
        path: "/digitalSurvey",element: <DigitalSurvey></DigitalSurvey>,
      },
      {
        path: "/duplexDesign",element: <DuplexHouseDesign></DuplexHouseDesign> ,
      },
      {
        path: "/blogs",element: <Blogs></Blogs>,
      },
      {
        path: "/about",element: <AboutUs></AboutUs>,
      },
      {
        path: "/portfolio",element: <Portfolio></Portfolio>,
      },
      {
        path: "/contact",element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",element: <Login></Login>,
      },
      {
        path: "/registration",element: <Login></Login>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
