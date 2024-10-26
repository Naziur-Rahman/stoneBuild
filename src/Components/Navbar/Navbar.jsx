import { NavLink } from "react-router-dom"
import logo from "../../assets/Images/logo/Stone_build logo.jpg"
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
    <div className="navbar-start ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-pretty font-medium">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2 gap-1">
            <li><NavLink to={"/structuralDesign"}>Structural_Design</NavLink></li>
            <li><NavLink to={"/architecturalDesign"}>Architectural_Design</NavLink></li>
            <li><NavLink to={"/electricalDesign"}>Electrical_Design</NavLink></li>
            <li><NavLink to={"/estimatingCosting"}>Estimating_and_Costing</NavLink></li>
            <li><NavLink to={"/soilTestPiling"}>Soil_test_and_piling</NavLink></li>
            <li><NavLink to={"/plumbingDesign"}>Plumbing_Design</NavLink></li>
              <li><NavLink to={"/duplexDesign"}>Duplex_House_ Design</NavLink></li>
            </ul>
          </details>
          </li>
          <li><NavLink to={"blogs"}>Blogs</NavLink></li>
          <li><NavLink to={"portfolio"}>Portfolio</NavLink></li>
          <li><NavLink to={"about"}>About Us</NavLink></li>
          <li><NavLink to={"contact"}>Contact Us</NavLink></li>
        </ul>
      </div>
      <img src={logo} alt="logo" className='h-16 w-20' />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-3 text-pretty font-medium text-[1rem]">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2  gap-1">
              <li><NavLink to={"/structuralDesign"}>Structural_Design</NavLink></li>
              <li><NavLink to={"/architecturalDesign"}>Architectural_Design</NavLink></li>
              <li><NavLink to={"/electricalDesign"}>Electrical_Design</NavLink></li>
              <li><NavLink to={"/estimatingCosting"}>Estimating_and_Costing</NavLink></li>
              <li><NavLink to={"/soilTestPiling"}>Soil_test_and_piling</NavLink></li>
              <li><NavLink to={"/plumbingDesign"}>Plumbing_Design</NavLink></li>
              <li><NavLink to={"/digitalSurvey"}>Digital_Survey</NavLink></li>
              <li><NavLink to={"/duplexDesign"}>Duplex_House_ Design</NavLink></li>
            </ul>
          </details>
        </li>
            <li><NavLink to={"blogs"}>Blogs</NavLink></li>
          <li><NavLink to={"portfolio"}>Portfolio</NavLink></li>
          <li><NavLink to={"about"}>About Us</NavLink></li>
          <li><NavLink to={"contact"}>Contact Us</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full pt-1">
          
            <FaRegUserCircle className="text-3xl m-auto "/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li>
            <NavLink to={"login"} className="justify-between"> Login <span className="badge"><NavLink to={"registration"}>New</NavLink></span></NavLink>
        </li>
        <li><a>Settings</a></li>
        <li><NavLink>Logout</NavLink></li>
      </ul>
    </div>
    </div>
  </div>
  )
}

export default Navbar
