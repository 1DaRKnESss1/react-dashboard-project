// DashboardNavigations.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardNavigations.css';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineChartSquareBar, HiOutlineKey, HiOutlineOfficeBuilding } from 'react-icons/hi';

const DashboardNavigations = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: <HiOutlineHome />, path: '/' },
    { label: 'Accounts', icon: <HiOutlineBriefcase />, path: '/accounts' },
    { label: 'Brokers', icon: <HiOutlineUserGroup />, path: '#' }, 
    { label: 'Submissions', icon: <HiOutlineDocumentText />, path: '#' },
    { label: 'Organizations', icon: <HiOutlineOfficeBuilding />, path: '#' },
    { label: 'Goals & Rules', icon: <HiOutlineChartSquareBar />, path: '#' },
    { label: 'Admin', icon: <HiOutlineKey />, path: '#' },
  ];

  return (
    <nav className="dashboard-navigations">
      <div className="nav-items-left">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      
      <div className="nav-items-right">
        <button className="nav-arrow-button">←</button>
        <button className="nav-arrow-button">→</button>
      </div>
    </nav>
  );
};

export default DashboardNavigations;