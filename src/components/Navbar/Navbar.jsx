import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  { title: "About Me", href: "#aboutme" },
  { title: "Skills", href: "" },
  { title: "Blogs", href: "/" },
  { title: "Contact", href: "/" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    document.body.style.overflow = !open ? "hidden" : "auto";
  };

  const buttonStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div>
      <div className="w-full h-auto py-1 md:py-5 md:px-10 lg:py-10 xl:py-5 lg:px-32 xl:px-28">
        <nav className="flex items-center justify-between p-7 md:p-0">
          <div className="rounded-full flex items-center">
            <img
              src="/santosh-adhikari.webp"
              alt="Santosh Adhikari"
              className="w-16 lg:w-20 2xl:w-12 xl:w-28 xl:h-28 2xl:h-12 rounded-full object-cover"
            />
            <h1 className="pl-3 text-2xl lg:text-3xl xl:text-lg text-lightgray">
              Santosh Adhikari
            </h1>
            {/* <img src="/bluetick.png" className="w-8 h-7 pl-1" alt="BlueTick" /> */}
          </div>

          <div className="space-y-2 mr-7 block lg:hidden" onClick={toggleMenu}>
            <span className="block w-14 h-1 bg-[#FF005A]"></span>
            <span className="block w-14 h-1 bg-[#FF005A]"></span>
            <span className="block w-10 h-1 bg-[#FF005A]"></span>
          </div>

          <ul
            className="lg:flex font-Kaint gap-7 text-[18px] cursor-pointer hidden"
            style={buttonStyle}
          >
            <li className="relative group">
              <a href="#aboutme" className="text-lightgray">
                About Me
              </a>
              <div className="absolute bottom-0 left-0 w-0 bg-[#FF005A] h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a href="#skill" className="text-lightgray">
                Skills
              </a>
              <div className="absolute bottom-0 left-0 w-0 bg-[#FF005A] h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a href="#blogs" className="text-lightgray">
                Blogs
              </a>
              <div className="absolute bottom-0 left-0 w-0 bg-[#FF005A] h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a href="#Contact" className="text-lightgray">
                Contact
              </a>
              <div className="absolute bottom-0 left-0 w-0 bg-[#FF005A] h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-white p-10 z-[9999]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl text-[#FF005A]">Santosh Adhikari</h1>
                <RxCross2
                  onClick={toggleMenu}
                  className="text-6xl text-[#FF005A] mr-3"
                />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-[#FF005A] py-5"
    >
      <a href={href}>{title}</a>
    </motion.div>
  );
};
