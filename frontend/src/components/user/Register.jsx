import React from 'react'

export const Register = () => {
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
                           id='name'
                           className='w-full border-2 border-gray-500'
                           value=""
                            />
                       </div>
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
                         disabled={loading}>Register</button>
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
