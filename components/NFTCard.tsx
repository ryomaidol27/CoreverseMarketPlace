export default function NFTCard({ nft }) {
  return (
    <div className="border border-gray-700 rounded p-4 bg-gray-800 text-white">
      <p><strong>Asset:</strong> {nft.nftAddress}</p>
      <p><strong>Token ID:</strong> {nft.tokenId.toString()}</p>
      <p><strong>Price:</strong> {parseFloat(nft.price.toString()) / 1e18} CORE</p>
      <button className="mt-2 px-3 py-1 bg-green-600 hover:bg-green-800 rounded">Buy on Coreverse</button>
    </div>
  );
}
