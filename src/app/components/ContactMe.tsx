'use client'
import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import{useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
    nom: string;
    email: string;
    objet: string;
    commentaire: string;
  }

type Props = {}

export default function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => (
        window.location.href = `mailto:fabricerob@yahoo.fr?subject=${formData.objet}&body=${formData.commentaire}`
    );
    const [text, count] = useTypewriter({
    
        words: ["Développeur web et mobile passionné","Prêt à relever tous les défis !"],
        loop: true,
        delaySpeed: 4000,
        typeSpeed: 20,
        deleteSpeed: 30
    })
    
  return (
      <div className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contactez Moi</h3>

          <div className='flex flex-col space-y-10'>
              <h4 className='text-3xl font-semibold text-center'>Vous recherchez un alternant? Je suis celui qu'il vous faut. <span className='text-[#F7AB0A]/60 '>{text}<Cursor cursorColor='white' /></span>
              </h4>
              <div className='space-y-5'>
                  <div className='flex items-center space-x-5 justify-center'>
                      <PhoneIcon className='h-7 w-7 animate-pulse text-gray-500'/>
                      <p className='text-2xl'>+33651486384</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <EnvelopeIcon className='h-7 w-7 animate-pulse text-gray-500'/>
                      <p className='text-2xl'>fabricerob@yahoo.fr</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <MapPinIcon className='h-7 w-7 animate-pulse text-gray-500'/>
                      <p className='text-2xl'> Montmagny, 95360 Ile-De-France</p>
                  </div>
            </div>
              <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
                  <div className='flex space-x-2'>
                      <input {...register('nom')} placeholder='Nom' className='contactInput' type="text" />
                      <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                  </div>
                  <input {...register('objet')} placeholder="Objet" className='contactInput' type="text" />
                  
                  <textarea {...register('commentaire')} placeholder='Commentaire' className='contactInput' ></textarea>
                  <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

              </form>
          </div>
          </div>
  )
}