import { useState } from "react";
import Neet from "../components/Neet";
import Jee from "../components/Jee";
import Classes from "../components/Classes";
import Carousel from "../components/Carousel";
import slide2 from   "../assets/1.avif";
import slide1 from   "../assets/2.png";
import slide3 from   "../assets/3.png";
import slide4 from   "../assets/4.avif";
import slide5 from   "../assets/5.png";
import slide6 from   "../assets/6.png";
import slide7 from   "../assets/7.png";
import slide8 from   "../assets/8.png";
import slide9 from   "../assets/9.png";
import slide10 from  "../assets/10.png";
import slide11 from  "../assets/11.png";
import slide12 from  "../assets/12.jpg";
import slide13 from  "../assets/13.png";
import "../../styles/home.css";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5
];

const images2 = [
  slide7,
  slide8
]

const images3 = [
  slide10,
  slide11,
  slide12,
  slide13
]

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

        <div style={{backgroundColor: "#EDF2FA"}}>
          <div style={{padding: "20px 15rem"}}>
            <div style={{backgroundColor: "#E6E6E6", height: "1px", width: "100%"}} />
            {selectedButton === "NEET" && (
              <Neet />)}
            {selectedButton === "JEE" && (
              <Jee />)}
            {selectedButton === "Class 6-10" && (
              <Classes />)}
          </div>

          <div className="all-courses">
            <button>View All Courses</button>
          </div>

          <div style={{display: "flex", justifyContent: "center", cursor: "pointer"}}>
            <img style={{width: "67%", margin: "1.5rem 0"}} src={slide6} alt="guarantee" />
          </div>

          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", padding: "3rem 15rem", cursor: "pointer"}}>
            <Carousel images={images2}/>
          </div>

          <div style={{display: "flex", justifyContent: "center", cursor: "pointer"}}>
            <img style={{width: "68%", margin: "1.5rem 0"}} src={slide9} alt="guarantee" />
          </div>

          <div style={{display: "flex", flexDirection:"column", justifyContent:"center", padding: "1.5rem 15rem"}}>
            <p style={{fontSize: "24px", fontWeight: "700", padding: "0 25rem"}}>What's Trending</p>
            
            <div style={{display: "flex", flexDirection: "column", margin: "2rem 0 1.5rem 0 ", cursor: "pointer"}}>
            <Carousel images={images3}/>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}
