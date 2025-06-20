import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <a href="/" className="breadcrumb-link">Dashboard</a>
      <span className="breadcrumb-separator">//</span>
      <a href="/accounts" className="breadcrumb-link">Accounts</a>
      <span className="breadcrumb-separator">//</span>
      <span className="breadcrumb-active">Maritime Logistics Corp</span>
    </div>
  );
};

export default Breadcrumbs;