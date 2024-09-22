import { useRef } from "react";
import "./blog.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Zustand",
    img: "/zustand2.png",
    src: "https://medium.com/@gurungsaroj98k/zustand-4d567c1f4b99",
    desc: "Zustand is a minimalist React state management library that simplifies state handling in applications. It provides a straightforward API, using hooks, to manage shared state with minimal boilerplate code.",
  },
  {
    id: 2,
    title: "TanStack Query",
    img: "/tan.png",
    src: "https://medium.com/@gurungsaroj98k/tanstack-query-6f1c7e517961",
    desc: "TanStack Query is a powerful tool for data retrieval and analysis. It streamlines database queries, offering efficient and concise commands for developers to interact with databases seamlessly and effectively.",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    img: "/cs.png",
    src: "https://medium.com/@gurungsaroj98k/tailwind-css-4699498d72a5",
    desc: "Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed, low-level utility classes. It promotes a rapid and efficient approach to styling websites.",
  },
  {
    id: 4,
    title: "React Spring",
    img: "/spring1.webp",
    desc: "React Spring is a powerful animation library for React applications. It simplifies complex animations with a declarative API, offering physics-based motion and seamless integration with React components for stunning UI interactions.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="blogs">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="text-justify">{item.desc}</p>
            <a href={item.src} target="_blank" rel="noreferrer">
              <button>Read Article</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="text-[50px]"><span className="text-white">Featured</span> Blogs</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Blog;
