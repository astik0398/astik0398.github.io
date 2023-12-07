import React, { useState } from "react";
import AllRoutes from "./AllRoutes";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import logo from "../images/Kumar_Astik_Logo-removebg-preview.png"

function Navbar() {
  const [show, setshow] = useState(true);
  const [display, sedisplay] = useState(true)
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  const toggle = () => {
    setshow(!show);
    sedisplay(!display)
  };

  const goTo = (activeurl) => {
    if (activeurl) {
      setCurrentPath(activeurl)
    }
    setshow(true);
    sedisplay(true)
  };

  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1CqmRqBeHW8WcD1hvW05HA98nJvMbKsfE/view?usp=sharing",
      "_blank"
    )
  };

  return (
    <div className="navbar" id="nav-menu">
      <div>
        <img style={{width:'200px'}} src={logo} alt="" />
      </div>
      <button className="menu-btn" onClick={toggle}>
        {show ? <MdMenu/> : <FaXmark/>}
      </button>

      <div className="links" id={display ? "close" : "open"}>
        <a onClick={()=>goTo('#home')} className={`nav-link home ${currentPath == "#home" ? "link-active" : ""}`} href="#home">
          Home
        </a>
        <a onClick={()=>goTo('#about')} className={`nav-link about ${currentPath == "#about" ? "link-active" : ""}`} href="#about">
          About
        </a>
        <a onClick={()=>goTo('#skills')} className={`nav-link skills ${currentPath == "#skills" ? "link-active" : ""}`} href="#skills">
          Skills
        </a>
        <a onClick={()=>goTo('#projects')} className={`nav-link projects ${currentPath == "#projects" ? "link-active" : ""}`} href="#projects">
          Projects
        </a>
        <a onClick={()=>goTo('#contact')} className={`nav-link contact ${currentPath == "#contact" ? "link-active" : ""}`} href="#contact">
          Contact
        </a>
        {/* <a  className='nav-link resume' id='resume-button-1' href="#resume">Resume</a> */}
        <Link onClick={()=>goTo(false)} 
          className="nav-link resume"
          to="https://drive.google.com/uc?export=download&id=1CqmRqBeHW8WcD1hvW05HA98nJvMbKsfE"
        >
          <button
            id="resume-button-1"
            //  style={{  
            //    background: "none",
            //    border: "none",
            //    fontWeight: "bold",
            //    fontSize: "20px",
            //  }}
            onClick={resumedown}
          >
            <i style={{ marginRight: "5px" }} className="far fa-file-alt"></i>
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;