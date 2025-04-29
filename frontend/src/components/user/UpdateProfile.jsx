import React, { Fragment } from 'react'

export const UpdateProfile = () => {
  return (
    <Fragment>
           <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
               <div className='flex flex-col items-center justify-center
                 spacey-6 h-screen'>
                   <form 
                    className='shadow-lg p-6 w-65 md:w-80  bg-white'>
                       <h1 className='mb-4 text-2xl font-bold '>Update Profile</h1>
                       <div className='mb-4'> 
                           <label htmlFor="name"
                            className='block text-gray-700'>Name</label>
                           <input type="text"
                           name='name'
                           id='name'
                           className='w-full border-2 border-gray-500'
                            />
                       </div>
                       <div className='mb-4'> 
                           <label htmlFor="email"
                            className='block text-gray-700'>Email</label>
                           <input type="email"
                           name='email'
                           id='email'
                           className='w-full border-2 border-gray-500'
                            />
                       </div>
                       
                       <div className='mb-4'>
                        <button  type='submit' className='w-full bg-blue-900 py-2 mt-2 text-white'
                         >Update Profile</button>
                       </div>
                   </form>
               </div>
           </div>
        </Fragment>
  )
}
