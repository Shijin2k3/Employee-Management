import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <div className="loader border-t-4 border-b-4 border-blue-950 rounded-full w-16 h-16 animate-spin"></div>
      <p className='text-blue-950 font-medium text-lg'>Loading...</p>
    </div>
  );
};

export default Loader;