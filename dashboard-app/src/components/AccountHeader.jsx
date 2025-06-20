import React from 'react';
import './AccountHeader.css';
import headerData from '../data/accountHeaderData.json';

const AccountHeader = () => {
  return (
    <div className="account-header">
      <div className="account-logo"></div>
      <div className="account-details">
        <h1>{headerData.name}</h1>
        <div className="account-info-right">
          {headerData.infoBlocks.map((info, index) => (
            <div className="info-block" key={index}>
              <span className="info-label">{info.label}</span>
              <span className="info-value">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;