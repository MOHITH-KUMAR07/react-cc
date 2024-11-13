// src/components/Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './Dashboard.css'; // Import scoped styles

const Dashboard = () => {
  const { user, logout, setCurrentPage } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setCurrentPage('login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, Mohith!</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-card account-summary">
          <h2>Account Summary</h2>
          <p><strong>Account Holder:</strong> Mohith</p>
          <p><strong>Balance:</strong> ₹75,000.00</p>
          <p><strong>Last Login:</strong> 22 Oct 2024</p>
        </div>

        <div className="dashboard-card dashboard-transactions">
          <h2>Recent Transactions</h2>
          <ul>
            <li><span>₹5,000</span> - Rent Payment (21 Oct)</li>
            <li><span>₹2,500</span> - Grocery Purchase (20 Oct)</li>
            <li><span>₹10,000</span> - Loan Repayment (15 Oct)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
