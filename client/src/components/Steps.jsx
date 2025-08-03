import React from 'react'
import { assets, stepsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    transition={{duration:2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:false}}
    className='flex flex-col justify-center items-center my-32'>
      <h1 className='text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-4'>Explore your creativity with s2s</p>
      <div className='space-y-4 w-full max-w-3xl text-sm '>
        {
            stepsData.map((items, index) => (
                <div key={index} className='flex items-center gap-4 space-y-2 bg-white/20 shadow-md p-2 rounded-lg hover:scale-[1.02] transition-colors duration-150'>
                    <img className='flex pt-2 pl-4 items-center' src={items.icon} alt="" />
                    <div>
                        <h2 className='text-lg font-bold'>{items.title}</h2>
                        <p className='text-gray-500'> {items.description} </p>
                    </div>
                </div>
            ))
        }
      </div>
    </motion.div>
    
  )
}

export default Steps
