import React from 'react'

export const Profile = () => {
    const employee = {
        name: "John Doe",
        position: "Software Engineer",
        email: "johndoe@example.com",
        phone: "+1 234 567 890",
        department: "Engineering",
        profilePicture: "https://via.placeholder.com/150",
        bio: "A passionate software engineer with 5 years of experience in building scalable web applications."
      };
    
      return (
        <div className="w-[100%] min-h-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <div className="mt-4   text-center ">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{employee.name}</h1>
              <p className="text-gray-600  md:text-xl">{employee.position}</p>  
            </div>
            <div className='flex items-center p-4  justify-end'>
          <button className=' bg-blue-600 text-white w-30 h-8 rounded-lg'>Edit Profile</button>
          </div>
          </div>
            <div className="p-8 ">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="text-gray-700">{employee.bio}</p>
          </div>
          <div className="p-8 ">
            <h2 className="text-lg font-semibold">Department</h2>
            <p className="text-gray-700">{employee.department}</p>
          </div>
          <div className="p-8 ">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p className="text-gray-700">Email: {employee.email}</p>
            <p className="text-gray-700">Phone: {employee.phone}</p>
          </div>
         
        </div>

)
}
