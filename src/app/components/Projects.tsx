
'use client'
import React from 'react'
import Burger from '../images/BurgerShop.png'
import Burger2 from '../images/BurgerShop2.png'
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type Props = {}
export default function Projects({ }: Props) {
  const projets = [1, 2, 3, 4, 5, 6, 7, 8]
  
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:3}}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto'>
          
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projets</h3>
      
      <div className='  scrollbar-track-gray-400/20  scrollbar-corner-[#F7AB0A]/80 scrollbar-thin relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {/* projets */}
        {projets.map((projet,i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <div className='flex flex-row justify-start gap-10'>
              <motion.img 
            initial={{ opacity: 0, y:-300 }}
            whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.2 }} 
            viewport={{once:true}}    
      height={375} width={666} src={Burger.src } alt="" />
            {/* <motion.img  
      height={375} width={666} src={Burger2.src} alt="" /> */}
          </div>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl text-center'>
              <span className='decoration-[#F7AB0A]/50'>Projet {i + 1} sur {projets.length}: Site vitrine - Burger Shop</span>
              </h4>
                <p className='text-center text-lg '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sit sequi temporibus eligendi placeat! Libero nesciunt, mollitia in ratione ipsum dolorem ducimus facere cupiditate ad reprehenderit atque repudiandae? Accusantium totam cumque eos quasi laborum minima aliquam nisi similique sapiente minus hic corrupti cum officia ab tempora repellat natus, ad ea sequi eligendi, incidunt perspiciatis reprehenderit. Repellat aliquid maiores quidem explicabo suscipit accusantium odio ea. Quaerat dolorem eius praesentium illum beatae.</p>
            </div>
          </div>
        ))}
    </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12' />
      
      {/* width={666} */}
      {/* width={666} */}
      </motion.div>
  )
}