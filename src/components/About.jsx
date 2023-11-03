import React from "react";

// import img1 from "../assests/Saly-16.png";
// import img2 from "../assests/Saly-10.png";

function About() {
  return (
    <div >
      <h1 style={{textAlign:'center', marginTop:'50px', backgroundColor: "#200589",
          width: "200px",
          margin: "auto",
          padding: "5px",
          borderRadius: "15px",
          color: "white",}}>About Me</h1>
    
    <div id="about" className="about section">
      
      <div className="about_card">
        {/* <img className="about_img" src={img2} alt="" /> */}
        <p id="user-detail-intro" className="my-details">
          Experienced Full Stack Web Developer with 1200+ hours of coding
          experience in the MERN stack. Strong command of CSS and adept at
          building solo and collaborative projects. Demonstrates excellent
          technical skills in front-end and back-end development, coupled with
          effective problem-solving abilities. Ready to deliver impactful web
          solutions.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
