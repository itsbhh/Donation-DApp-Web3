# Donation DApp 💰

## Description  
Donation DApp is a decentralized blockchain-based application that allows users to send donations in the form of Ether. Each donation includes a name and a message, which are stored on the blockchain. The contract owner receives all the funds securely.  

## Features  
✅ Users can donate Ether  
✅ Each donation includes a name and message  
✅ Funds are transferred directly to the owner’s wallet  
✅ Users can view all past donations/messages stored on the blockchain  

## Tech Stack  
- **Frontend:** React.js  
- **Blockchain:** Solidity (Smart Contract)  
- **Development Environment:** Hardhat  
- **Network:** EduChain  

## Smart Contract (`chai.sol`)  

- **Contract Address:** [0x3C3e473d96bd3A4d1E52Cacd0d0119C274d38997](https://edu-chain-testnet.blockscout.com/address/0x3C3e473d96bd3A4d1E52Cacd0d0119C274d38997)

### Functions  

### 1️⃣ `buyChai(string calldata name, string calldata message) external payable`  
   - Allows users to send Ether along with a name and message.  
   - Transfers the Ether to the contract owner.  
   - Stores the message, sender’s name, and timestamp on the blockchain.  
   - Requires the amount to be greater than 0 Ether.  

### 2️⃣ `getMemos() public view returns (Memo[] memory)`  
   - Returns all past messages (memos) stored in the contract.  
   - Each memo contains:  
     - `name`: The sender’s name.  
     - `message`: The message left by the sender.  
     - `timestamp`: The time when the donation was made.  
     - `from`: The sender’s Ethereum address.  

## Installation & Setup  

### Prerequisites  
Make sure you have the following installed:  
- Node.js  
- MetaMask (for interacting with the blockchain)  
- Hardhat (for deploying and testing the smart contract)  

### Step 
1️⃣ **Clone the repository:**  
   ```sh
   git clone https://github.com/itsbhh/Donation-DApp-Web3
   ```

 ## Future Scope 🚀

### 🔹 Multi-Currency Support  
Enable donations in multiple cryptocurrencies beyond Ether, allowing users to contribute using Bitcoin, USDT, and other popular digital assets.

### 🔹 Smart Contract Upgradeability  
Implement upgradable smart contracts using proxy patterns to enable future enhancements without redeploying the entire contract.

### 🔹 Integration with NFT Rewards  
Introduce an NFT reward system where donors receive unique digital collectibles as a token of appreciation for their contributions.

### 🔹 Mobile App Support  
Develop a mobile-friendly version or a dedicated mobile app to provide users with a seamless donation experience on smartphones and tablets.

### 🔹 Anonymous Donations  
Offer an option for donors to contribute without revealing their identity, ensuring privacy while maintaining transparency on the blockchain.

### 🔹 Social Media Integration  
Enable donors to share their contributions on social media platforms, increasing awareness and encouraging more participation in charitable causes.


![image](https://github.com/user-attachments/assets/4338bde5-64a1-4683-8c47-23e85b5ac502)



### Video Demonstration
https://github.com/user-attachments/assets/9254bb05-4ff9-40b6-8a13-e3706a275f86



