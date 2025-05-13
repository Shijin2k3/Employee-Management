import React, { useState } from 'react';
import {Link } from 'react-router-dom'

const Dashboard = () => {
  const [activeLink,setActiveLink]=useState('dashboard')

  const handleLinkClick=(link)=>{
    setActiveLink(link)
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-950 text-white p-6 ">
        <ul className="space-y-4 flex flex-col">
          <Link to="/admin/dashboard"
          onClick={()=>handleLinkClick('dashboard')}
           className={`${activeLink === 'dashboard'?"bg-blue-900 rounded-lg":"bg-blue-950"} p-2 cursor-pointer`}>Dashboard</Link>
          <Link to="/admin/users" className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Employees</Link>
          <Link to="/admin/report" className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Reports</Link>
          
        </ul>
      </div>

      
      {/* Dashboard Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700 mb-8">
          Welcome to the admin dashboard. Select an option from the sidebar to get started.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-500 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Departments</h2>
            <p className="text-gray-800">Manage all departments in the organization.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-500  shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Employees</h2>
            <p className="text-gray-800">View and manage employee details.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-500  shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Positions</h2>
            <p className="text-gray-800">Track and manage job positions.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-500  shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Reports</h2>
            <p className="text-gray-800">Generate and view organizational reports.</p>
          </div>
        </div>
      </div>
    </div>  );
};

export default Dashboard;