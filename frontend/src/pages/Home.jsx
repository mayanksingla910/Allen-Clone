import { useState } from "react";
import Carousel from "../components/Carousel";
import slide2 from   "../assets/1.avif";
import slide1 from   "../assets/2.png";
import slide3 from   "../assets/3.png";
import slide4 from   "../assets/4.avif";
import slide5 from   "../assets/5.png";
import "../../styles/home.css";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5
];


export default function Home() {
  
  const buttons = ["NEET", "JEE", "Class 6-10"];
  const [selectedButton, setSelectedButton] = useState(buttons[0]);


  return (
    <>
      <div style={{backgroundColor: "#EDF2FA"}}>
        <div className="home-container">
          <Carousel images={images} />
        </div>
      </div>

      <div className="courses">
        <p>Pick the right course for you</p>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <div className="courses-container">
            <p style={{fontSize: "1.2rem", fontWeight: "700"}}>NEET Courses</p>
            <p style={{fontSize: "1rem", color: "#025FCA", fontWeight: "700"}}>View Courses</p>
          </div>
          <div className="courses-container">
            <p style={{fontSize: "1.2rem", fontWeight: "700"}}>JEE Courses</p>
            <p style={{fontSize: "1rem", color: "#025FCA", fontWeight: "700"}}>View Courses</p>
          </div>
          <div className="courses-container">
            <p style={{fontSize: "1.2rem", fontWeight: "700"}}>Courses for class 6-10</p>
            <p style={{fontSize: "1rem", color: "#025FCA", fontWeight: "700"}}>View Courses</p>
          </div>
        </div>
      </div>

      <div>
        <div className="button-container">

          <p style={{fontSize: "1.6rem", fontWeight: "600", marginBottom: "1rem"}}>Trending Courses</p>

          <div className="button-group">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`custom-btn ${selectedButton === btn ? "active" : ""}`}
                onClick={() => setSelectedButton(btn)}
              > 
                {btn} 
              </button>
            ))}
          </div>
        </div>

        <div>
          
        </div>

      </div>

    </>
  );
}
