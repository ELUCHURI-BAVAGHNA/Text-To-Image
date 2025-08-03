import React, { useContext } from "react";
import { plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import {motion} from 'framer-motion'

const BuyCredit = () => {
  const {user} = useContext(AppContext)
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{delay:0.2,duration:1}}
    whileInView={{opacity:1,y:0}}
    >
      <div className="flex flex-col items-center ">
        <button className="border px-6 py-2 rounded-full mb-4">OurPlans</button>
        <h1 className="font-bold text-2xl ">Choose the plan</h1>
      </div>
      <motion.div 
      whileHover={{scale:[1.05]}}
      
      className="flex flex-wrap-row gap-6 items-center justify-center mt-20">
        {plans.map((item, index) => (
          <div key={index} className="border px-10 py-15 rounded-lg hover">
            <img src="favicon.png" alt="" width={40} className=" relative top-0 "/>
            <p className="mt-6">{item.id}</p>
            <p className="mt-6 text-bold">{item.desc}</p>
            <p>
              <p className="text-2xl inline-flex">{item.price}</p>Rs / {item.credits} credits
            </p>
            <button className="mt-4 ml-4 border px-4 py-2 rounded-full hover:scale-[1.05] transition-transform duration-300 bg-black text-amber-200">{user ? 'purchase' : 'Get Started  '}</button>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BuyCredit;
