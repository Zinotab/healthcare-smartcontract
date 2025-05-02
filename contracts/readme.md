### Healthcare Contracts Using Truffle

This project implements smart contracts for healthcare, focusing on storing patient records and facilitating doctor payments upon the addition of medical records.

### Project Structure

```
### Project Structure

The project is organized as follows:

```

/contracts
    - PatientRecords.sol: Smart contract for managing patient records.
    - DoctorPayments.sol: Smart contract for handling doctor payments.
/migrations
    - 1_initial_migration.js: Migration script for deploying the initial contracts.
    - 2_deploy_contracts.js: Migration script for deploying project-specific contracts.
/test
    - patientRecords.test.js: Unit tests for the PatientRecords contract.
    - doctorPayments.test.js: Unit tests for the DoctorPayments contract.
/build
    - contracts/: Compiled contract files.
    - artifacts/: Metadata and ABI files for deployed contracts.
/scripts
    - deploy.js: Script for deploying contracts to the blockchain.
    - interact.js: Script for interacting with deployed contracts.
truffle-config.js: Configuration file for Truffle framework.
package.json: Project dependencies and scripts.
README.md: Documentation for the project.
```

### Dependencies

- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain. It supports sending transactions, interacting with smart contracts, and querying blockchain data.
- **Bootstrap**: A front-end framework for building responsive and mobile-first web applications. It includes pre-designed components and utilities for faster UI development.
- **Parcel**: A zero-configuration web application bundler that simplifies building and packaging web applications by managing dependencies, assets, and optimizations automatically.
