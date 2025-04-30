import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, updateProfile } from '../../actions/userActions';

export const UpdateProfile = () => {
  const {loading,error,user,isUpdated}=useSelector(state => state.authState);
 const [userData,setUserData]=useState({
         name:"",
         email:"",
     })
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
 }

  const submitHandler=()=>{
    e.preventDefault()
    dispatch(updateProfile(userData))
  }

 useEffect(()=>{
  if(user){
    setUserData({
      name: user.name,
      email: user.email,
    })
  }
  if(isUpdated){
    toast('profile updated successfully',{
      type:'success'
    })
    return;
  }
  if(error){
    toast(error,{
      type:'error',
      onOpen:()=>{ dispatch(clearAuthError)}
     });
    return
   }
 },[user,isUpdated,error,dispatch])

  return (
    <Fragment>
           <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
               <div className='flex flex-col items-center justify-center
                 spacey-6 h-screen'>
                   <form onSubmit={submitHandler}
                    className='shadow-lg p-6 w-65 md:w-80 py-10 bg-white'>
                       <h1 className='mb-4 text-2xl font-bold '>Update Profile</h1>
                       <div className='mb-4 '> 
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
                       
                       <div className='mb-4 mt-10'>
                        <button disabled={loading} type='submit' className='w-full bg-blue-900 py-2 mt-2 text-white'
                         >Update Profile</button>
                       </div>
                   </form>
               </div>
           </div>
        </Fragment>
  )
}
