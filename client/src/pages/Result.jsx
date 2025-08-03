import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion' 
import { AppContext } from "../context/AppContext";

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault() //prevents page reloading on submitting prompt
    setLoading(true)
    if(input) {
      const img = await generateImage(input);
      if(img) {
        setIsImageLoaded(true)  
        setImage(img)
      }
    }
    setLoading(false)
  }
  return (
    <motion.form 
    initial={{opacity:0.2,y:100}}
    transition = {{delay:0.2, duration:1.5}}
    whileInView = {{opacity:1,y:0}}

    onSubmit={onSubmitHandler} className="flex flex-col justify-center min-h-[90vh] items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded " />
          <span className={`absolute bottom-0 left-0 h-1 ${loading ? 'bg-blue-500  w-full transition-all duration-[10]' : 'w-0'}`}></span>
        </div>
        <p className={!loading ? 'hidden' : ''}>loading...</p>
      </div>

      {
        !isImageLoaded && 
        <div className="flex items-center mt-8">
        <input onChange={e => setInput(e.target.value)} value={input} 
        type="text" placeholder="Write, Whats in your mind ??" className="flex  outline-none ml-10 bg-zinc-600  px-10 py-3 rounded-full text-white"/>
        <button type="submit" className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer text-white ">Generate</button>
      </div>
      }

      {
        isImageLoaded && 
        <div className="flex flex-wrap  gap-4 mt-6">
        <p onClick={()=> {
          setIsImageLoaded(false)
        }} 
        className="border rounded-full px-10 py-3 cursor-pointer hover:scale-[1.05] transition-colors shadow-amber-300 duration-75">Generate</p>
        <a href={image} download className="border rounded-full px-10 py-3 bg-black text-white cursor-pointer hover:scale-[1.05] transition-colors shadow-md duration-75">Download</a>
      </div>
      }
    </motion.form>
  );
};

export default Result;
