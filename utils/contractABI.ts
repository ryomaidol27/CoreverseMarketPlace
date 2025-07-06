export const marketplaceAddress = "YOUR_DEPLOYED_COREVERSE_CONTRACT_ADDRESS";
export const marketplaceAbi = [
  "function getAllListings() view returns (tuple(address seller, address nftAddress, uint256 tokenId, uint256 price)[])",
  "function listNFT(address nftAddress, uint256 tokenId, uint256 price) external",
  "function buyNFT(uint256 listingId) payable external"
];
