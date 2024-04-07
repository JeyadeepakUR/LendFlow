import React from "react";
import { Link } from "react-router-dom";

const LatestLendings = () => {
  return (
    <div className="lendings-container text-white">
      <div className="lendings-header">
        <h1>Latest Lendings</h1>
      </div>
      <div className="lendings-list">
        <div className="lending">
          <div className="lending-header">
            <h2>Loan Amount: 1000 MATIC</h2>
          </div>
          <div className="lending-body">
            <p>Interest Rate: 5%</p>
            <p>Duration: 30 days</p>
            <p>Collateral: 2000 MATIC</p>
          </div>
          <div className="lending-footer">
            <Link to="/borrower">Borrow</Link>
          </div>
        </div>
        <div className="lending">
          <div className="lending-header">
            <h2>Loan Amount: 2000 MATIC</h2>
          </div>
          <div className="lending-body">
            <p>Interest Rate: 7%</p>
            <p>Duration: 30 days</p>
            <p>Collateral: 4000 MATIC</p>
          </div>
          <div className="lending-footer">
            <Link to="/borrower">Borrow</Link>
          </div>
        </div>
        <div className="lending">
          <div className="lending-header">
            <h2>Loan Amount: 3000 MATIC</h2>
          </div>
          <div className="lending-body">
            <p>Interest Rate: 10%</p>
            <p>Duration: 30 days</p>
            <p>Collateral: 6000 MATIC</p>
          </div>
          <div className="lending-footer">
            <Link to="/borrower">Borrow</Link>
          </div>
        </div>
      </div>
      
            
    </div>
  );
};

export default LatestLendings;