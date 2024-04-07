import React from "react";
import {Link } from 'react-router-dom'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <nav className="sticky bg-black w-full top-0 z-50 flex items-center p-4">
      <Link to="/" className="text-white font-bold flex items-center space-x-2">
        BlockBorrow
      </Link>
      <div className="ml-auto flex items-center space-x-4 ">
        <Link to="/" className="text-white">Dashboard</Link>
        <Link to="/borrowers" className="text-white">Latest Borrowers</Link>
        <Link to="/LatestLendings" className="text-white">Latest Lendings</Link>
        <Link to="/creditscore" className="text-white">Credit Score</Link>
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;