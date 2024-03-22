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


    function _tokenIdExists(uint256 tokenId) private view returns (bool) {
        return tokenData[tokenId].maxSupply > 0;
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
