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
          <Link to="/admin/dashboard" className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Employees</Link>
          <Link to="/admin/dashboard" className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Reports</Link>
          <Link to="/admin/dashboard" className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Settings</Link>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700">
          Welcome to the admin dashboard. Select an option from the sidebar to get started.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;