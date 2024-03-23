// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./SoulBoundToken.sol";

contract FactorySBT {
    SoulBoundToken[] public tokens;
    mapping(uint256 => address) public indexToContract;
    mapping(uint256 => address) public indexToOwner;

    event SBTCreated(address _owner, address _token_contract, string _contractName, string _uri);

    function deploySBT(
        string memory _contractName,
        string memory _uri,
        uint256[] memory _ids,
        string[] memory _names,
        uint256[] memory _fees,
        uint256[] memory _maxSupplies
    ) public returns (address) {
        SoulBoundToken t = new SoulBoundToken(_contractName, _uri, _names, _ids, _fees, _maxSupplies);
        t.transferOwnership(msg.sender);
        tokens.push(t);
        indexToContract[tokens.length - 1] = address(t);
        indexToOwner[tokens.length - 1] = msg.sender;
        emit SBTCreated(msg.sender, address(t), _contractName, _uri);
        return address(t);
    }

    function getSBTDetailsbyIndexAndId(uint256 _index, uint256 _id)
        public
        view
        returns (
            address _contract,
            address _owner,
            string memory _uri,
            string memory _name,
            uint256 _mintFee,
            uint256 _maxSupply,
            uint256 _supply
        )
    {
        SoulBoundToken token = tokens[_index];
        SoulBoundToken.TokenData memory tokenData = token.getTokenData(_id);
        return (
            address(token),
            token.owner(),
            token.uri(_id),
            tokenData.name,
            tokenData.mintFee,
            tokenData.maxSupply,
            tokenData.supply
        );
    }

    function getSBTByIndex(uint256 _index)
        public
        view
        returns (
            address contractAddress,
            address owner,
            string memory contractName,
            string memory baseURI
        )
    {
        SoulBoundToken token = tokens[_index];
        return (address(token), token.owner(), token.name(), token.baseMetadataURI());
    }
}
