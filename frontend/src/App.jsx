import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './pages/Home';
import '../styles/global.css';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Test-Series" element={<TestSeries />} />
        <Route path="/Classroom" element={<Classroom />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Study-Materials" element={<StudyMaterials />} />
        <Route path="/Scholarships" element={<Scholarships />} />
        <Route path="/Allen-E-Store" element={<AllenEStore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Courses() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Courses Page</h2>;
}
function TestSeries() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Test Series Page</h2>;
}
function Classroom() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Classroom Page</h2>;
}
function Results() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Results Page</h2>;
}
function StudyMaterials() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Study Materials Page</h2>;
}
function Scholarships() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Scholarships Page</h2>;
}
function AllenEStore() {
  return <h2 style={{    margin: "calc(70px + 2.5rem) 15rem 0 15rem"}}>Allen E-Store Page</h2>;
}

export default App;
