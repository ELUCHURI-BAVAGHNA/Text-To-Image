import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src="favicon.png" alt="" width={50}/>
        <p className='flex-1  border-gray-400 pl-4 text-gray-600'>Copyright @S2S | All rights reserved</p>
        <ul className='list-none flex flex-row gap-4'>
            <li  className= 'hover:scale-105 transition-all shadow-amber-200 duration-300 cursor-pointer ' > <a href="https://github.com/ELUCHURI-BAVAGHNA" target='_blank'><img  src={assets.githun} alt="" width={35} /></a></li>
            <li className= 'hover:scale-105 transition-all shadow-amber-200 duration-300 cursor-pointer'   ><a href="https://www.linkedin.com/in/eluchuri-bavaghna-6b3ab1284/" target='_blank'><img src={assets.linkedin} alt="" width={35}/></a></li>
            <li  className= 'hover:scale-105 transition-all shadow-amber-400  duration-300 cursor-pointer' ><img  src={assets.instagram_icon} alt="" width={35}/></li>
            
        </ul>
            
        
      
    </div>
  )
}

export default Footer
