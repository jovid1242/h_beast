import React from 'react';
import { ethers } from "ethers";

const startPayment = async ({ ether, addr }) => {
    try {
      
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log("tx", tx);
  } catch (err) {
    console.log(err.message);
  }
};

function Payment(props) {
    const pay = async (e) => {
        const price = 0.001
        await startPayment({
            ether: String(e * price),
            addr: '0x5fE74C1c71b222db34Cb1aA98EAE8B78d7982595'
        });
    };
    return (
        <div className="banner_btn">
            <button onClick={() => pay(2)}>Buy 2 NFT</button>
            <button onClick={() => pay(1)}>Buy 1 NFT</button>
        </div>
    );
}

export default Payment;