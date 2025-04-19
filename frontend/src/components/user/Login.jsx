import React, { Fragment, useEffect, useState } from 'react'
import { clearAuthError, login } from '../../actions/userActions'
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error,isAuthenticated}=useSelector(state => state.authState)
 
  
  const submitHandler =(e)=>{
    e.preventDefault();
    dispatch(login(email,password));
    setEmail('')
    setPassword('')
  }

  useEffect(()=>{
    if(isAuthenticated){
       navigate('/')
    }
     if(error){
      toast(error,{
        type:'error',
        onOpen:()=>{ dispatch(clearAuthError)}
      });
      return
     }
  },[error,isAuthenticated,dispatch])
    

  return (
    <Fragment>
       <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
           <div className='flex flex-col items-center justify-center
             spacey-6 h-screen'>
               <form onSubmit={submitHandler}
                className='shadow-lg p-6 w-65 md:w-80  bg-white'>
                   <h1 className='mb-4 text-2xl font-bold '>Login</h1>
                   <div className='mb-4'> 
                       <label htmlFor="email"
                        className='block text-gray-700'>Email</label>
                       <input type="email"
                       id='email'
                       className='w-full border-2 border-gray-500'
                       value={email}
                       onChange={e => setEmail(e.target.value)} />
                   </div>
                   <div className='mb-4'>
                       <label htmlFor="password"
                        className='block text-gray-700'>Password</label>
                       <input type="password"
                       id='password'
                       className='w-full border-2 border-gray-500'
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                   </div>
                   <div className='mb-4 flex items-center justify-between'>
                    <a href="">Forgot Password?</a>
                   </div>
                   <div className='mb-4'>
                    <button type='submit' className='w-full bg-blue-900 py-2 text-white'
                     disabled={loading}>Login</button>
                   </div>
               </form>
           </div>
       </div>
    </Fragment>
  )
}
