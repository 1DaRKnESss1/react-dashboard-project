import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import AccountHeader from '../components/AccountHeader';
import NeedsAttention from '../components/NeedsAttention';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Policies from '../components/Policies';
import AccountStatus from '../components/AccountStatus';
import Compliance from '../components/Compliance';
import AccountDetails from '../components/AccountDetails';
import Communication from '../components/Communication'; 
import PoliciesTable from '../components/PoliciesTable';
import './AccountPage.css';


const AccountPage = () => {
  return (
    <div className="account-page-content">
      <Breadcrumbs />
      <div className="account-main-layout">
        <AccountHeader />
        <NeedsAttention />
      </div>
      <PerformanceMetrics />
      <Policies />

      <div className="status-compliance-row">
        <AccountStatus />
        <Compliance />
      </div>

      <div className="account-details-container">
        <AccountDetails />
      </div>

      <div className="communication-container" style={{ marginTop: '2.5rem' }}>
        <Communication />
      </div>
      
      <div className="policies-table-container" style={{ marginTop: '2.5rem' }}>
        <PoliciesTable />
      </div>
    </div>
  );
};

export default AccountPage;