// import "./Aboutme.scss";
// const AboutMe = () => {
//   return (
//     <div>
//       <div
//         className="flex justify-center items-center flex-col px-4 xl:px-36 py-16 lg:py-0 h-auto"
//         id="about"
//       >
//         <h2 className="relative xl:text-[50px] mb-0 text-center text-[28px]">
//           About <span className="text-[#FF335F]">Me</span>
//           <span className="animate scroll" />
//         </h2>
//         <div className="relative xl:w-[25rem] xl:h-[25rem] rounded-[50%] mt-10 xl:pt-0 flex justify-center items-center">
//           <img
//             src="santosh-adhikari.webp"
//             alt=""
//             className="w-[30vh] xl:w-[75%] rounded-[50%] border-[0.2rem] border-[solid] border-[#FF335F]"
//           />
//           <span
//             className={`absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rotate-[0] w-[35vh] h-[35vh] xl:w-[85%] xl:h-[85%] rounded-[50%] border-t-[0.2rem] border-t-solid border-t-[#111132] border-b-[0.2rem] border-b-solid border-b-[#111132] border-l-[0.2rem] border-l-solid border-[#FF335F]  border-r-[0.2rem] border-r-solid border-r-[#FF335F]}`}
//             id="aboutSpinner"
//           />
//           <span className="animate scroll" />
//         </div>
//         <div className="text-center pt-32 py-0 xl:pt-0">
//           <h3 className="relative inline-block text-[18px] xl:text-[26px]">
//             Hi there! Glad to see you here.
//             <span className="animate scroll" />
//           </h3>
//           <p className="relative xl:text-[16px] text-[13px] mt-8 mx-[0] mb-6">
//             Hello! Santosh Adhikari here. A technology fanatic!
//             <br />
//             Currently, I am enrolled in the Department of Information and
//             Communication Technology at Butwal Multiple Campus in Butwal. My
//             early education was completed from Swarnim Sagarmatha College and
//             Devdaha Mother Tongues Academy in Khaireni.
//           </p>
//           <div className="btnboxbtns">
//             <a href="#contact" className="btn">
//               Download CV
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  CalendarCheck,
  CalendarX,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Santosh Adhikari",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+977 9703372025",
  },
  {
    icon: <MailIcon size={20} />,
    text: "nepalisrk@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Computer Application",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Butwal, Devinagar",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bacholer of Science",
        years: "2015-2028",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019-2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2022-2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018-2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020-2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "certificates",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
];

const AboutMe = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <div className="xl:h-[860px] pb-12 xl:py-16" id="aboutme">
      <div className="container mx-auto">
        <h2 className="container-title mb-8 xl:mb-14 text-center mx-auto xl:text-[50px] text-[28px]">
          About <span className="text-[#FF335F]">Me</span>
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative ">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border xl:border-gray-400">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="certificates">
                  Certificates
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="text-3xl font-bold mb-4">
                      Unmatched Sevices Quality for Over 10 Years
                    </h3>
                    <p className="max-w-xl mx-auto xl:mx-0 mb-4">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-[#ff335f]">{item.icon}</div>
                            <div className="font-semibold">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="font-semibold text-[#ff335f] ">
                        Language Skill
                      </div>
                      <div className="border-b border-gray-500"></div>
                      <div>English, Nepali Spanish, French</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="text-3xl font-bold h-3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-[#ff335f]">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className="flex gap-x-9 group">
                                  <div className="h-[84px] w-[1px] bg-gray-500 relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#ff335f] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-[#ff335f]">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-9 group">
                                  <div className="h-[84px] w-[1px] bg-gray-500 relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#ff335f] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="certificates">
               
                  <div className="flex flex-col gap-5 xl:flex-row">
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-10 h-10"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.63 31.388l-7.135-2.56V18.373l7.135 2.43zm1.3 0l7.135-2.56V18.373l-7.135 2.43zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273zm-2.092-.8L0 14.22V3.75l7.135 2.43zm1.307 0l7.135-2.56V3.75L8.443 6.31zm-7.7-13.8l7.2-2.043 6.696 2.16-6.696 2.273zm23.052 13.8l-7.135-2.56V3.75l7.135 2.43zm1.3 0l7.135-2.56V3.75l-7.135 2.43zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273z"
                                  fill="#FF9900"
                                />
                              </svg>
                              <span className="text-2xl font-bold text-gray-800">
                                AWS
                              </span>
                            </div>
                            <Award className="w-8 h-8 text-yellow-500" />
                          </div>
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Certified Solutions Architect
                          </h2>
                          <p className="text-gray-600 mb-4">
                            Professional Level Certification
                          </p>
                          <div className="flex items-center space-x-2 text-green-600 mb-4">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">Verified</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-10 h-10"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.63 31.388l-7.135-2.56V18.373l7.135 2.43zm1.3 0l7.135-2.56V18.373l-7.135 2.43zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273zm-2.092-.8L0 14.22V3.75l7.135 2.43zm1.307 0l7.135-2.56V3.75L8.443 6.31zm-7.7-13.8l7.2-2.043 6.696 2.16-6.696 2.273zm23.052 13.8l-7.135-2.56V3.75l7.135 2.43zm1.3 0l7.135-2.56V3.75l-7.135 2.43zm-7.7-13.8l7.2-2.033 6.696 2.16-6.696 2.273z"
                                  fill="#FF9900"
                                />
                              </svg>
                              <span className="text-2xl font-bold text-gray-800">
                                AWS
                              </span>
                            </div>
                            <Award className="w-8 h-8 text-yellow-500" />
                          </div>
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Certified Solutions Architect
                          </h2>
                          <p className="text-gray-600 mb-4">
                            Professional Level Certification
                          </p>
                          <div className="flex items-center space-x-2 text-green-600 mb-4">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">Verified</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                    
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
