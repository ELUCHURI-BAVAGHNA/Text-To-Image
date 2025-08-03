import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(false);
    const [login, setLogin] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem('token')) // using thr local storage of the browser if any token present pass to the token
    const [credit, setCredit] = useState(false);
    const navigate = useNavigate();

    const loadCreditdata = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers:{
                token
            }})
            if(data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const generateImage = async(prompt)=>{
        try {
            const {data} =  await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers:{token}})
            if(data.success) {
                loadCreditdata()
                return data.resImage
            } else {
                if(data.creditNumber === 0) {
                    navigate('/buy')
                }
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            loadCreditdata()
            
        }

    }

    useEffect(()=>{
        if(token) {
            loadCreditdata()
        }
    },[token])

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }
    const value = {
        user,setUser, login, setLogin, backendUrl, token, setToken,credit, setCredit, loadCreditdata, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider