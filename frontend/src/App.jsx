import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './pages/home';
import '../styles/global.css';

function App() {
  return (
    <Router>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courser" element={<Courser />} />
        <Route path="/TestSeries" element={<TestSeries />} />
        <Route path="/Classroom" element={<Classroom />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/StudyMaterials" element={<StudyMaterials />} />
        <Route path="/Scholarships" element={<Scholarships />} />
        <Route path="/AllenE-Store" element={<AllenEStore />} />
      </Routes>
    </Router>
  );
}

function Courser() {
  return <h2>Courser Page</h2>;
}
function TestSeries() {
  return <h2>Test Series Page</h2>;
}
function Classroom() {
  return <h2>Classroom Page</h2>;
}
function Results() {
  return <h2>Results Page</h2>;
}
function StudyMaterials() {
  return <h2>Study Materials Page</h2>;
}
function Scholarships() {
  return <h2>Scholarships Page</h2>;
}
function AllenEStore() {
  return <h2>Allen E-Store Page</h2>;
}

export default App;
