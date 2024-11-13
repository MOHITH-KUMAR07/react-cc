// Home.js
import React from 'react';
import './Home.css';
const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Bank Management System</h1>
        <div className="auth-buttons">
          <button onClick={() => setCurrentPage('login')}>Login</button>
          <button onClick={() => setCurrentPage('signup')}>Signup</button>
        </div>
      </header>

      <main className="content">
        <section className="intro">
          <h2>Welcome to Your Trusted Bank</h2>
          <p>
            We provide secure banking services, easy loan options, and a
            reliable payment system to cater to your financial needs.
          </p>
        </section>

        <section className="services">
          <div className="service-card" onClick={() => setCurrentPage('loans')}>
            <h3>Loans</h3>
            <p>Apply for personal, car, or home loans with low interest rates.</p>
          </div>

          <div className="service-card" onClick={() => setCurrentPage('payments')}>
            <h3>Payments</h3>
            <p>Make easy online payments and manage your transactions securely.</p>
          </div>

          <div className="service-card" onClick={() => setCurrentPage('dashboard')}>
            <h3>Dashboard</h3>
            <p>View your account balance and manage transactions.</p>
          </div>
        </section>

        <section className="about">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>24/7 customer support</li>
            <li>Secure online transactions</li>
            <li>Trusted by thousands of customers</li>
          </ul>
        </section>

        <footer className="footer">
          <p>Need help? <button onClick={() => setCurrentPage('contact')}>Contact Us</button></p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
