import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    // Dummy data for financial score meter and latest loans/borrowals
    const [financialScore, setFinancialScore] = useState(750); // Example financial score
    const [latestLoans, setLatestLoans] = useState([]);

    // Fetch latest loans and borrowals data from backend
    useEffect(() => {
        // Fetch latest loans and borrowals data from backend API
        // Example: fetch('/api/latestLoans').then(response => response.json()).then(data => setLatestLoans(data));
        // Replace the above fetch call with your actual API endpoint
        const dummyData = [
            { id: 1, type: 'Loan', amount: 1000, date: '2022-04-01' },
            { id: 2, type: 'Borrowal', amount: 500, date: '2022-03-25' },
            { id: 3, type: 'Loan', amount: 2000, date: '2022-03-20' },
            // Add more dummy data as needed
        ];
        setLatestLoans(dummyData);
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to Your Financial Dashboard</h1>
            <div className="financial-score">
                <h2>Financial Score</h2>
                <div className="score-meter">
                    <div className="meter-fill" style={{ width: `${(financialScore / 850) * 100}%` }}></div>
                    <div className="meter-text">{financialScore}</div>
                </div>
            </div>
            <div className="latest-transactions">
                <h2>Latest Loans and Borrowals</h2>
                <ul>
                    {latestLoans.map(loan => (
                        <li key={loan.id}>
                            <span>{loan.type}</span>
                            <span>Amount: ${loan.amount}</span>
                            <span>Date: {loan.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
