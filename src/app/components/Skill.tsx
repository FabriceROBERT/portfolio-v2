'use client'
import React from 'react'
import { motion } from 'framer-motion'


type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
      <div className='group relative flex cursor-pointer'>
          
          <motion.img
              initial={{
                  x: directionLeft ? -200 : 200,
                  opacity:0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=' rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 
              filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
          src='https://cdn.iconscout.com/icon/free/png-512/free-mysql-21-1174941.png?f=avif&w=256'/>

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out z-0 
          group-hover:bg-[#F7AB0A] md:w-28 md:h-28 h-24 w-24 xl:w-32 xl:h-32 rounded-full'>
              <div className='flex items-center justify-center h-full'>
                  <p className='text-3xl font-bold text-gray-800 opacity-80'>100%</p>
              </div>
          </div>

    </div>  
  )
}