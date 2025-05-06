import React from 'react'

const UpdatePassword = () => {
  return (
     <Fragment>
              <div className=' bg-gradient-to-r from-blue-950 to-blue-900'>
                  <div className='flex flex-col items-center justify-center
                    spacey-6 h-screen'>
                      <form 
                       className='shadow-lg p-6 w-65 md:w-80  bg-white'>
                          <h1 className='mb-4 text-2xl font-bold '>Update Password</h1>
                         
                          <div className='mb-4'> 
                              <label htmlFor="password"
                               className='block text-gray-700'>Password</label>
                              <input type="password"
                              name='password'
                              id='password'
                              className='w-full border-2 border-gray-500'
                               />
                          </div>
                          <div className='mb-4'>
                              <label htmlFor="new-password"
                               className='block text-gray-700'>New Password</label>
                              <input type="password"
                              id='new-password'
                              name='new-password'
                              className='w-full border-2 border-gray-500'
                              />
                          </div>
                          
                          <div className='mb-4'>
                              <label htmlFor="confirm-new-password"
                               className='block text-gray-700'> Confirm New Password</label>
                              <input type="password"
                              id='confirm-new-password'
                              name='confirm-new-password'
                              className='w-full border-2 border-gray-500'
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