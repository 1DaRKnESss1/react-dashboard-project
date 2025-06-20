import React from 'react';
import './Compliance.css';
import complianceData from '../data/complianceData.json';
import { BsCheckCircle } from 'react-icons/bs';

const Compliance = () => {
  return (
    <div>
      <div className="external-section-header">
        <h2 className="external-section-title">{complianceData.title}</h2>
        <a href={complianceData.historyLink.url} className="history-link">
          {complianceData.historyLink.text}
        </a>
      </div>
      <div className="compliance-card">
        <div className="compliance-list">
          {complianceData.items.map((item) => (
            <div className="compliance-item" key={item.text}>
              <BsCheckCircle className="compliance-icon" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compliance;