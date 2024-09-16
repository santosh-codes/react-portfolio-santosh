import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="px-12 py-20 md:px-16 lg:px-32 h-auto ">
      <Marquee pauseOnHover={true} className="cursor-pointer">
        <img src="htmll.svg.png" alt="" className="h-24 w-24 lg:h-28 lg:w-28" />
        <img src="css.png" alt="" className="h-24 w-24 lg:h-28 lg:w-28 mx-5" />
        <img
          src="/javascript.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img
          src="/typescript.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img
          src="/react.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28mx-5"
        />
        <img
          src="/nextjs-2.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img
          src="/tailwindcss.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img
          src="/figma.webp"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img
          src="/github.svg"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
        <img src="/zustand.png" alt="" className="h-28 w-44" />
        <img
          src="/spring.png"
          alt=""
          className="h-24 w-24 lg:h-28 lg:w-28 mx-5"
        />
      </Marquee>
    </div>
  );
};

export default Skills;
