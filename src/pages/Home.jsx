import React from "react";
import { BsTelephone, BsMailbox } from "react-icons/bs";
import { FaLanguage, FaReact } from "react-icons/fa";
import { motion, scroll } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import { Parallax } from 'react-scroll-parallax';

import Accordion from "../components/Accordion";
const Home = () => {
  return (
    <div className="container">
      <TopImage></TopImage>
      <HeroSection></HeroSection>
      <AboutWork></AboutWork>
      <CV></CV>
      
      <Education></Education>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;

function HeroSection() {
  return (
    <section className="hero">
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="contacts-bar"
      >
        <span>
          <BsTelephone /> 09-429141883
        </span>
        <span>
          {" "}
          <BsMailbox /> kyawthantkhine@gmail.com
        </span>
        <span>
          {" "}
          <FaLanguage /> Myanmar{" "}
        </span>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="article"
      >
        <h2>
          👋 Hi, I am <span> Kyaw Thant Khine,</span>{" "}
        </h2>
        <h1 className="headding">
          <span className="bold">A front-end developer</span> with a
          passion for design &{" "}
          <span className="underline big-underline">React</span>.
        </h1>
        <p>
          I enjoy building solid and user-friendly web applications using my
          experience in interface design, Javascript and{" "}
          <FaReact className="react-icon" />
          React. Additionally, I am a highly adaptive and motivated fast
          learner. If you need a communicative front-end developer who enjoys
          working as part of a team, I’d love to hear from you!
        </p>
      </motion.div>
    </section>
  );
}

function AboutWork() {
  return (
    
    <motion.div
      initiasl={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      className="aboutWork"
    >
      <small>About my Work</small>
      <div className="about">
        <h1 className="headding">
          <span className="bold">3+ Years online experience </span>as a
          student
        </h1>
        <p>
          I am a front-end developer with a strong foundation in Html,Css and
          Javascript, which leads to better developer experiences in modern
          Frameworks.
        </p>
      </div>
      <div className="about2">
        <h3>FRONT-END DEVELOPMENT</h3>
        <p>
          I have extensive knowledge of HTML, CSS & JavaScript (ES6) and
          experience with the most popular framework (React). Add ambition,
          endless curiosity and a GTD‑mindset and you have a pretty complete
          picture of me.
        </p>
        <div className="icons">
          <img src="/images/html.png" alt="" />
          <img src="/images/css.png" alt="" />
          <img src="/images/javascript.png" alt="" />
          <img src="/images/react.png" alt="" />
        </div>
      </div>
      <div className="about3">
        <h3>My Dev Tools</h3>
        <p>
          Over the years, I've learned that there are spaceful of tools,
          frameworks and libraries to help solve any kind of problems. And it is
          not about what technology you use, it is about how well you use it to
          solve your problem in the most effective and efficient way.
        </p>
        <div className="icons">
          <img src="/images/node.png" alt="" />
          <img src="/images/sass.png" alt="" />
          <img src="/images/tailwind.png" alt="" />
          <img src="/images/git.png" alt="" />
          <img src="/images/netlify.png" alt="" />
          <img src="/images/framer.png" alt="" />
        </div>
      </div>
    </motion.div>
  );
}

function CV() {
  return (
    <motion.div
      className="cv"
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <small>Ciricullum Vitae</small>
      <h1 className="headding">
        Life has been a <span className="bold"> roller coaster</span>
      </h1>
      <p>
        From rocking the salesperson role to running my own brick-and-mortar
        store, and now diving into the captivating world of web development,
        it's been a journey filled with joy and cherished moments. Life has been
        a rollercoaster, and I've been lucky enough to enjoy the ride with a
        light-hearted spirit.
      </p>
    </motion.div>
  );
}

function Education() {
  return (
    
    <motion.div
      className="education"
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <small>Education</small>
      <div>
        <h1 className="headding">
          <span className="bold">Hands On Experience</span> directly translates
          to varified certificates.
        </h1>
        <p>
          I believe that Web Development is all about continuous learning, and
          I'm constantly exploring various avenues to expand my knowledge.
          Whether it's diving into online resources, devouring books on a wide
          range of subjects, or taking courses to enhance my skills, I embrace
          every opportunity to feed my curious mind.
        </p>
      </div>
      <div className="certificates"></div>
    </motion.div>
  );
}

function FAQ() {
  return (
    <motion.div
      className="faq"
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <div>
        <small>Faqs</small>
        <h1 className="headding">
          <span className="bold">Six things</span> you probably like to know
          from me
        </h1>
        <Accordion></Accordion>
      </div>
    </motion.div>
  );
}

function TopImage() {
  return (
    
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      className="poptrait"
    >
      <img src="/images/mypoptrait.jpg" alt=""></img>
    </motion.div>
  );
}
