import React, { useState } from "react";
import {
  SiSupabase,
  SiTwilio,
  SiMongodb,
  SiChakraui,
  SiTailwindcss,
  SiRedux,
  SiPuppeteer,
  SiRailway,
  SiVercel,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaHandshake,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FaGaugeHigh } from "react-icons/fa6";

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JS", icon: <FaJs /> },
  { name: "REACT", icon: <FaReact /> },
  { name: "REDUX", icon: <SiRedux /> },
  { name: "CHAKRA UI", icon: <SiChakraui /> },
  { name: "TAILWINDCSS", icon: <SiTailwindcss /> },
  { name: "NODE.JS", icon: <FaNodeJs /> },
  { name: "SUPABASE", icon: <SiSupabase /> },
  { name: "MONGODB", icon: <SiMongodb /> },
  { name: "GITHUB", icon: <FaGitAlt /> },
  { name: "TWILIO", icon: <SiTwilio /> },
  { name: "PUPPETEER", icon: <SiPuppeteer /> },
  { name: "RAILWAY", icon: <SiRailway /> },
  { name: "VERCEL", icon: <SiVercel /> },
];

const softSkills = [
  { name: "TEAMWORK", icon: <FaUsers /> },
  { name: "DEBUGGING", icon: <FaLightbulb /> },
  { name: "EFFICIENCY", icon: <FaGaugeHigh /> },
  { name: "RESILIENCE", icon: <FaShieldAlt /> },
];

function Skills() {
  const [selected, setSelected] = useState("all");

  const displaySkills =
    selected === "technical"
      ? technicalSkills
      : selected === "soft"
      ? softSkills
      : [...technicalSkills, ...softSkills];

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
          marginBottom: "30px",
        }}
      >
        Skills and Tools
      </h1>

      <div className="skills-filter">
        <button
          className={selected === "all" ? "active" : ""}
          onClick={() => setSelected("all")}
        >
          All
        </button>

        <button
          className={selected === "technical" ? "active" : ""}
          onClick={() => setSelected("technical")}
        >
          Technical Skills
        </button>

        <button
          className={selected === "soft" ? "active" : ""}
          onClick={() => setSelected("soft")}
        >
          Soft Skills
        </button>
      </div>

      <div className="skills_deta">
        {displaySkills.map((item) => (
          <div className="skills-card" key={item.name}>
            <div className="skills-card-img">{item.icon}</div>
            <p className="skills-card-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;