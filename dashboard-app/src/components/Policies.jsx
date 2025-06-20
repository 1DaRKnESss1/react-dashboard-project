import React from 'react';
import './Policies.css';
import policiesData from '../data/policiesData.json';

import { FaShip, FaShieldAlt, FaHardHat, FaHome, FaUmbrella } from 'react-icons/fa';

const iconComponents = {
  FaShip: <FaShip />,
  FaShieldAlt: <FaShieldAlt />,
  FaHardHat: <FaHardHat />,
  FaHome: <FaHome />,
  FaUmbrella: <FaUmbrella />
};

const Policies = () => {
  return (
    <section className="policies-section">
      <h2 className="section-title">{policiesData.title}</h2>

      <div className="policies-container">
        <div className="policies-grid">
          {policiesData.policies.map((policy) => (
            <div className="policy-card" key={policy.name}>

              <div className="policy-card-header">
                <div 
                  className="policy-icon-wrapper" 
                  style={{ color: policy.color}}
                >
                  {iconComponents[policy.icon]}
                </div>
                <h3 className="policy-name">{policy.name}</h3>
              </div>

              <div className="policy-card-body">
                <p className="policy-detail">
                  Premium: <span>{policy.premium}</span>
                </p>
                <p className="policy-detail">
                  Eff. Date: <span>{policy.effDate}</span>
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;