import Head from "next/head";
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";



export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"> 
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
      <section id="projects" className="snap-start">
        
        <Projects/>

</section>

    {/* // Contact Me */}
    </div>
  )
}
