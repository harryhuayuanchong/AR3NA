// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract SoulBoundToken is ERC1155, Ownable {
    struct TokenData {
        string name;
        uint256 id;
        uint256 mintFee;
        uint256 maxSupply;
        uint256 supply;
    }

    string public baseMetadataURI;
    string public name;

    mapping(uint256 => TokenData) public tokenData;
    mapping(uint256 => mapping(address => bool)) public whitelistByTokenId;
    mapping(address => bool) public hasMinted;

    constructor(
        string memory _contractName,
        string memory _uri,
        string[] memory _names,
        uint256[] memory _ids,
        uint256[] memory _fees,
        uint256[] memory _maxSupplies
    ) Ownable(msg.sender) ERC1155(_uri) {
        require(_names.length == _ids.length, "Length mismatch");
        require(_ids.length == _fees.length, "Length mismatch");
        require(_fees.length == _maxSupplies.length, "Length mismatch");

        for (uint256 i = 0; i < _ids.length; i++) {
            tokenData[_ids[i]] = TokenData({
                name: _names[i],
                id: _ids[i],
                mintFee: _fees[i],
                maxSupply: _maxSupplies[i],
                supply: 0
            });
        }

        baseMetadataURI = _uri;
        name = _contractName;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function uri(uint256 _tokenid) public view override returns (string memory) {
        return string(abi.encodePacked(baseMetadataURI, Strings.toString(_tokenid), ".json"));
    }

    function addToWhitelist(uint256 tokenId, address[] calldata addresses) external onlyOwner {
        require(_tokenIdExists(tokenId), "Token ID does not exist");
        for (uint256 i = 0; i < addresses.length; i++) {
            whitelistByTokenId[tokenId][addresses[i]] = true;
        }
    }

    function removeFromWhitelist(uint256 tokenId, address[] calldata addresses) external onlyOwner {
        require(_tokenIdExists(tokenId), "Token ID does not exist");
        for (uint256 i = 0; i < addresses.length; i++) {
            whitelistByTokenId[tokenId][addresses[i]] = false;
        }
    }

    function _tokenIdExists(uint256 tokenId) private view returns (bool) {
        return tokenData[tokenId].maxSupply > 0;
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public payable {
        require(_tokenIdExists(id), "Token ID does not exist");
        require(whitelistByTokenId[id][msg.sender], "Caller is not whitelisted for this token");
        require(!hasMinted[msg.sender], "Caller has already minted a token");
        require(amount == 1, "Can only mint one token at a time");
        TokenData storage data = tokenData[id];
        require(msg.value == data.mintFee * amount, "Insufficient payment for minting");
        require(data.supply + amount <= data.maxSupply, "Exceeds maximum supply");

        _mint(account, id, amount, "");
        data.supply += amount;
        hasMinted[msg.sender] = true;
    }

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal virtual override {
        require(from == address(0) || to == address(0), "SBT: transfer not allowed");

        super._update(from, to, ids, amounts);
    }

    function getTokenData(uint256 tokenId) public view returns (TokenData memory) {
        require(_tokenIdExists(tokenId), "Token ID does not exist");
        return tokenData[tokenId];
    }

}
