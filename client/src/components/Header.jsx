import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {user,setLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if(user) {
      navigate('/result')
    } else {
      setLogin(true);
    }
  }
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 my-10 mx-90 rounded-full border px-6 py-2 w-fit border-neutral-500">
        <p>Think to generate image</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <motion.h1
        className="text-4xl max-w-[700px] sm:text-7xl  mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
      >
        Turn your <span className="text-yellow-900">thoughts, into</span> images
      </motion.h1>
      <p className="text-center max-w-xl mt-5">
        Unleash your creativity with S2S. Think and create
      </p>
      <motion.div className="flex items-center gap-2 border  rounded-full p-2 mt-8 pl-7 pr-7  hover:scale-[1.05]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{scale:1.05, backgroundColor:'black', color:'white', decelerate:1,dur:2}}
      transition={{ delay: 0.2, duration: 2 }}
      >
        <motion.button className="flex items-center cursor-pointer"
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}

        onClick={()=>{onClickHandler()}}
        >
          Generate Images
          <img className="h-5" src={assets.star_group} alt="" />
        </motion.button>
      </motion.div>

      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration:1}}
      className="flex flex-wrap justify-center gap-2 mt-6">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              whileHover={{scale:1.05, duration:2}}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              key={index}
              alt="img.png"
              width={70}
            />
          ))}
      </motion.div>
      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2, duration:2.2}}
      className="mt-2 text-zinc-700">Generated Using say2scene</motion.p>
    </motion.div>
  );
};

export default Header;
