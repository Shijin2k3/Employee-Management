import React, { Fragment } from 'react'

export const Login = () => {
  return (
    <Fragment>
       <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
           <div className='flex flex-col items-center justify-center
             spacey-6 h-screen'>
               <form className='shadow-lg p-6 w-80 bg-white'>
                   <h1 className='mb-4 text-2xl font-bold '>Login</h1>
                   <div className='mb-4'> 
                       <label htmlFor="email"
                        className='block text-gray-700'>Email</label>
                       <input type="email"
                       id='email'
                       className='w-full border-2 border-gray-500'
                       value='' />
                   </div>
                   <div className='mb-4'>
                       <label htmlFor="password"
                        className='block text-gray-700'>Password</label>
                       <input type="password"
                       id='password'
                       className='w-full border-2 border-gray-500'
                       value='' />
                   </div>
                   <div className='mb-4 flex items-center justify-between'>
                    <a href="">Forgot Password?</a>
                   </div>
                   <div className='mb-4'>
                    <button type='submit' className='w-full bg-blue-900 py-2 text-white'>Login</button>
                   </div>
               </form>
           </div>
       </div>
    </Fragment>
  )
}
