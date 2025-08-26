import "../../styles/footer.css";
export default function Footer() {
  return (
    <div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "55px", padding: "24px 14rem", backgroundColor: "#F7F9FF"}}>
            <div className="section">
                <span>About</span>
                <ul >
                    <li><a>About us</a></li>
                    <li><a>Blog</a></li>
                    <li><a>News</a></li>
                    <li><a>MyExam EduBlogs</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Public notice</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Dhoni Inspires NEET Aspirants</a></li>
                    <li><a>Dhoni Inspires JEE Aspirants</a></li>
                </ul>
            </div>
            <div className="section">
                <span>Help & Support</span>
                <ul>
                    <li><a>Refund policy</a></li>
                    <li><a>Transfer policy</a></li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Contact us</a></li>
                    
                </ul>
            </div>
            <div className="section">
                <span>Popular goals</span>
                <ul>
                    <li><a>NEET Coaching</a></li>
                    <li><a>JEE Coaching</a></li>
                    <li><a>6th to 10th</a></li>
                    
                </ul>
            </div>
            <div className="section">
                <span>Courses</span>
                <ul>
                    <li><a>Online Courses</a></li>
                    <li><a>Distance Learning</a></li>
                    <li><a>Online Test Series</a></li>
                    <li><a>International Olympiads Online Course</a></li>
                    <li><a>NEET Test Series</a></li>
                    <li><a>JEE Test Series</a></li>
                    <li><a>JEE Main Test Series</a></li>
                    <li><a>JEE Advanced Test Series</a></li>
                </ul>
            </div>
            <div className="section">
                <span>Centers</span>
                <ul>
                    <li><a>Kota</a></li>
                    <li><a>Banglore</a></li>
                    <li><a>Indore</a></li>
                    <li><a>Delhi</a></li>
                    <li><a>More centers</a></li>
                    
                </ul>
            </div>
            <div className="section">
                <span>Exam information</span>
                <ul>
                    <li><a>JEE Main</a></li>
                    <li><a>JEE Advanced</a></li>
                    <li><a>NEET UG</a></li>
                    <li><a>CBSE</a></li>
                    <li><a>NCERT Solutions</a></li>
                    <li><a>Olympiad</a></li>
                    <li><a>NEET 2025 Results</a></li>
                    <li><a>NEET 2025 Answer Key</a></li>
                    <li><a>NEET College Predictor</a></li>
                    <li><a>NEET 2025 Counselling</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
  );
}