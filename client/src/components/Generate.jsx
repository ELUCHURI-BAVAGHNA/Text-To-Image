import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const Generate = () => {
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
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
    >
      <h1 className="font-bold text-3xl m-12 ml-100">See the magic </h1>
      <button
        className="flex items-center ml-102 bg-black border text-indigo-50 mb-12 rounded-lg p-2 cursor-pointer hover:scale-[1.02] transition-all "
        onClick={()=>{onClickHandler()}}
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default Generate;
