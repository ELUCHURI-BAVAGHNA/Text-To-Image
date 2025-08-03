import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    transition={{duration:2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:false}}
    className='m-32'>
      <div className='flex flex-col align-middle ml-60 mb-6'>
        <h1 className=' text-3xl font-bold m-2'>Create AI images</h1>
      <p className='text-gray-600 ml-4 mb-8'>Turn your creativity into images</p>
      </div>
      <div className='flex flex-row gap-20'>
        <img src={assets.sample_img_1} alt="sample_img.png" width={240} height={240} className='rounded-lg mb-10'/>
        <div className=''>
            <h2 className='font-bold text-2xl'>AI-powered image generator</h2>
            <p className='text-gray-600 w-150'>Say2Scene (S2S) is an AI tool that turns your text or voice prompts into creative visual scenes. Just describe what you imagine, and S2S generates a matching image instantly.</p>
            <p className='text-gray-600'>You don’t need design skills — anyone can use it. Whether you're brainstorming ideas, creating content, or just exploring, S2S makes it easy and fun to bring your thoughts to life.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
