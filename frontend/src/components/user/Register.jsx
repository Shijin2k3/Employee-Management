import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, register } from '../../actions/userActions'
import { toast } from 'react-toastify';

export const Register = () => {
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        password:""
    })
    const dispatch=useDispatch()
    const {loading,error}=useSelector(state => state.authState)
     const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
     }
     const submitHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('name',userData.name)
        formData.append('email',userData.email)
        formData.append('password',userData.password)
        dispatch(register(formData))

     }
  useEffect(()=>{
     if(error){
          toast(error,{
            type:'error',
            onOpen:()=>{ dispatch(clearAuthError)}
          });
          return
         }
  },[error])
  return (
     <Fragment>
           <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
               <div className='flex flex-col items-center justify-center
                 spacey-6 h-screen'>
                   <form onSubmit={submitHandler}
                    className='shadow-lg p-6 w-65 md:w-80  bg-white'>
                       <h1 className='mb-4 text-2xl font-bold '>Register</h1>
                       <div className='mb-4'> 
                           <label htmlFor="name"
                            className='block text-gray-700'>Name</label>
                           <input type="text"
                           name='name'
                           id='name'
                           className='w-full border-2 border-gray-500'
                           value={userData.name}
                           onChange={handleChange}
                            />
                       </div>
                       <div className='mb-4'> 
                           <label htmlFor="email"
                            className='block text-gray-700'>Email</label>
                           <input type="email"
                           name='email'
                           id='email'
                           className='w-full border-2 border-gray-500'
                           value={userData.email}
                           onChange={handleChange}
                            />
                       </div>
                       <div className='mb-4'>
                           <label htmlFor="password"
                            className='block text-gray-700'>Password</label>
                           <input type="password"
                           id='password'
                           name='password'
                           className='w-full border-2 border-gray-500'
                           value={userData.password}
                           onChange={handleChange}
                           />
                       </div>
                       
                       <div className='mb-4'>
                        <button disabled={loading} type='submit' className='w-full bg-blue-900 py-2 mt-2 text-white'
                         >Register</button>
                       </div>
                       <div className='mb-4 flex items-center justify-end'>
                        <a href="">Login?</a>
                       </div>
                   </form>
               </div>
           </div>
        </Fragment>
  )
}
