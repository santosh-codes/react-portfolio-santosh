import "./Aboutme.scss";
const AboutMe = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center flex-col px-4 xl:px-36 py-16 lg:py-0 h-auto"
        id="about"
      >
        <h2 className="relative xl:text-[50px] mb-0 text-center text-[28px]">
          About <span className="text-[#FF335F]">Me</span>
          <span className="animate scroll" />
        </h2>
        <div className="relative xl:w-[25rem] xl:h-[25rem] rounded-[50%] mt-10 xl:pt-0 flex justify-center items-center">
          <img
            src="saroj.png"
            alt=""
            className="w-[30vh] xl:w-[75%] rounded-[50%] border-[0.2rem] border-[solid] border-[#FF335F]"
          />
          <span
            className={`absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rotate-[0] w-[35vh] h-[35vh] xl:w-[85%] xl:h-[85%] rounded-[50%] border-t-[0.2rem] border-t-solid border-t-[#111132] border-b-[0.2rem] border-b-solid border-b-[#111132] border-l-[0.2rem] border-l-solid border-[#FF335F]  border-r-[0.2rem] border-r-solid border-r-[#FF335F]}`}
            id="aboutSpinner"
          />
          <span className="animate scroll" />
        </div>
        <div className="text-center pt-32 py-0 xl:pt-0">
          <h3 className="relative inline-block text-[18px] xl:text-[26px]">
            Hi there! Glad to see you here.
            <span className="animate scroll" />
          </h3>
          <p className="relative xl:text-[16px] text-[13px] mt-8 mx-[0] mb-6">
            Hello! Saroj gurung here. A technology fanatic!
            <br />
            Currently, I am enrolled in the Department of Information and
            Communication Technology at Butwal Multiple Campus in Butwal. My
            early education was completed from Swarnim Sagarmatha College and
            Devdaha Mother Tongues Academy in Khaireni.
          </p>
          <div className="btnboxbtns">
            <a href="#contact" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
