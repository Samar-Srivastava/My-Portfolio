"use client";
import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaRobot,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiCplusplus, SiMysql} from "react-icons/si";

const about ={
  title: "About me",
  description: "Goal-oriented, hardworking person dedicated to professional growth and delivering impactful solutions.",
  info:[
    {
      fieldname: "Name",
      fieldValue: "Samar Srivastava"
    },
    {
      fieldname: "Phone",
      fieldValue: "(+91) 80048 75039"
    },
    {
      fieldname: "Experience",
      fieldValue: "Intern"
    },
    {
      fieldname: "Intrests",
      fieldValue: "Cinema, Football, Travel"
    },
    {
      fieldname: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldname: "Email",
      fieldValue: "samarsri08@gmail.com"
    },
    {
      fieldname: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldname: "Languages",
      fieldValue: "English, Hindi"
    },
  ]
};

const experience={
  icon: "/assets/resume/badge.svg",
  title: "My experince",
  description:"A dedicated developer passionate about building high-quality, impactful digital solutions across diverse technologies.",
  items:[
    {
      company: "NTT TechnoCross Corporation",
      position: "AI Intern",
      duration: "2025"
    },
  ]
};

const education={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:"A strong academic track record demonstrating technical rigor and consistent high performance.",
  items:[
    {
      institution: "Indian Institute of Technology, Patna",
      position: "Bachelors of Technology",
      duration: "2022-2026",
      score: "8.2 cpi"
    },
    {
      institution: "City Montessori School, Lucknow",
      position: "Higher Secondary",
      duration: "2020-2022",
      score: "99.5%"
    },
    {
      institution: "City Montessori School, Lucknow",
      position: "Secondary",
      duration: "2018-2020",
      score: "96.6%"
    },

  ]
};

const skills={
  title: "My Skills",
  description:"Experienced with the below modern engineering practices, delivering scalable and high-quality solutions.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name: "html-5",
    },
    {
      icon:<FaCss3/>,
      name: "css 3",
    },
    {
      icon:<FaJs/>,
      name: "javascript",
    },
    {
      icon:<FaReact/>,
      name: "react.js",
    },
    {
      icon:<SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name: "node.js",
    },
    {
      icon:<FaPython/>,
      name: "python",
    },
    {
      icon:<FaDocker/>,
      name: "docker",
    },
    {
      icon:<SiMysql/>,
      name: "mysql",
    },
    {
      icon:<SiCplusplus/>,
      name: "cpp",
    },
    {
      icon:<FaRobot/>,
      name: "ml",
    },
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltop,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div 
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2.4, duration:0.4, eae:"easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item,index)=>{
                        return(
                          <li 
                          key={index}
                          className="bg-[#232329] h-[174px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item,index)=>{
                        return(
                          <li 
                          key={index}
                          className="bg-[#232329] h-[174px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                          <div className="flex w-full justify-between">
                            <span className="text-accent">{item.duration}</span>
                            <span className="text-white text-[18px]">{item.score}</span>
                          </div>                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]"> 
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill,index)=>{
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return(
                        <li 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldname}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              
            </div>
          </Tabs>
        </div>
      </motion.div>
    )
  };
  
export default Resume