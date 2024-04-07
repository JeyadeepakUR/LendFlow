import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 bg-login">
        <img src="" alt="" />
        <div className="content">
          <h1 className="brand">Peer to Peer Lending Dapp</h1>
          <br />
          <h3>Connecting people with their money.</h3>
        </div>
      </div>
      <div className="col-md-4 login-area">
        <form>
          <h4>We build trust.</h4>
          <h4>
            We ensure peer to peer lending with mortgage-security based
            guarantee.
          </h4>
          <a href="./LatestBorrowers">
            <div className="btn btn-primary btn-lg btn-block">
               Need Money
            </div>
          </a>
          <br />
          <a href="./lender">
            <div className="btn btn-success btn-lg btn-block">
               Invest Money
            </div>
          </a>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Home;
