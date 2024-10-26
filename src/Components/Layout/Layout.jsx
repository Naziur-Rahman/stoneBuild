import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
    <h1>This is Layout page</h1>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}

export default Layout
