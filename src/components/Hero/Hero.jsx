/* eslint-disable react/no-unescaped-entities */
import "./Hero.scss";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
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
        <div className="home-content">
          <h1 className="text-center w-full">
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
          <div className="flex items-center gap-3 pt-5">
            <a
              href="https://github.com/santosh-codes"
              rel="noreferrer"
              target="_blank"
            >
              <div className="bg-[#141414] px-5 py-1 rounded-md">
                <div className=" flex items-center gap-2 text-2xl">
                  <IoLogoGithub className="text-[#ff335f]" />
                  <span className="text-white font-medium ">Github</span>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/santosh-adhikari7531/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="bg-[#141414] px-5 py-1 rounded-md">
                <div className=" flex items-center gap-2 text-2xl">
                  <IoLogoLinkedin className="text-[#ff335f]" />
                  <span className="text-white font-medium ">LinkedIn</span>
                </div>
              </div>
            </a>
            <a href="mailto:santoshadhikari1345@gmail.com">
              <div className="bg-[#141414] px-5 py-1 rounded-md">
                <div className=" flex items-center gap-2 text-2xl">
                  <MdEmail className="text-[#ff335f]" />
                  <span className="text-white font-medium ">Email</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
