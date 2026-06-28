import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiTwilio,
  SiOpenai,
  SiPostman,
  SiTypescript,
  SiChakraui,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiPuppeteer,
  SiRailway,
  SiVercel,
} from "react-icons/si";

import {FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"

{
  /* <FaHtml5 style={{ fontSize: "100px" }} />
<FaJsSquare style={{ fontSize: "100px" }} />
<FaCss3Alt style={{ fontSize: "100px" }} /> */
}
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5/>,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt/>,
  },
  {
    name: "JS",
    icon: <FaJs />,
  },
  {
    name: "REACT",
    icon: <FaReact />,
  },
  {
    name: "REDUX",
    icon: <SiRedux />,
  },
  {
    name: "CHAKRA UI",
    icon: <SiChakraui />,
  },

   {
    name: "TAILWINDCSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "NODE.JS",
    icon: <FaNodeJs />,
  },


   {
    name: "SUPABASE",
    icon: <SiSupabase />,
  },
  {
    name: "MONGODB",
    icon: <SiMongodb />,
  },

  {
    name: "GITHUB",
    icon: <FaGitAlt />,
  },

   {
    name: "TWILIO",
    icon: <SiTwilio />,
  },

    {
    name: "PUPPETEER",
    icon: <SiPuppeteer />,
  },

      {
    name: "RAILWAY",
    icon: <SiRailway />,
  },

      {
    name: "VERCEL",
    icon: <SiVercel />,
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
