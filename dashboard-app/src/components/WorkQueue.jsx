import React, { useState } from 'react';
import './WorkQueue.css';
import workQueueData from '../data/workQueueData.json'; 

const WorkQueue = () => {
  const [activeTab, setActiveTab] = useState('Assigned to me');

  const tabs = [
    { name: 'Assigned to me', count: 12 },
    { name: 'Pending Review', count: 8 },
    { name: 'Referrals', count: 3 },
  ];

  const filteredData = workQueueData.filter(item => {
    if (activeTab === 'Assigned to me') {
      return item.status !== 'Pending Review' && item.status !== 'Referral';
    } else if (activeTab === 'Pending Review') {
      return item.status === 'Pending Review';
    } else if (activeTab === 'Referrals') {
      return item.status === 'Referral';
    }
    return true;
  });

  return (
    <div className="dashboard-section work-queue">
      <h3>Work Queue</h3>
      <div className="work-queue-tabs">
        {tabs.map(tab => (
          <button
            key={tab.name}
            className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
      <div className="work-queue-table">
        <table>
          <thead>
            <tr>
              <th>ORIGINATOR</th>
              <th>CLIENT/LINE</th>
              <th>TYPE</th>
              <th>STATUS</th>
              <th>CREATED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="originator-avatar" style={{ backgroundColor: item.avatarColor }}>{item.originatorInitials}</span>
                  {item.originatorName}
                </td>
                <td>
                  {item.clientName}
                  <br />
                  <small>{item.clientLine}</small>
                </td>
                <td>{item.type}</td>
                <td>
                  <span className={`status-dot ${item.status.toLowerCase().replace(/ /g, '-')}`}></span>
                  {item.status}
                </td>
                <td>{item.created}</td>
                <td>
                  <button className="info-button">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkQueue; 