// contracts/LoanContract.sol

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanContract {
    address public lender;
    address public borrower;
    uint256 public loanAmount;
    uint256 public interestRate;
    uint256 public repaymentDate;
    bool public loanApproved;

    constructor(address _borrower, uint256 _loanAmount, uint256 _interestRate, uint256 _repaymentDate) {
        lender = msg.sender;
        borrower = _borrower;
        loanAmount = _loanAmount;
        interestRate = _interestRate;
        repaymentDate = _repaymentDate;
        loanApproved = false;
    }

    function approveLoan() public {
        require(msg.sender == lender, "Only lender can approve the loan");
        loanApproved = true;
    }

    function repayLoan() public payable {
        require(msg.sender == borrower, "Only borrower can repay the loan");
        require(msg.value == loanAmount + (loanAmount * interestRate / 100), "Incorrect loan repayment amount");
        
    }
}
