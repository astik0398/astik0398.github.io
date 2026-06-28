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
          Full-stack developer with close to two years of experience building
          production software, most recently at an early-stage startup where I
          built an AI-powered, WhatsApp-first workforce management platform
          end-to-end. My core stack is MERN, complemented by Supabase and the
          Twilio/WhatsApp Business API for building messaging-driven products.
          Beyond my startup role, I independently designed and shipped a
          medicine price comparison platform with over 100+ registered users,
          enabling people to compare medicine prices across multiple platforms
          and find the best deals.
        </p>
      </div>
    </div>
  );
}

export default About;
