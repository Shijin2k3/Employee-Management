import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { clearAuthError, updatePassword as updatePasswordAction } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const UpdatePassword = () => {
  const [password,setPassword]=useState("");
  const [oldPassword,setOldPassword]=useState("")
   const dispatch=useDispatch()

  const {isUpdated,error}=useSelector(state => state.authState)

  const submitHandler =(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append('oldPassword',oldPassword);
    formData.append('password',password);
    dispatch(updatePasswordAction(formData))
    
  }
  useEffect(()=>{
    if(isUpdated){
       toast('password updated successfully',{
         type:'success'
       })
       setOldPassword("")
       setPassword("")
       return;
     }
     if(error){
       toast(error,{
         type:'error',
         onOpen:()=>{ dispatch(clearAuthError)}
        });
       return
      }
   

    
     
     },[isUpdated,dispatch,error])

  return (
     <Fragment>
              <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
                  <div className='flex flex-col items-center justify-center
                    spacey-6 h-screen'>
                      <form onSubmit={submitHandler}
                       className='shadow-lg p-6 w-65 md:w-80  bg-white'>
                          <h1 className='mb-4 text-2xl font-bold '>Update Password</h1>
                         
                          <div className='mb-4'> 
                              <label htmlFor="oldpassword"
                               className='block text-gray-700'> old Password</label>
                              <input type="password"
                              name='oldpassword'
                              id='oldpassword'
                              className='w-full border-2 border-gray-500'
                              value={oldPassword}
                              onChange={e => setOldPassword(e.target.value)}
                              />
                          </div>
                          <div className='mb-4'>
                              <label htmlFor="password"
                               className='block text-gray-700'>New Password</label>
                              <input type="password"
                              id='password'
                              name='password'
                              className='w-full border-2 border-gray-500'
                               value={password}
                              onChange={e => setPassword(e.target.value)}
                             />
                          </div>                          
                          <div className='mb-4'>
                           <button  type='submit' className='w-full bg-blue-900 py-2 mt-2 text-white'
                             >Update Password</button>
                          </div>
                          <div className='mb-4 flex items-center justify-end'>
                           <Link to='/myprofile'>Back</Link>
                          </div>
                      </form>
                  </div>
              </div>
           </Fragment>
  )
}

export default UpdatePassword