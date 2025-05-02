pragma solidity ^0.8.0;

contract Healthcare {
    struct Record {
        address patient;
        string data;
        uint256 timestamp;
    }
    
    mapping(uint256 => Record) public records;
    address payable public owner;
    uint256 public doctorFee = 0.01 ether;
    
    event RecordAdded(uint256 id, address patient);
    event DoctorPaid(address doctor, uint256 amount);
    
    constructor() {
        owner = payable(msg.sender);
    }
    
    function addRecord(uint256 _id, string memory _data) external payable {
        require(msg.value >= doctorFee, "Insufficient payment");
        require(records[_id].patient == address(0), "Record exists");
        
        records[_id] = Record({
            patient: msg.sender,
            data: _data,
            timestamp: block.timestamp
        });
        
        payable(owner).transfer(msg.value);
        emit RecordAdded(_id, msg.sender);
        emit DoctorPaid(owner, msg.value);
    }
    
    function getRecord(uint256 _id) external view returns (string memory) {
        require(records[_id].patient != address(0), "No record found");
        return records[_id].data;
    }
    
    function setDoctorFee(uint256 _fee) external {
        require(msg.sender == owner, "Only owner");
        doctorFee = _fee;
    }
}