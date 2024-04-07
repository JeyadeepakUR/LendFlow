import React from 'react';
import './LBstyles.css';

function NeedMoney() {
  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="col-md-5 login-area">
            <form>
              <h3>Hello Borrower!</h3>
              <h4>Please enter the details to seek loan</h4>
              <div className="form-group">
                <div className="form-group">
                  <p className="nav-item ml-auto">Account no.</p>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="acc"
                    placeholder="Account No."
                    aria-label="Account No."
                    aria-describedby="basic-addon1"
                    
                  />
                </div>
              </div>
              {/* Other form fields go here */}
                <div className="form-group">
                    <p className="nav-item ml-auto">Loan Amount</p>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="loanAmount"
                        placeholder="Loan Amount"
                        aria-label="Loan Amount"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="form-group">
                    <p className="nav-item ml-auto">Interest Rate</p>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="interestRate"
                        placeholder="Interest Rate"
                        aria-label="Interest Rate"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="form-group">
                    <p className="nav-item ml-auto">Duration</p>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        placeholder="Duration"
                        aria-label="Duration"
                        aria-describedby="basic-addon1"
                    />
                </div>
              <div>
                <button id="submit1" type="submit" className="btn btn-primary btn-lg btn-block">
                  <i className="fas fa-search-dollar"></i> Submit Loan Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th>Lender Address</th>
              <th>Amount</th>
              <th>Interest</th>
              <th></th>
              <th></th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Lender Address">
                0x2187c0284267aB64751E49F04B817e5c5ddab9dF
              </td>
              <td data-label="Amount">20,000</td>
              <td data-label="Interest">15%</td>
              <td data-label="">
                <a href="#" className="btn btn__active">Get Loan</a>
              </td>
              <td data-label="">
                <a href="#" className="btn btn__active">Repay Loan</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NeedMoney;