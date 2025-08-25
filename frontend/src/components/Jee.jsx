import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheck, faImages} from '@fortawesome/free-solid-svg-icons';

export default function Jee() {
  return (
    <div className="view-courses">
      <div className="course-container">
        <div style={{backgroundColor: "#1C1D1D", borderRadius: "15px", height:"1.5rem", width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", padding: "0px 10px"}}>
          <FontAwesomeIcon icon={faImages} style={{color: "white", marginRight: "6px", fontSize: "14px"}}/>
          <p style={{color: "#FFFFFF", fontWeight: "600", fontSize: "12px"}}>RECORDED</p>
        </div>
        <p style={{fontSize: "1rem", marginTop: ".75rem", color: "#1E1E22", fontWeight: "600"}}>JEE Enthusiast Self Study Plus Course</p>
        <p style={{fontSize: "14px", marginTop: ".25rem", color: "#494A4A"}}>Target 2026</p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Latest recordings covering full syllabus</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Digital study material incl. books, RACEs & more</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>32 (part + full) syllabus tests</p></p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingRight: "12px"}}>
          <p style={{fontSize: "1rem", color: "#1E1E22", fontWeight: "700", display: "flex", alignItems: "center"}}>₹16,900<p style={{fontSize: "12px", color:"#757575", marginTop: "2px", fontWeight: "600"}}> + Taxes Applicable</p></p>
          <p style={{fontSize: "14px", color: "#025FCA", fontWeight: "700"}}>Know more</p>
        </div>
      </div>
      <div className="course-container">
        <div style={{backgroundColor: "#1C1D1D", borderRadius: "15px", height:"1.5rem", width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", padding: "0px 10px"}}>
          <FontAwesomeIcon icon={faVideo} style={{color: "white", marginRight: "6px", fontSize: "14px"}}/>
          <p style={{color: "#FFFFFF", fontWeight: "600", fontSize: "12px"}}>LIVE</p>
        </div>
        <p style={{fontSize: "1rem", marginTop: ".75rem", color: "#1E1E22", fontWeight: "600"}}>JEE Leader Online Course</p>
        <p style={{fontSize: "14px", marginTop: ".25rem", color: "#494A4A"}}>target 2026Video Lectures + Test Series</p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Live classes from ALLEN Kota's top faculty</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Upto 35 online tests</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>24/7 doubt support, academic guidance & more</p></p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingRight: "12px"}}>
          <p style={{fontSize: "1rem", color: "#1E1E22", fontWeight: "700", display: "flex", alignItems: "center"}}>₹89,000<p style={{fontSize: "12px", color:"#757575", marginTop: "2px", fontWeight: "600"}}> + Taxes Applicable</p></p>
          <p style={{fontSize: "14px", color: "#025FCA", fontWeight: "700"}}>Know more</p>
        </div>
      </div>
    </div>
  );
}