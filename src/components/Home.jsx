import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  // const clientCount = useRef(null);
  const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  const animationProjectsCount = () => {
    animate(0, 15, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Ajay Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Fitness Enthusiast"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:whosinghajay@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    15
                  </motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>whosinghajay@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ajay" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
