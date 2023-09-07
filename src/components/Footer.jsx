import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://whosinghajay.github.io/portfolioajay/image/images/background20.jpg"}
          alt="Founder"
        />

        <h2>Ajay Singh</h2>
        <p>whosinghajay@gmail.com</p>
        <p>+91 9557886976</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://wa.me/+919557886976" target={"blank"}>
            <AiOutlineWhatsApp />
          </a>
          <a href="https://www.instagram.com/ajayyssingh/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/whosinghajay" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/ajay-singh-27532827b" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
