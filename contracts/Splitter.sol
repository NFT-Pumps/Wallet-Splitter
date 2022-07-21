// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

/********************
 * @author: Techoshi.eth *
        <(^_^)>
 ********************/


import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract Splitter is PaymentSplitter {

    constructor(
        address[] memory _payees,
        uint256[] memory _shares
    )
        PaymentSplitter(_payees, _shares)
    {
       
    }
}