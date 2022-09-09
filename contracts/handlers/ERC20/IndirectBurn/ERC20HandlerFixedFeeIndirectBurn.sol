// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.11;

import "../ERC20HandlerFixedFee.sol";

/**
    @title Handles ERC20 deposits and deposit executions.
    @author ChainSafe Systems.
    @notice This contract is intended to be used with the Bridge contract.
 */
contract ERC20HandlerFixedFeeIndirectBurn is ERC20HandlerFixedFee {

    constructor(address bridgeAddress) ERC20HandlerFixedFee(bridgeAddress) {}

    function burnERC20(address tokenAddress, address owner, uint256 amount) internal override {
        burnERC20indirect(tokenAddress, owner, amount);
    }
}
