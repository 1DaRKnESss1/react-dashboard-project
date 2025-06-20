import './DashboardPage.css';
import WorkQueue from '../components/WorkQueue';
import PortfolioGoals from '../components/PortfolioGoals';
import QuickActions from '../components/QuickActions';
import MarketIntelligence from '../components/MarketIntelligence';
import MyAccountsTable from '../components/MyAccountsTable';

const DashboardPage = () => {
  return (
    <main className="dashboard-content">
      <WorkQueue />
      <PortfolioGoals />
      <div className="right-stack">
        <QuickActions />
        <MarketIntelligence />
      </div>
      <MyAccountsTable />
    </main>
  );
};

export default DashboardPage;