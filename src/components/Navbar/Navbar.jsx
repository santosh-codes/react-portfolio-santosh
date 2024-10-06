import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { BsStack } from "react-icons/bs"; // Assuming the logo is a stack icon

const navLinks = [
  { title: "About", href: "#aboutme" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Blog", href: "#blog" },
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

  return (
    <div className="fixed top-0 left-0 w-full bg-[#1F1F1F] shadow-md">
      <nav className="flex items-center justify-between p-5 md:px-10 lg:px-32">
        {/* Logo on the left */}
        <div className="flex items-center">
          <BsStack size={30} className="mr-2 text-white" />
        </div>

        {/* Desktop Nav Links */}
        <ul
          className="hidden lg:flex font-Kaint gap-10 text-[18px] items-center"
          style={buttonStyle}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a href={link.href} className="text-white">
                {link.title}
              </a>
              <div className="absolute bottom-0 left-0 w-0 bg-white h-0.5 transition-all duration-300 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        {/* Contact Button on the right */}
        <button className="hidden lg:block bg-white text-[#1F1F1F] px-6 py-2 rounded-full">
          Contact Me
        </button>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden space-y-2" onClick={toggleMenu}>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="fixed left-0 top-0 w-full bg-[#1F1F1F] z-[9999] overflow-hidden"
          >
            <div className="flex flex-col h-full justify-center items-center">
              <RxCross2
                onClick={toggleMenu}
                className="absolute top-5 right-5 text-4xl text-white"
              />
              <ul className="flex flex-col gap-8 text-3xl items-center text-white">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={toggleMenu}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="mt-10 bg-white text-[#1F1F1F] px-6 py-3 rounded-full">
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
