import Head from "next/head";
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";



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
      <section id="about" className="snap-center">
        <About/>
</section>
    {/* // Experiences */}


    {/* // Skills */}


    {/* // Pojects */}


    {/* // Contact Me */}
    </div>
  )
}
