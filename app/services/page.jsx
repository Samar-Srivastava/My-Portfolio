"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const services=[
  {
    num:"01",
    title:"Machine Learning",
    description:"Implementing advanced machine learning techniques, including Deep Learning, to build and integrate intelligent models.",
    href:""
  },
  {
    num:"02",
    title:"Web Development",
    description:"Expertly crafting performant web applications using modern MERN stack principles and architectures.",
    href:""

  },
  {
    num:"03",
    title:"Database Management",
    description:"Expert in relational and NoSQL systems, focusing on performance, scalability, and data security.",
    href:""

  },
  {
    num:"04",
    title:"AI & Data Science",
    description:"Specializing in the theory of Artificial Intelligence, using Python for data analysis and modeling.",
    href:""

  }
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return(
              <div key={index}
              className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{service.num}</div>
                  <Link 
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
};

export default Services