import React from 'react'
import home from '../assets/home.jpg'
export const Home = () => {
    return (
       <div className='bg-blue-950' >
        <div className='relative w-full min-h-screen  bg-gradient-to-r from-blue-950 to-blue-900 text-white py-20'>
          <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
             <div className='w-full lg:w-[50%] '>
                <div className='flex flex-col items-center justify-center  md:items-start'>
                  <h1 className='pb-8 text-3xl font-medium tracking-tight lg:mt-16 lg:text-4xl '>
                    Employee Management System
                  </h1>
                 
                  <p className=' max-w-xl text-lg mb-8 py-4 font-light tracking-tighter '>Lorem,
                     ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis obcaecati veniam autem dicta. Labore, blanditiis
                     culpa? Ratione, quos maiores asperiores provident, quam voluptatibus esse dolorum, accusamus pariatur aspernatur placeat?
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti in facere dolores eveniet quidem, voluptatibus facilis. Quo quam suscipit odit.
                     </p>
                </div>
             </div>
             <div className='w-full  lg:w-[50%] flex items-center justify-center transform transition-transform
                         duration-300 hover:scale-105'>
                <img src={home} alt="home" className='w-70 h-70 md:w-100 md:h-85 object-cover rounded-lg ' />
             </div>
    
            
          </div>
          
        </div>


       </div>
      );
}
