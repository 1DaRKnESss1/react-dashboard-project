import React from 'react';
import './QuickActions.css';
import quickActionsData from '../data/quickActionsData.json';

const QuickActions = () => {
  return (
    <div className="dashboard-section quick-actions">
      <h3>Quick actions</h3>
      <div className="actions-list">
        {quickActionsData.map((action, index) => (
          <button key={index} className="action-button">
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions; 