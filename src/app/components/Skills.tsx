'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:3}}
          className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
      justify-center xl:space-y-0 mx-auto items-center'>
          
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Compétences</h3>
          
          <h3 className='absolute tracking-[3px] top-36 uppercase text-gray-500 text-sm'> hover over a skill for currency profieciency</h3>
          
          <div className='grid grid-cols-4 gap-5 '>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>

          </div>

    </motion.div>
  )
}