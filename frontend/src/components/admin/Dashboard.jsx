import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Overview</li>
          <li className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Employees</li>
          <li className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Reports</li>
          <li className="hover:bg-blue-900 p-2 rounded-lg cursor-pointer">Settings</li>
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