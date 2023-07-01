'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
      <motion.div
          className=' flex flex-col relative text-center xl:text-left xl:flex-row h-screen md:max-w-7xl max-w-9xl px-10 justify-evenly my-20 mx-auto items-center'>
          
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 3}}
        className='absolute md:top-36 top-24 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>à propos</motion.h3 >

          <motion.img
              initial={{
              x: -200,
              opacity:0,
              }}

              whileInView={{
                  opacity:1,
                  x: 0,   
              }}

              transition={{
                  duration: 1.0,
              }}

              src='https://gifdb.com/images/high/excuse-me-blinking-meme-b575wnxukw7aiqbd.gif'
              className='my-20 mx-20 mt-80 -mb-5 md:mb-0 flex-shrink-0 w-52 h-52 sm:w-[300px] sm:h-[300px]
              rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[500px] xl:h-[600px]'/>
          
          <div className=' space-y-10 py-10 md:px-0'>
              
              <motion.h4
                initial={{
                    x: 200,
                    opacity:0,
                    }}
      
                    whileInView={{
                        opacity:1,
                        x: 0,   
                    }}
      
                    transition={{
                        duration: 1.0,
                    }}
                
                className='text-4xl sm:my-10 font-semibold'>
                Du coup je me <span className=' animate-pulse bg-[#F7AB0A]/50'> présente</span></motion.h4>
              
              
               
              
                <motion.p
                initial={{
                y: 200,
                opacity:0,
                  }}

                whileInView={{
                opacity:1,
                y: 0,
                  
                  }}
                
                transition={{
                    duration: 1,
                  }}

                className='sm:text-base text-sm '>Je m'appelle Fabrice et j'ai 21 ans. Nouveau dans ce secteur, je me passionne au développement informatique, je me suis lancé dans ce domaine il y a trois ans. J'ai acquis mes premières connaissances en programmation pendant mon BTS informatique SIO, où j'ai pu explorer divers langages et concepts fondamentaux.
                   Au fil de mon parcours, j'ai découvert depuis peu une véritable passion pour le développement web.
                  J'apprends à créer des applications webs et mobiles qui peuvent êtres utiles à des personnes au quotidien. J'ai suivi des cours en ligne, lu des livres et participé à des conférences sur les dernières tendances technologiques.
                  Je crois fermement qu'une mise à jour régulière de mes compétences est essentielle pour rester compétent dans un secteur en constante évolution. Dans mes projets futurs, j'ai pour objectif de me spécialiser davantage dans le développement mobile et web afin d'explorer les opportunités offertes par l'intelligence artificielle.
                  J'ai hâte de travailler sur des projets passionnants qui repoussent les limites de l'innovation technologique et
                  qui apportent une réelle valeur à l'utilisateur.
                </motion.p>
        </div>

    </motion.div>
  )
} 