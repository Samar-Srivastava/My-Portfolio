"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Agentic Market Simulator",
    title: "project 1",
    description: "Tests AI strategy robustness against realistic price dynamics and diverse behavioral agents, including LLM-driven news scenarios.",
    stack: [{ name: "PyTorch" }, { name: "FastAPI" }, { name: "React" },{ name: "TypeScript" },{ name: "Tailwind.css" }],
    image: "/assets/work/thumb1.png",
    live: "https://agentic-market-simulator.vercel.app/",
    github: "https://github.com/Samar-Srivastava/Agentic-Market-Simulator",
  },
  {
    num: "02",
    category: "AI Resume Builder",
    title: "project 2",
    description: "A smart, end-to-end platform that helps users effortlessly craft polished, ATS-ready resumes with AI-powered content refinement and secure personalization.",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Strapi" }, { name: "Clerk" }],
    image: "/assets/work/thumb2.png",
    live: "https://ai-resume-builder-snowy-xi.vercel.app/",
    github: "https://github.com/Samar-Srivastava/AI-Resume-Builder",
  },
  {
    num: "03",
    category: "Faculty Recruitment System",
    title: "project 3",
    description: "A streamlined web-based platform designed to simplify and enhance the end-to-end hiring process for academic institutions.",
    stack: [{ name: "Express.js" }, { name: "EJS" }, { name: "MySQL" }],
    image: "/assets/work/thumb3.png",
    live: "https://2201ai34cs260-production.up.railway.app/",
    github: "https://github.com/Samar-Srivastava/2201AI34_CS260/tree/main/DBMS_project",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[72vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[27px]">
          <div className="w-full xl:w-[50%] xl:h-[414px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[27px] h-[50%]">
              <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              <p className="text-white/60 text-[0.9rem]">{project.description}</p>
              <ul className="flex gap-3">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-3">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          aria-label="Live Project"
                          className="w-[63px] h-[63px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-[1.7rem] group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          aria-label="Github Repository"
                          className="w-[63px] h-[63px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-[1.7rem] group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={27}
              slidesPerView={1}
              className="xl:h-[468px] mb-10"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[414px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-fill"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-end"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[40px] h-[40px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
