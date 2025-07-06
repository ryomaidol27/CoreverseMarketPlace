import { useState } from 'react';
import { ethers } from 'ethers';
import { marketplaceAbi, marketplaceAddress } from '../utils/contractABI';

export default function ListNFT() {
  const [nftAddress, setNftAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');

  const listNFT = async () => {
    if (!window.ethereum) return alert('Install MetaMask');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(marketplaceAddress, marketplaceAbi, signer);
    const tx = await contract.listNFT(nftAddress, tokenId, ethers.utils.parseEther(price));
    await tx.wait();
    alert('Asset listed on Coreverse!');
  };

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">List Your NFT or Game Asset</h1>
      <input placeholder="Asset Contract Address" value={nftAddress} onChange={(e) => setNftAddress(e.target.value)} className="block mb-2 p-2 text-black" />
      <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} className="block mb-2 p-2 text-black" />
      <input placeholder="Price in CORE" value={price} onChange={(e) => setPrice(e.target.value)} className="block mb-2 p-2 text-black" />
      <button onClick={listNFT} className="px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded">List on Coreverse</button>
    </div>
  );
}
