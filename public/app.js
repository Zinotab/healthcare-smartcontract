import Web3 from 'web3';

const contractABI = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "doctor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DoctorPaid",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "patient",
            "type": "address"
          }
        ],
        "name": "RecordAdded",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "doctorFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "records",
        "outputs": [
          {
            "internalType": "address",
            "name": "patient",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "data",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_data",
            "type": "string"
          }
        ],
        "name": "addRecord",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getRecord",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          }
        ],
        "name": "setDoctorFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
const contractAddress = "0x2dBF685F2587bC2f7A7aFE559700b5eE6fA9A558"; 

let web3;
let contract;
let accounts;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initWeb3();
    setupEventListeners();
});

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            contract = new web3.eth.Contract(contractABI, contractAddress);
            updateUI(true);
        } catch (error) {
            console.error("User denied access");
        }
    } else {
        alert("Please install MetaMask!");
    }
}

function setupEventListeners() {
    document.getElementById('connectWallet').addEventListener('click', initWeb3);
    
    document.getElementById('addRecord').addEventListener('click', async () => {
        const patientId = document.getElementById('patientId').value;
        const medicalData = document.getElementById('medicalData').value;
        const fee = web3.utils.toWei('0.01', 'ether');
        
        try {
            await contract.methods.addRecord(patientId, medicalData)
                .send({ from: accounts[0], value: fee });
            alert("Record added and doctor paid!");
        } catch (error) {
            console.error("Error:", error);
            alert("Transaction failed");
        }
    });
    
    document.getElementById('viewRecord').addEventListener('click', async () => {
        const recordId = document.getElementById('viewId').value;
        try {
            const record = await contract.methods.getRecord(recordId).call();
            document.getElementById('recordDisplay').innerText = record;
        } catch (error) {
            console.error("Error:", error);
            alert("Record not found");
        }
    });
}

function updateUI(isConnected) {
    const statusEl = document.getElementById('walletStatus');
    if (isConnected) {
        statusEl.textContent = `Connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`;
        statusEl.className = "text-success";
    } else {
        statusEl.textContent = "Not connected";
        statusEl.className = "text-danger";
    }
}