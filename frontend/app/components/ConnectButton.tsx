import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectButton = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);

        // Create Web3 instance
        const web3 = new Web3(window.ethereum);

        // Subscribe to accounts change
        window.ethereum.on('accountsChanged', (accounts) => {
          setAccount(accounts[0]);
        });

        // Subscribe to chainId change
        window.ethereum.on('chainChanged', (chainId) => {
          console.log("Chain changed to:", chainId);
        });

        // Subscribe to session disconnection
        window.ethereum.on('disconnect', (error) => {
          console.error("Disconnected:", error);
          setAccount(null);
        });
      } catch (err) {
        setError(err.message);
        console.error('Error connecting to wallet:', err);
      }
    } else {
      setError("Please install MetaMask!");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    console.log("Disconnected");
  };

  return (
    <div>
      {account ? (
        <button onClick={disconnectWallet} className="bg-transparent hover:bg-[#24EACC] hover:text-slate-700 border text-black font-semibold py-2 px-4 rounded-3xl">
          Disconnect
        </button>
      ) : (
        <button onClick={connectWallet} className="bg-g-trbg-transparent hover:bg-[#24EACC] hover:text-slate-700 border text-black font-semibold py-2 px-4 rounded-3xl">
          connect wallet
        </button>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ConnectButton;