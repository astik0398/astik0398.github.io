import React from "react";
import {
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaSass,
  FaNodeJs,
  FaDribbble,
} from "react-icons/fa";
{
  /* <FaHtml5 style={{ fontSize: "100px" }} />
<FaJsSquare style={{ fontSize: "100px" }} />
<FaCss3Alt style={{ fontSize: "100px" }} /> */
}
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JS",
    icon: <FaJsSquare />,
  },
  {
    name: "REACT",
    icon: <FaReact />,
  },
  {
    name: "REDUX",
    icon: <FaHtml5 />,
  },
  {
    name: "CHAKRA UI",
    icon: <FaSass />,
  },
  {
    name: "NODE.JS",
    icon: <FaNodeJs />,
  },
  {
    name: "DRIBBLE",
    icon: <FaDribbble />,
  },
];

function Skills() {
  return (
    <div id="skills">
      <h1
        style={{
          backgroundColor: "#200589",
          width: "300px",
          margin: "auto",
          padding: "5px",
          borderRadius: "15px",
          color: "white",
          marginBottom:'50px'
        }}
      >
        Skills and Tools
      </h1>
      <div className="skills_deta">
        {skills.map((item) => (
          <div className="skills-card">
            {/* className="skills-card-img" */}
            <div className="skills-card-img">{item.icon}</div>
            <p className="skills-card-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"
