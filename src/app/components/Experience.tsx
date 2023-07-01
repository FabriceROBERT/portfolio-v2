'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard' 

type Props = {}

export default function Experience({}: Props) {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:3}}
          
          className='h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-8 md:px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl '>Expérience</h3>
          <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
              <ExperienceCard/>
              <ExperienceCard/>
              <ExperienceCard/>
              
       
          </div>
          </motion.div>
  )
}