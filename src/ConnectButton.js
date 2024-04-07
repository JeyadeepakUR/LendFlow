import React from 'react';
import { Rainbow } from 'rainbow-sdk';

const ConnectButton = () => {
  const connectWallet = async () => {
    try {
      await Rainbow.connect();
      console.log('Connected to Rainbow Wallet');
      // Perform any additional actions after connecting
    } catch (error) {
      console.error('Error connecting to Rainbow Wallet:', error);
    }
  };

  return (
    <button onClick={connectWallet}>Connect Rainbow Wallet</button>
  );
};

export default ConnectButton;
