import React, { useState, useEffect } from 'react';
import HomePage from './Home';
import LenderPage from './Lender';
import BorrowerPage from './Borrow';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const App = () => {
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('onboarding');
    const [userAddress, setUserAddress] = useState('');
    
    // Check if MetaMask is installed
    useEffect(() => {
        if (window.ethereum) {
            setIsMetaMaskInstalled(true);
        }
    }, []);

    // Connect MetaMask wallet
    const connectWallet = async () => {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
    // Set the user's address and update wallet connection status
    setUserAddress(accounts[0]);
    setIsWalletConnected(true);
    console.log(accounts[0]);
    setCurrentPage('home')
        // try {
        //     // Request account access from MetaMask
            
        // } catch (error) {
        //     console.error('Error connecting wallet:', error);
        // }
    };

    // Render the appropriate page based on the current state
    const renderPage = () => {
      
      return (
        <div className="onboarding-screen">
                        <h2>Connect Your Wallet</h2>
                        <button onClick={connectWallet}>Connect MetaMask</button>
                        {(currentPage === 'home') ? (<HomePage />) : (currentPage === 'lender') ? (<LenderPage />) : (currentPage === 'borrower') ? ( <BorrowerPage />) : ( <HomePage />)};
        </div>
      );
        // switch (currentPage) {
        //     case 'onboarding':
        //         return (
                    
        //         );
        //     case 'home':
        //         return <HomePage userAddress={userAddress} />;
        //     case 'lender':
        //         return <LenderPage userAddress={userAddress} />;
        //     case 'borrower':
        //         return <BorrowerPage userAddress={userAddress} />;
        //     default:
        //         return <HomePage userAddress={userAddress} />;
        // }
    };

    return (
        // <div className="app-container">
        //     {/* Render navbar if wallet is connected */}
        //     {isWalletConnected && (
        //         <div className="navbar">
        //             <button onClick={() => setCurrentPage('home')}>Home</button>
        //             <button onClick={() => setCurrentPage('lender')}>Lender</button>
        //             <button onClick={() => setCurrentPage('borrower')}>Borrower</button>
        //         </div>
        //     )}
        //     {/* Render the current page */}
        //     {renderPage()}
        // </div>\
        <ConnectButton />
    );
};

export default App;
