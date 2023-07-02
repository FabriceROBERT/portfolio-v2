import Head from "next/head";
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";



export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> 
    <title>ROBERT Fabrice Portfolio</title>
     
      {/* Header  */}

      <Header />
      
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
    
    {/* // About */}
      <section id="about" className="snap-center pb-20">
        <About/>
</section>
    {/* // Experiences */}

      <section id="experience" className="snap-center">
        <Experience/>
    </section>
      {/* // Skills */}
      <section id="skills" className="snap-start">
         <Skills/>
      </section>
   

    {/* // Pojects */}
      <section id="projets" className="snap-start">
        
        <Projects/>

</section>

      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>
      
      <Link href="#hero">
        <footer className=" sticky bottom-14 filter rounded-full ">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className=" -z-40 h-10 w-10 grayscale hover:grayscale-0 text-slate-500 cursor-pointer"/>

        </div>
        
        </footer>      
      </Link>
      


    </div>
  )
}
