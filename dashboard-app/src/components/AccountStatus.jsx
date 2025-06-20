import React from 'react';
import './AccountStatus.css';
import statusData from '../data/accountStatusData.json';
import { BsCheckCircle } from 'react-icons/bs'; 

const AccountStatus = () => {
  return (
    <div>
      <div className="external-section-header">
        <h2 className="external-section-title">{statusData.title}</h2>
      </div>
      <div className="status-card">
        <div className="stepper-container">
          {statusData.steps.map((step, index) => {
            const isLineFullyComplete = step.status === 'complete' && statusData.steps[index + 1]?.status === 'complete';
            
            return (
              <div 
                className={`step-item ${step.status} ${isLineFullyComplete ? 'line-complete' : ''}`} 
                key={index}
              >
                <div className="step-icon-wrapper">
                  <BsCheckCircle />
                </div>
                <span className="step-label">{step.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;