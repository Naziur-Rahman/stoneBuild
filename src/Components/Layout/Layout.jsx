import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
    
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}

export default Layout
