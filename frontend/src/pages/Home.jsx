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
  return (
    <>
      <div style={{backgroundColor: "aliceblue"}}>
        <div className="home-container">
          <Carousel images={images} />
        </div>
      </div>

      <div className="courses">
        <p>Pick the right course for you</p>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <div className="courses-container">
            <p style={{fontSize: "1.3rem", fontWeight: "500"}}>NEET Courses</p>
            <p style={{fontSize: "1.1rem", color: "#025FCA", fontWeight: "600"}}>View Courses</p>
          </div>
          <div className="courses-container">
            <p style={{fontSize: "1.3rem", fontWeight: "500"}}>JEE Courses</p>
            <p style={{fontSize: "1.1rem", color: "#025FCA", fontWeight: "600"}}>View Courses</p>
          </div>
          <div className="courses-container">
            <p style={{fontSize: "1.3rem", fontWeight: "500"}}>Courses for class 6-10</p>
            <p style={{fontSize: "1.1rem", color: "#025FCA", fontWeight: "600"}}>View Courses</p>
          </div>
        </div>
      </div>

      <div>

      </div>

    </>
  );
}
