import { useRef } from "react";
import "./blog.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AWS Cloud Resume Challenge",
    img: "/aws.avif",
    src: "https://santosh-codes.hashnode.dev/aws-cloud-resume-challenge",
    desc: "The AWS Cloud Resume Challenge is a practical project where we build and deploy a personal resume website using Amazon Web Services (AWS).",
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
