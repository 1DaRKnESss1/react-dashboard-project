import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardNavigations from './components/DashboardNavigations';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="page-header">
          <div className="top-header">
            <h2 className="welcome-header">Hi Arthur, welcome! You have 12 open tasks.</h2>
            <div className="top-header-right">
              <input type="text" placeholder="Search" className="navbar-search" />
              <button className="navbar-avatar">AR</button>
            </div>
          </div>
          <DashboardNavigations />
        </header>
        <div className="page-content-wrapper">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/accounts" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;