

import React from 'react'
import Burger from '../images/BurgerShop.png'
import Burger2 from '../images/BurgerShop2.png'
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type Props = {}
export default function Projects({ }: Props) {
  const projets = [1, 2, 3, 4, 5, 6, 7, 8]
  
  
  return (
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto'>
          
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projets</h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {/* projets */}
        {projets.map((projet,i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <div className='flex flex-row justify-start gap-10'>
            <Image  width={666}
      height={375} src={Burger as StaticImageData} alt="" />
            <Image  width={666}
      height={375} src={Burger2 as StaticImageData} alt="" />
          </div>
            <div className=''>
              <h4 className='text-4xl'>
              <span className='decoration-[#F7AB0A]/50'>Projet {i + 1} sur {projets.length}: Site vitrine - Burger Shop</span>
                
              </h4>
            </div>
          </div>
        ))}
    </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12' />
      


      </div>
  )
}