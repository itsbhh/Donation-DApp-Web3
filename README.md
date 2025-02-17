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

### Steps  
1️⃣ **Clone the repository:**  
   ```sh
   git clone https://github.com/itsbhh/Donation-DApp-Web3
   

 
