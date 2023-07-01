
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col mt-20 rounded-lg items-center space-y-5 duration-200 overflow-hidden flex-shrink-0 h-[700px] w-[900px] md:w-[600px] 
      xl:w-[900px] cursor-pointer transition-opacity snap-center bg-[#292929] hover:opacity-100 p-0 md:p-10 opacity-40'>
         <motion.img initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1.2 }}
        transition={{ duration: 3, y: 0 }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover mb-20'
        src='https://www6.inrae.fr/var/internet6_national_saps_paris/storage/images/qui-sommes-nous/laboratoires-et-unites-membres/laboratoires/laboratoire-des-courses-hippiques-gie-lch/45821-2-fre-FR/Laboratoire-des-Courses-Hippiques-GIE-LCH_inra_image.jpg' />
      
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4l pt-10 sm:pt-10 font-light uppercase'> Developpeur Informatique</h4>
        <p className='font-bold text-2xl mt-1 '>Laboratoire des Centres Hippiques</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-20 w-20 rounded-ful' src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-500x313.png" alt="" />
          <img className='h-20 w-20 rounded-ful' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="" />
          <img className='h-20 w-20 rounded-ful' src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo-500x313.png" alt="" />
          {/* Techs */}
        </div>
        <p className='uppercase py-5 text-gray-300'> Debut - Fin </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
          <li>
            Summary Point Summary Point Summary Point Summary
          </li>
        </ul>
    </div>
    </article>
  )
}