import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="flex flex-col justify-middle items-center  mb-6 "
    >
      <h1 className=" text-4xl font-bold m-2">Customer Testimonials</h1>
      <p className="text-gray-600 ml-4 mb-8">What our users are saying</p>
      <div className="flex flex-row  gap-12 mb-12">
        {testimonialsData.map((items, index) => (
          <div
            key={index}
            className=" bg-white/20 border rounded-lg p-12 shadow-2xl w-80 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <img src={items.image} className="w-20 rounded-full " alt="" />
              <h2 className="font-bold">{items.name}</h2>
              <h3 className="text-gray-600"> {items.role} </h3>
              <div className="flex mb-4">
                {Array(items.stars)
                  .fill()
                  .map((stars, index) => (
                    <img src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p> {items.text} </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
