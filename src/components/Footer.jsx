import { motion } from "framer-motion";
import { BsTelephone, BsMailbox } from "react-icons/bs";
import { FaLanguage, FaReact } from "react-icons/fa";
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <p>
        Feel free to contact me if you're looking for a communicative front-end
        developer who is passionate about creating great user experiences or
        just want to have a chat.
      </p>
      <motion.div className="business-card">
        <div className="card-img">
            <img src="/images/selfie.jpg" alt="" />
        </div>
        <div className="card-info">
          <h3>Kyaw Thant Khine</h3>
          <p>Front End Web Developer</p>
          <div className="contacts-bar">
            <span>
              <BsTelephone /> 09-429141883
            </span>
            <span>
              <BsMailbox /> kyawthantkhine@gmail.com
            </span>
            <span>
              <FaLanguage /> Myanmar
            </span>
          </div>
        </div>
      </motion.div>
      <small>Copy Rights Reserved all assets ©️</small>
    </footer>
  );
};

export default Footer;
