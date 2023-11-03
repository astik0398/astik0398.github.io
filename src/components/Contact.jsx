import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
function Contact() {

  return (
    <div id="contact">
      <div style={{marginTop:'-25px', paddingTop:'15px'}} className="contact_details">
        <h2>Contact-Me</h2>
        <p id="contact-phone"> Phone number : +91 7980018498</p>
        <p id="contact-email"> Email: kumarastik0398@gmail.com</p>

        <div className="my_icon">
           <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
           <label >GitHub</label>
          <a id="contact-github" href="https://github.com/astik0398">
            <FaGithub/>
          </a>
           </div>
          <br />
          <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
          <label>Linkedin</label>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/kumar-astik-9444361b5/"
          >
           <FaLinkedin/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;