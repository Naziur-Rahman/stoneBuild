import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content p-10">
      <div className='footer'>
          <nav >
          <h6 className="footer-title ">Services</h6>
                <NavLink to={"/structuralDesign"}>Structural Design</NavLink>
                <NavLink to={"/architecturalDesign"}>Architectural Design</NavLink>
                <NavLink to={"/electricalDesign"}>Electrical Design</NavLink>
                <NavLink to={"/estimatingCosting"}>Estimating and Costing</NavLink>
                <NavLink to={"/soilTestPiling"}>Soil test and piling</NavLink>
                <NavLink to={"/plumbingDesign"}>Plumbing Design</NavLink>
                <NavLink to={"/digitalSurvey"}>Digital Survey</NavLink>
                <NavLink to={"/duplexDesign"}>Duplex House Design</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"blogs"}>Blogs</NavLink>
              <NavLink to={"portfolio"}>Portfolio</NavLink>
              <NavLink to={"about"}>About Us</NavLink>
              <NavLink to={"contact"}>Contact Us</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <div className='flex justify-center tex text-2xl gap-3 py-2'>
            <FaFacebook className=''/>
            <FaLinkedin />
            <IoLogoYoutube />
        </div>
        </nav>
      </div>
      <div className=' gird  text-center grid-cols-1 gap-4 py-4'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Stone Build</p>
        
      </div>
  </footer>
  )
}

export default Footer
