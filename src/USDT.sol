// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestnetUSDT is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("Testnet USDT", "USDT") Ownable(msg.sender) {
        // Mint 1 million USDT to the contract deployer
        _mint(msg.sender, 1_000_000 * 10**decimals());
    }

    function decimals() public pure override returns (uint8) {
        return 18;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }

   
}
//0xef67Ba74396967cbf005396970258FBc577a7f99