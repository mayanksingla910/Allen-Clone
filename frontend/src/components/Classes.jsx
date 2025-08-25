import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheck, faImages} from '@fortawesome/free-solid-svg-icons';

export default function Classes() {
  return (
    <div className="view-courses">
      <div className="course-container">
        <div style={{backgroundColor: "#1C1D1D", borderRadius: "15px", height:"1.5rem", width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", padding: "0px 10px"}}>
          <FontAwesomeIcon icon={faImages} style={{color: "white", marginRight: "6px", fontSize: "14px"}}/>
          <p style={{color: "#FFFFFF", fontWeight: "600", fontSize: "12px"}}>RECORDED</p>
        </div>
        <p style={{fontSize: "1rem", marginTop: ".75rem", color: "#1E1E22", fontWeight: "600"}}>Olympiad Rank Booster + Study Material Course</p>
        {/* <p style={{fontSize: "14px", marginTop: ".25rem", color: "#494A4A"}}>Focuses on advanced concepts</p> */}
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Recorded lectures to ace Olympiads</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Olympiad guidance videos & 100+ chapter level tests</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>prep for 12 diff types of Oly mock tests</p></p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", paddingRight: "12px"}}>
          <p style={{fontSize: "1rem", color: "#1E1E22", fontWeight: "700", display: "flex", alignItems: "center"}}>₹12,711<p style={{fontSize: "12px", color:"#757575", marginTop: "2px", fontWeight: "600"}}> + Taxes Applicable</p></p>
          <p style={{fontSize: "14px", color: "#025FCA", fontWeight: "700"}}>Know more</p>
        </div>
      </div>
      <div className="course-container">
        <div style={{backgroundColor: "#1C1D1D", borderRadius: "15px", height:"1.5rem", width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", padding: "0px 10px"}}>
          <FontAwesomeIcon icon={faImages} style={{color: "white", marginRight: "6px", fontSize: "14px"}}/>
          <p style={{color: "#FFFFFF", fontWeight: "600", fontSize: "12px"}}>RECORDED</p>
        </div>
        <p style={{fontSize: "1rem", marginTop: ".75rem", color: "#1E1E22", fontWeight: "600"}}>School Marks Booster + Study Material Course</p>
        {/* <p style={{fontSize: "14px", marginTop: ".25rem", color: "#494A4A"}}>Video Lectures + Test Series</p> */}
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>Recorded lectures to ace School exams</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>75+ chapter level tests & Exam guidance videos</p></p>
        <p style={{fontSize: "14px", marginTop: "1rem", color: "#494A4A", display: "flex", gap: "6px"}}><FontAwesomeIcon icon={faCheck} style={{fontSize: "11px", marginTop: "4px"}} /><p>15 (Full + Part) Syllabus tests to prep for Boards</p></p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingRight: "12px"}}>
          <p style={{fontSize: "1rem", color: "#1E1E22", fontWeight: "700", display: "flex", alignItems: "center"}}>₹11,016<p style={{fontSize: "12px", color:"#757575", marginTop: "2px", fontWeight: "600"}}> + Taxes Applicable</p></p>
          <p style={{fontSize: "14px", color: "#025FCA", fontWeight: "700"}}>Know more</p>
        </div>
      </div>
    </div>
  );
}