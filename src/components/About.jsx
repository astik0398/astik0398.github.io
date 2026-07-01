import React from "react";

// import img1 from "../assests/Saly-16.png";
// import img2 from "../assests/Saly-10.png";

function About() {
  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <div className="about_card">
        {/* <img className="about_img" src={img2} alt="" /> */}
        <p id="user-detail-intro" className="my-details">
          Full Stack Developer with 2+ years of experience building
          production-ready web applications. I enjoy solving real-world problems
          by developing scalable, user-focused products from concept to
          deployment. Passionate about creating clean, responsive, and
          high-performance web applications, I continuously explore new
          technologies and best practices to build impactful software.
        </p>
      </div>
    </div>
  );
}

export default About;
