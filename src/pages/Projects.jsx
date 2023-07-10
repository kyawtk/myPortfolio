import React, { useState } from "react";
import "./Projects.scss";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from 'react-parallax-tilt'
const Projects = () => {
  return (
    <div className="projects">
      <ProjectCard></ProjectCard>
      {
        projectData.map(project=>{
          return <ProjectCard key={project.title} {...project}></ProjectCard>
        })
      }
    </div>
  );
};

export default Projects;

function ProjectCard({color,title,href,imgSrc}) {
  
  return (
   
    <motion.div
    initial={{
      x:100,
      opacity:0
    }}
    whileInView={{
      x:0,
      opacity:1
    }}
    className={`projectCard`}>
      <img src={imgSrc} alt="" />

      <div className="project-info">
        <h1>{title}</h1>
        <a href={href}> View Demo</a>
      </div>
    </motion.div>
  );
}


const projectData = [
  {title: 'Entertainment Spree', href: 'https://entertainment-spree.netlify.app', imgSrc:'./images/movie.jpg'},
  { title:'Magic The Gathering', href: 'https://mtgmemory.netlify.app/',imgSrc:'/images/mtg.jpg'},
  { title:'Lovely Notes', href: 'https://lovely-notes.netlify.app/',imgSrc:'/images/notes.png'},
  { title:'Color Generator', href: 'https://lovely-color-generator.netlify.app/',imgSrc:'/images/colors.jpg'},
  { title:'Travel Agency', href: 'https://myanmaradventureskyawtk.netlify.app/',imgSrc:'/images/travelAgency.jpg'},
  { title:'Project Planner', href: 'https://projectplanerkyawtk.netlify.app/',imgSrc:'/images/projectPlanner.jpg'},
  { title:'Reserve Budget', href: 'https://budget-reserve.netlify.app/',imgSrc:'/images/budgetReserve.jpg'},
  { title:'Get your CV', href: 'https://cv-onepage-generator.netlify.app/',imgSrc:'/images/cv.jpg'},
  { title:'Tic Tac Toe', href: 'https://tictactoekyawtk.netlify.app/',imgSrc:'/images/tic.jpg'},
  { title:'Bordom Killer', href: 'https://bordomkiller.netlify.app/',imgSrc:'/images/bored.jpg'},
]

