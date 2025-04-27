
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { logout } from '../../actions/userActions';
import {useNavigate} from 'react-router-dom';

const Dropdown = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    // setSelectedOption(option);
    dispatch(logout);
    navigate('/')
    setIsOpen(false);
  };

  

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >  <span className='font-bold uppercase mr-1.5'>
          {user.name} 
          </span>
          
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          
              <button
              onClick={()=>{
                navigate('/myprofile')
                setIsOpen(false)

              }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Profile
              </button>
              <button
                onClick={logoutHandler}
                className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Logout
              </button>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;