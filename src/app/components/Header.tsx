"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';


type Props = {}

export default function Header({}: Props) {
  return (
      <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={
          {
            x: -500,
            opacity: 0,
            scale:0.5
          }
        }
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration:1.5,
        }}
        className='flex flex-row items-center'>
              {/* Social Icons */}
              <SocialIcon url="https://github.com/FabriceROBERT" fgColor='gray' bgColor='transparent'/>
              <SocialIcon url="https://www.linkedin.com/in/fabrice-robert9536/"fgColor='gray' bgColor='transparent' />
          </motion.div>

          <motion.div initial={
          {
            x: 500,
            opacity: 0,
            scale:0.5,
          }
        }  
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration:1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
      <Link href="#contact">
        <SocialIcon href='#contact' fgColor='gray' network='email' bgColor='transparent' />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> Prendre Contact</p>
          </Link>
          </motion.div>
          
        </header>
  )
}