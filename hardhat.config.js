require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const OPENCAMPUS_URL = process.env.OPENCAMPUS_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    opencampus: {
      url: OPENCAMPUS_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};