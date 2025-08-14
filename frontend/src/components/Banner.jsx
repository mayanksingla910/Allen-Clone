import { Link } from "react-router-dom";
import MegaPhone from '../assets/mega-phone.png';
import "../../styles/banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={MegaPhone} alt="mega-phone" className="mega-phone" />
        <div className="text">
          <p style={{color: "#F8FD05", fontSize: "12px"}}>LAST LEADER BATCH OF 2025</p>
          <p style={{color : "#ffffff"}}>Get upto 90% scholarship based on NEET 2025 rank </p>
        </div>
      </div>
    </div>
  );
}