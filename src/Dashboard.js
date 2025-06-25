import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import Stats from './Stats';
import Profile from './Profile';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link> | 
        <Link to="profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Dashboard;