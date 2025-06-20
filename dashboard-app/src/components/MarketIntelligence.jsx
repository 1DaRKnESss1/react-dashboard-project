import React from 'react';
import './MarketIntelligence.css';
import marketIntelligenceData from '../data/marketIntelligenceData.json';

const MarketIntelligence = () => {
  return (
    <div className="dashboard-section market-intelligence">
      <h3>Market intelligence</h3>
      <div className="news-list">
        {marketIntelligenceData.map((item, index) => (
          <div key={index} className="news-item">
            <span className="news-dot" style={{ backgroundColor: item.color }}></span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketIntelligence; 