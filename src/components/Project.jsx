import React from "react";
import abc from "../images/abc.png";
import dressify from "../images/dressify.png";
import oddgras from "../images/greenscapes.png";
import brightSight from "../images/brightSight.png"


import { FaCss3Alt, FaJsSquare, FaHtml5, FaReact } from "react-icons/fa";
// https://react-icons.github.io/react-icons/icons?name=fa

let projects = [

  {
    title: "Star Fishries",
    img1: abc,
    description: "Star fishries is an online food ordering website where you can order yourself some delicious snacks. We have a wide rane of fast foods ranging from chicken nuggets to wraps, you'll get all of them here.",
    skills: [
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
    ],
    git: "https://github.com/astik0398/gusty-crow-4734",
    preview: "https://starfishries.netlify.app/",
  },
  {
    title: "Dressify",
    img1: dressify,
    description: "Dressify is one-stop destination for fashionable clothing  for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",
    skills: [
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
    ],
    git: "https://github.com/astik0398/ambiguous-oven-8467",
    preview: "https://dressify-shopping.netlify.app/",
  },
  {
    title: "Green Escapes",
    img1: oddgras,
    description: "If you are into exploring natures then our website Green Escapes is for you. This website mainly targets the people who love adventures and travelling the world. It provides facilities to book your destination, Hotels and Activities in just one click. It has simple and user Friendly UI/UX.",  
    
    skills: [
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
    ],
    git: "https://github.com/harsh7739/odd-grass-4307",
    preview: "https://resonant-meringue-f6cdea.netlify.app/index.html",
  },
  {
    title: "Bright Sight",
    img1: brightSight,
    description: "This website is dedicated to providing top-notch ophthalmological services with ease and convenience. Whether you're looking to book an appointment with a specialist or simply seeking information about our experienced doctors, you've come to the right place.",

    skills: [
      {
        name: "REACT",
        icon: <FaReact/>,
      },
      {
        name: "CHAKRA",
        icon: <FaCss3Alt />, 
      },
    ],
    git: "https://github.com/mohdadil12345/gamy-part-5391",
    preview: "https://splendorous-arithmetic-9d81d2.netlify.app/",
  },
  // {
  //   title: "project-1",
  //   img1: abc,
  //   img2: abc2,
  //   description: "Dressify is one-stop destination for fashionable clothing and accessories for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",

  //   skills: [
  //     {
  //       name: "HTML",
  //       icon: <FaHtml5 />,
  //     },
  //     {
  //       name: "CSS",
  //       icon: <FaCss3Alt />,
  //     },
  //     {
  //       name: "JS",
  //       icon: <FaJsSquare />,
  //     },
  //   ],
  //   git: "https://github.com/astik0398/ambiguous-oven-8467",
  //   preview: "https://dressify-shopping.netlify.app/",
  // },
  // {
  //   title: "project-2",
  //   img1: abc,
  //   img2: abc2,
  //   description: "Dressify is one-stop destination for fashionable clothing and accessories for men, women and children. Anyone can go through the wide range of products that are available on our website and order the desired one",

  //   skills: [
  //     {
  //       name: "HTML",
  //       icon: <FaHtml5 />,
  //     },
  //     {
  //       name: "CSS",
  //       icon: <FaCss3Alt />,
  //     },
  //     {
  //       name: "JS",
  //       icon: <FaJsSquare />,
  //     },
  //   ],
  //   git: "https://github.com/astik0398/ambiguous-oven-8467",
  //   preview: "https://dressify-shopping.netlify.app/",
  // },
];

function Projects() {
  return (
    <div id="projects">
      <h1>My Projects </h1>
      <div className="all_projects">
        {projects.map((el) => (
          <div className="project-card">
            <div style={{display:'flex', alignItems:'center'}} className="pro-img">
              <img src={el.img1} alt="" />
            </div>

            <div className="pro-Info">
              <h2 className="project-title">{el.title}</h2>
              <p className="project-description">{el.description}</p>
              <h2>Tech Stack</h2>
              <div className="project-tech-stack">
                {el.skills.map((skill) => (
                  <div className="skills-card">
                    {skill.icon}
                    <p style={{ fontSize: "20px" }}>{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="pro-anchortag" style={{display:'flex', margin:'auto', gap:'15px'}}>
                <a
                  className="project-github-link"
                  href={el.git}
                  target="_blank"
                >
                  <button id="gt_btn">View on Github</button>
                </a>
                <a
                  className="project-deployed-link"
                  target="_blank"
                  href={el.preview}
                >
                  <button id="dep_btn">Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

// Each project card in the Projects section should have class="project-card" and the following:
// Image of the project
// Title : class="project-title"
// Description : class="project-description"
// Tech stack used : class="project-tech-stack"
// Link to GitHub repository : class="project-github-link"
// Deployed link or video link : class="project-deployed-link"