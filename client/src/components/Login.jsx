import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import {motion} from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('sign up');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, setLogin, backendUrl, setToken, setUser} = useContext(AppContext)

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      if(state === 'login') {
        const {data} = await axios.post(backendUrl + '/api/user/login', {email,password})

        if(data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token) 
          setLogin(false)
        } else {
          toast.error(data.message)
        }
      } else {
        const {data} = await axios.post(backendUrl + '/api/user/register', {name, email,password})

        if(data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token) 
          setLogin(false)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
     toast.error(error.message); 
    }
  }

  useEffect(()=>{
    if(login) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  },[])
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-md bg-black/30 flex justify-center items-center'>
      <motion.form
      onSubmit={onSubmitHandler} 
      initial={{opacity:0,y:100}}
      transition={{delay:0.2, duration:0.5}}
      whileInView={{opacity:1,y:0}}
      className='relative bg-white p-10 rounded-xl text-slate-500' >
        <h1 className='text-2xl text-center font-medium'>{state}</h1>
        <p className='text-center font-medium'>Welcome back! sign in to continue</p>

        {state !== 'login' && <div className='border px-6 py-2 flex gap-2 mt-5 rounded-xl'>
            <img src={assets.profile_icon} alt="" width={20} />
            <input onChange={e => setName(e.target.value)} value={name} type="text" name="" id="" placeholder='Full name' required className='outline-none text-sm'/>
        </div>}

        <div className='border px-6 py-2 flex gap-2 mt-5 rounded-xl'>
            <img src={assets.email_icon} alt="" width={20} />
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder='Email' required className='outline-none text-sm'/>
        </div>

        <div className='border px-6 py-2 flex gap-2 mt-5 rounded-xl'>
            <img src={assets.lock_icon} alt="" width={15} />
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='password' required className='outline-none text-sm'/>
        </div>
        <p className=' mt-2 text-sm cursor-pointer'><link rel="stylesheet" href=""  />Forgot Password?</p>

        <div className='flex justify-center mt-2 cursor-pointer'>
          <button className='px-10   py-1 border rounded-xl  bg-blue-600 text-amber-100 hover:scale-[1.05] transition-opacity duration-150 shadow-amber-900 '>{state === 'login'? 'login':'create account'}</button>
        </div>

        {state === 'login' ? <p className='mt-2 text-sm flex justify-center'>Don't have an account?<span className='text-blue-300 cursor-pointer' onClick={()=>{
          setState('signup')
        }}>Signup</span> </p>
        :
        <p className='mt-2 text-sm flex justify-center' >Already have an account?<span className='text-blue-300 cursor-pointer' onClick={()=>{
          setState('login')
        }}>login</span> </p>}

        <img  src={assets.cross_icon} alt="" className='absolute top-8 right-8 cursor-pointer' onClick = {()=> {
          setLogin(false)
        }}/>
      </motion.form>
    </div>
  )
}

export default Login
