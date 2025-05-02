### Healthcare Contracts Using Truffle

A decentralized application for storing healthcare records with automatic doctor payments, 
built with:

- Solidity smart contracts
- Web3.js for blockchain interaction
- Parcel for bundling
- Bootstrap for UI


### Project Structure
```
├── build
│   └── contracts
├── contracts
│   └── Healthcare.sol
├── dist
│   ├── index.html
│   ├── public.5a2e1419.js
│   ├── public.5a2e1419.js.map
│   ├── public.c180ac0f.css
│   └── public.c180ac0f.css.map
├── migrations
│   └── 2_deploy_healthcare.js
├── package.json
├── package-lock.json
├── public
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── readme.md
├── test
└── truffle-config.js
```

### Features
- Patients can store medical records on-chain
- Automatic 0.01 ETH payment to doctors per record
- View record history with timestamps
- MetaMask integration