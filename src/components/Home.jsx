import React from "react";

// import myimg from "../assests/my img.jpeg";
import photo from "../images/formalphoto.png";
import { Link } from "react-router-dom";

function Home() {

  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1CqmRqBeHW8WcD1hvW05HA98nJvMbKsfE/view?usp=sharing",
      "_blank"
      
    );
  };

  return (
    <div id="home">
      {/* <img className="backk" src="https://moneer-portfolio.netlify.app/static/media/fogtree.950d4c4e05476e6c70bb.jpg" alt="" /> */}

  
      <div className="my-info">
        <h2>Hello there! 👋 </h2>
        <h1 id="user-detail-name">My name is Kumar Astik</h1>
        <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1CqmRqBeHW8WcD1hvW05HA98nJvMbKsfE"
          >
            <button
              id="resume-button-2"
              style={{borderRadius: '25px', fontSize:'25px'}}
              onClick={resumedown2}
            >
              Resume
            </button>
          </Link>
      </div>
      <div >
        <img style={{border:'1px solid #200589'}} className="home-img" src={photo} alt="" />
      </div>

    </div>
  );
}

export default Home;