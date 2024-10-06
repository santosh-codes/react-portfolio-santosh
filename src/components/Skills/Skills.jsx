"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const skills = [
  {
    category: "All",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Bash", icon: "📘" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "TS" },
      { name: "React JS", icon: "⚛️" },
      { name: "Node JS", icon: "🟢" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS ECS", icon: "☁️" },
      { name: "Ansible", icon: "⚙️" },
      { name: "Terraform", icon: "🟪" },
      { name: "AWS CloudFormation", icon: "🏗️" },
      { name: "Jest", icon: "🃏" },
      { name: "S3Bucket", icon: "📦" },
      { name: "EC2", icon: "💻" },
      { name: "Lambda", icon: "λ" },
      { name: "Route 53", icon: "🌐" },
      { name: "CloudWatch", icon: "⏰" },
      { name: "Amazon RDS", icon: "🗄️" },
      { name: "Cognito", icon: "🔐" },
      { name: "AWS Code Pipeline", icon: "🔄" },
      { name: "VPC", icon: "🔗" },
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐱" },
      { name: "Linux", icon: "🐧" },
      { name: "RabbitMQ", icon: "🐇" },
      { name: "Docker Hub", icon: "🐳" },
    ],
  },
  {
    category: "Programming Language",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Bash", icon: "📘" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "TS" },
      { name: "React JS", icon: "⚛️" },
      { name: "Node JS", icon: "🟢" },
    ],
  },
  {
    category: "Containerization",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS ECS", icon: "☁️" },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "Ansible", icon: "⚙️" },
      { name: "Terraform", icon: "🟪" },
      { name: "AWS CloudFormation", icon: "🏗️" },
      { name: "Jest", icon: "🃏" },
    ],
  },
  {
    category: "AWS",
    items: [
      { name: "S3Bucket", icon: "📦" },
      { name: "EC2", icon: "💻" },
      { name: "Lambda", icon: "λ" },
      { name: "Route 53", icon: "🌐" },
      { name: "CloudWatch", icon: "⏰" },
      { name: "Amazon RDS", icon: "🗄️" },
      { name: "Cognito", icon: "🔐" },
      { name: "AWS Code Pipeline", icon: "🔄" },
      { name: "VPC", icon: "🔗" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐱" },
      { name: "Linux", icon: "🐧" },
      { name: "RabbitMQ", icon: "🐇" },
      { name: "Docker Hub", icon: "🐳" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = React.useState(
    skills[0].category
  );
  const [isInView, setIsInView] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto md:px-10 lg:px-32 xl:px-28 flex flex-col justify-center items-center h-screen"
      id="skill"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 xl:mb-14 text-center mx-auto xl:text-[50px] text-[28px]"
      >
        My <span className="text-[#FF335F]">Skills</span>
      </motion.h1>

      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="w-full"
      >
        <TabsList className="flex flex-row gap-5 py-6">
          {skills.map((skill) => (
            <TabsTrigger key={skill.category} value={skill.category}>
              {skill.category}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          {skills.map((skill) => (
            <TabsContent key={skill.category} value={skill.category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                className="flex flex-wrap gap-y-[19px] gap-x-[24px] justify-center mx-[2rem]"
              >
                {skill.items.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <div className="overflow-hidden pt-10">
                      <div className="px-6">
                        <motion.div
                          className="flex items-center space-x-4 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="text-4xl">{item.icon}</div>
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
