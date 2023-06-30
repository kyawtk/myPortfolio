import React, { useState } from "react";
import { motion ,stagger} from "framer-motion";
import { BsPlusCircle, BsFolderMinus } from "react-icons/bs";
import { accordionData } from "./accordionData";


const Accordion = () => {
  const [data, setData] = useState(accordionData);
  return (
    <div className="accordion">
      {data.map((item) => {
        return <AccordionItem key={item.id} {...item}></AccordionItem>;
      })}
    </div>
  );
};

export default Accordion;

function AccordionItem({ title, id, info }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleAccordion() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="accordionItem">
      <motion.div
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 1 }}
        onClick={handleAccordion}
        className="accordion-header"
      >
        <h1 className="accordion-title">{title}</h1>
        <button>{isOpen ? <BsFolderMinus /> : <BsPlusCircle />}</button>
      </motion.div>

      <motion.div
      initial={{
        opacity:0,
        y:-200
      }
      }
      transition={{duration:0.3}}
        animate={{
          
          y:0,
          opacity: 1,
          height: isOpen ? "auto" : 0,
        }}
        className={`accordion-info`}
      >
        <p className="">{info}</p>
      </motion.div>
    </div>
  );
}
