import { Link } from "react-router-dom";
import Logo from '../src/assets/logo.svg';
import Phone from '../src/assets/circle-phone.png';
import "../styles/nav.css"; 

export default function Nav() {
  return (
    <nav className={"nav-bar"}>
      <div className={"nav-routes"}>
        <div>
          <Link to="/" className="nav-link logo">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className={"nav-links"}>
          <Link to="/Courses" className={"nav-link"}>Courses</Link> 
          <Link to="/Test-Series" className={"nav-link"}>Test Series</Link>
          <Link to="/Classroom" className={"nav-link"}>Classroom</Link> 
          <Link to="/Results" className={"nav-link"}>Results</Link>
          <Link to="/Study-Materials" className={"nav-link"}>Study Materials</Link> 
          <Link to="/Scholarships" className={"nav-link"}>Scholarships</Link>
          <Link to="/Allen-E-Store" className={"nav-link"}>Allen E-Store</Link>
        </div>
      </div>
      <div className={"nav-actions"}>
        <Link to="/contact" className={"nav-link"}><img src={Phone} alt="circle-phone" className="phone"/></Link>
        <Link to="/Login" className={"login"}>Login</Link>
      </div>
    </nav>
  );
}