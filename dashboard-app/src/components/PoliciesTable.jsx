import React from 'react';
import './PoliciesTable.css';
import policiesTableData from '../data/policiesTableData.json';

import { BsShieldShaded, BsFillUmbrellaFill, BsBriefcaseFill, BsTruck, BsThreeDotsVertical } from 'react-icons/bs';

const PolicyIcon = ({ icon }) => {
  const iconMap = {
    marine: <BsTruck />,
    liability: <BsShieldShaded />,
    workers: <BsBriefcaseFill />,
    umbrella: <BsFillUmbrellaFill />,
  };
  return <div className={`policy-icon ${icon}`}>{iconMap[icon] || null}</div>;
};

const LossRatioBadge = ({ value }) => {
  if (value === null || value === undefined) {
    return <span className="loss-ratio-na">N/A</span>;
  }

  let colorClass = 'green';
  if (value > 50 && value <= 75) colorClass = 'yellow';
  if (value > 75) colorClass = 'red';

  return (
    <span className={`loss-ratio-badge ${colorClass}`}>
      {value}%
    </span>
  );
};

const PoliciesTable = () => {
  const formatCurrency = (value) => {
    if (value === 0) return '$0';
    if (!value) return 'N/A';
    return `$${value.toLocaleString('en-US')}`;
  };

  return (
    <div>
       <div className="external-section-header">
        <h2 className="external-section-title">{policiesTableData.title}</h2>
      </div>
      <div className="policies-table-card">
        <div className="communication-toolbar">
            <input type="text" placeholder="Search" className="comm-search-input" />
            <div className="comm-buttons">
              {/* ОНОВЛЕНО: Клас 'active' видалено */}
              <button className="comm-button filter">Filter</button>
              <button className="comm-button group">Group</button>
            </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>LINE</th>
                <th>EFF. DATE</th>
                <th>EXP. DATE</th>
                <th>STATUS</th>
                <th>EXPIRING TECH</th>
                <th>EXPIRING PREMIUM</th>
                <th>RENEWAL TO TECH</th>
                <th>RENEWAL TECH</th>
                <th>RENEWAL PREMIUM</th>
                <th>RATE CHANGE</th>
                <th>LOSS RATIO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {policiesTableData.policies.map(policy => (
                <tr key={policy.id}>
                  <td>
                    <div className="line-cell">
                      <PolicyIcon icon={policy.icon} />
                      <div>
                        <span className="line-name">{policy.line}</span>
                        <span className="line-id">{policy.lineId}</span>
                      </div>
                    </div>
                  </td>
                  <td>{policy.effDate}</td>
                  <td>{policy.expDate}</td>
                  <td>
                    <span className={`status-dot ${policy.status.toLowerCase()}`}></span>
                    {policy.status}
                  </td>
                  <td>{formatCurrency(policy.expiringTech)}</td>
                  <td>{formatCurrency(policy.expiringPremium)}</td>
                  <td>{formatCurrency(policy.renewalToTech)}</td>
                  <td>{formatCurrency(policy.renewalTech)}</td>
                  <td className="premium-bold">{formatCurrency(policy.renewalPremium)}</td>
                  <td>
                    {/* ОНОВЛЕНО: Змінено умову для виділення та форматування числа */}
                    <span className={policy.rateChange > 5 ? 'rate-change-high' : ''}>
                      {policy.rateChange !== null ? `${policy.rateChange.toFixed(1)}%` : 'N/A'}
                    </span>
                  </td>
                  <td><LossRatioBadge value={policy.lossRatio} /></td>
                  <td>
                    <button className="action-btn">
                      <BsThreeDotsVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="total-label">TOTAL ({policiesTableData.policies.length})</td>
                <td>{formatCurrency(policiesTableData.totals.expiringTech)}</td>
                <td>{formatCurrency(policiesTableData.totals.expiringPremium)}</td>
                <td>{formatCurrency(policiesTableData.totals.renewalToTech)}</td>
                <td>{formatCurrency(policiesTableData.totals.renewalTech)}</td>
                <td className="premium-bold">{formatCurrency(policiesTableData.totals.renewalPremium)}</td>
                <td>{policiesTableData.totals.rateChange}%</td>
                <td><LossRatioBadge value={policiesTableData.totals.lossRatio} /></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PoliciesTable;