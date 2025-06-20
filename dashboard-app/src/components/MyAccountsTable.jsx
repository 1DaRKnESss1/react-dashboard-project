import React, { useState } from 'react';
import './MyAccountsTable.css';
import myAccountsData from '../data/myAccountsData.json';
import { BsThreeDotsVertical } from 'react-icons/bs';

const renderWinnability = (level) => {
  const levels = { "Very Strong": 5, "Strong": 4, "Medium": 3, "Weak": 2, "Very Weak": 1 };
  const filledCount = levels[level] || 0;
  const dots = [];
  for (let i = 0; i < 5; i++) {
    dots.push(<span key={i} className={`rating-dot ${i < filledCount ? 'filled' : ''}`}></span>);
  }
  return <div className="winnability-dots">{dots}</div>;
};

const getLossRatioClass = (ratio) => {
  const numericRatio = parseInt(ratio, 10);
  if (numericRatio <= 35) return 'green';
  if (numericRatio <= 65) return 'yellow';
  return 'red';
};

const MyAccountsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const filteredAccounts = myAccountsData.filter(account =>
    account.accountName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-section my-accounts">
      <div className="my-accounts-header">
        <h3>My accounts</h3>
        <div className="accounts-controls">
          <input type="text" placeholder="Search" className="accounts-search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="control-button">Filter</button>
          <button className="control-button">Sort</button>
          <button className="control-button">Group</button>
          <button className="control-button new-button">+ New</button>
        </div>
      </div>

      <div className="accounts-table-wrapper">
        <table className="accounts-table">
          <thead>
            <tr>
              <th>ACCOUNT NAME/TYPE</th>
              <th>LINE</th>
              <th>BROKER</th>
              <th>RENEWAL DATE</th>
              <th>PREMIUM</th>
              <th>RATED PREMIUM</th>
              <th>LOSS RATIO</th>
              <th>APPETITE</th>
              <th>STATUS</th>
              <th>TRIAGE</th>
              <th>WINNABILITY</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((account, index) => (
              <tr key={index}>
                <td>
                  <span className="account-name">{account.accountName}</span>
                  <span className="account-type">{account.accountType}</span>
                </td>
                <td>{account.line}</td>
                <td>{account.broker}</td>
                <td>{account.renewalDate}</td>
                <td><span className="premium-value">{account.premium}</span></td>
                <td>{account.ratedPremium}</td>
                <td><span className={`data-tag ${getLossRatioClass(account.lossRatio)}`}>{account.lossRatio}</span></td>
                <td><span className="data-tag solid-blue">{account.appetite}</span></td>
                <td>
                  <span className={`status-dot ${account.status?.toLowerCase().replace(' ', '-')}`}></span>
                  {account.status}
                </td>
                <td><span className="data-tag outline">{account.triage}</span></td>
                <td>
                  <div className="winnability-cell">
                    <div className="winnability-container">
                      {renderWinnability(account.winnability)}
                      <span className="winnability-text">{account.winnability}</span>
                    </div>
                  </div>
                </td>
                <td className="actions-cell">
                  <button className="actions-menu-button" onClick={() => handleMenuClick(index)}>
                    <BsThreeDotsVertical />
                  </button>
                  {activeMenu === index && (
                    <div className="actions-dropdown">
                      <a href="#">View Details</a>
                      <a href="#">Edit</a>
                      <a href="#">Archive</a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAccountsTable;