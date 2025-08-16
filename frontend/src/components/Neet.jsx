import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheck} from '@fortawesome/free-solid-svg-icons';

export default function Neet() {
  return (
    <div className="course-container">
      <div style={{backgroundColor: "#1C1D1D", borderRadius: "15px", height:"1.5rem", width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", padding: "0px 10px"}}>
        <FontAwesomeIcon icon={faVideo} style={{color: "white", marginRight: "6px", fontSize: "14px"}}/>
        <p style={{color: "#FFFFFF", fontWeight: "600", fontSize: "12px"}}>LIVE</p>
      </div>
      <p>Achiever Online Course</p>
      <p>Focuses on advanced concepts</p>
      <p><FontAwesomeIcon icon={faCheck} />Interactive Live classes with personalised attention</p>
    </div>
  );
}