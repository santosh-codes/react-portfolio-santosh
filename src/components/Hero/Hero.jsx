/* eslint-disable react/no-unescaped-entities */
import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const textVarients = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  return (
    <div>
      <section
        className="home h-auto show-animate py-28 md:py-40 xl:py-24 md:px-10 lg:px-32 xl:px-28"
        id="home"
      >
        <div className="home-content text-center">
          <h1>
            Hi, I'm <span>Santosh Adhikari</span>
          </h1>
          <div className="flex items-center justify-center">
            <div className="text-animate text-center">
              <h3>DevOps Engineer</h3>
            </div>
          </div>
          <p className="text-center">
            I am a dedicated, self-assured, and eager learner who is constantly
            looking for opportunities to pick up the new abilities. I
            particularly want to put my knowledge and experience in Web
            Development to use. To the best of my knowledge, avidly seeks to
            serve a professional organization with sincere devotion, diligence,
            and commitment.
          </p>
          <div className="flex xl:w-auto gap-x-7 lg:gap-x-6">
            <a href="https://github.com/">
              <img
                alt=""
                src="/github4.png"
                className="w-20 md:w-24 xl:w-28 2xl:w-16"
              ></img>
            </a>
            <a href="">
              <img
                alt=""
                src="/facebook4.png"
                className="w-20 md:w-24  xl:w-28 2xl:w-16"
              ></img>
            </a>
            <a href="">
              <img
                alt=""
                src="/linkedin4.png"
                className="w-20 md:w-24  xl:w-28 2xl:w-16"
              ></img>
            </a>
            <a href="https://medium.com/@gurungsaroj98k">
              <img
                alt=""
                src="/instagram4.png"
                className="w-20 md:w-24 xl:w-28 2xl:w-16"
              ></img>
            </a>
          </div>
          <div className="flex justify-center py-10 xl:py-5">
            <motion.img
              src="/mouse-cursor1.png"
              variants={textVarients}
              animate="scrollButton"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
