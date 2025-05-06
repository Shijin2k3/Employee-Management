import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const Profile = () => {
    const {user} = useSelector(state => state.authState);
   
    
      return (
        <div className="w-[100%] min-h-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <div className="mt-4   text-center ">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 uppercase">{user.name}</h1>
              <p className="text-gray-600  md:text-xl">{user.position}</p>  
            </div>
            <div className='flex items-center p-4  justify-end'>
          <Link to='/myprofile/update' className=' bg-blue-600 text-white w-30 h-8 rounded-lg text-center pt-1'>Edit Profile</Link>
          </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 m-3 md:m-8'>
            <div className="p-8 bg-slate-100 shadow-lg">
            <h2 className="text-lg font-semibold">Position</h2>
            <p className="text-gray-700">{user.Position}</p>
          </div>
          <div className="p-8 shadow-lg bg-slate-100">
            <h2 className="text-lg font-semibold">Department</h2>
            <p className="text-gray-700">{user.department}</p>
          </div>
          <div className="p-8 shadow-lg bg-slate-100">
            <h2 className="text-lg font-semibold">Email Adress</h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div className="p-8 shadow-lg bg-slate-100">
            <h2 className="text-lg font-semibold">Address</h2>
            <p className="text-gray-700">{user.address}</p>
          </div>
          <div className="p-8 shadow-lg bg-slate-100">
            <h2 className="text-lg font-semibold">Joined</h2>
            <p className="text-gray-700">{String(user.createdAt).substring(0,10)}</p>
          </div>
          <div className="p-8 shadow-lg bg-slate-100">
            <Link to='/myprofile/update/password' className="text-lg font-semibold">Change Password</Link>
          </div>
          </div>
         
        </div>

)
}
