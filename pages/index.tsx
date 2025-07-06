import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { marketplaceAbi, marketplaceAddress } from '../utils/contractABI';
import NFTCard from '../components/NFTCard';

export default function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(marketplaceAddress, marketplaceAbi, provider);
      const listings = await contract.getAllListings();
      setNfts(listings);
    };
    if (window.ethereum) loadListings();
  }, []);

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <Head><title>Coreverse Marketplace</title></Head>
      <h1 className="text-3xl font-bold mb-4">Coreverse NFT & Asset Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {nfts.map((nft, i) => <NFTCard key={i} nft={nft} />)}
      </div>
    </div>
  );
                  }
