'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["<ROBERT Fabrice, est mon nom/>",
            "#LaissezMoi",
            "${Coder}",
            "Pour-vous.tsx"],
        loop: true,
        delaySpeed:2000,
    })
  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden  '>
          <BackgroundCircles />
          <img className='relative rounded-full h-40 w-40 mx-auto object-cover'
              src="https://media.licdn.com/dms/image/D4E03AQHiWBhdCzzBGQ/profile-displayphoto-shrink_200_200/0/1686757175295?e=1693440000&v=beta&t=7eJ9iPVh2yu9OYkGXkfWR1RkG_UZ6vjymWfKwm5XdnA" />
          <div className='z-20'>
              <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Developpeur web & mobile</h2>
              <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                  <span className='mr-3'>{text} </span>
                  <Cursor cursorColor='#F7AB0A' /></h1>
              
              <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>à propos</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Expérience</button></Link>
                <Link href="#competences">
                <button className='heroButton'>Compétences</button></Link>
                <Link href="#projets">
                <button className='heroButton'>Projets</button></Link>
                  
                  
                  
                  
                </div>

          </div>
         
         
    </div>
  )
}