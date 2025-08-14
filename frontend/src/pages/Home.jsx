import Carousel from "../components/Carousel";
import slide1 from   "../assets/carousel 1.avif";
import slide2 from   "../assets/carousel 2.avif";
import "../../styles/home.css";

const images = [
  slide1,
  slide2
];

export default function Home() {
  return (
    <div style={{backgroundColor: "aliceblue"}}>
      <div className="home-container">
        <Carousel images={images} />
      </div>
    </div>
  );
}
