'use cleint';
import React,{useState} from 'react';

const ProductCard = ({ product , onViewDetails}) => {
  // Provide default values if 'product' is undefined
  const { Item_ItemId: fertilizerItemId = '' ,fertilizerName = '', fertilizerPrice = 0, ItemPhoto: fertilizerItemPhoto = '' } = product || {};
const { Item_ItemId: ChemicalItemId = '' ,ChemicalName = '', ChemicalPrice = 0, ItemPhoto: ChemicalItemPhoto = '' } =  product || {};
const { Item_ItemId: OtherItemId = '' ,OtherName = '', OtherPrice = 0, ItemPhoto: OtherItemPhoto = '' } = product || {};
const { Item_ItemId: Craft_fertilizerItemId = '' ,Craft_fertilizerName = '', Craft_fertilizerPrice = 0, ItemPhoto: CraftItemPhoto = '' } = product || {};
const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default behavior
    setDropdownOpen(!isDropdownOpen);
  };
const handleViewDetails = (productId) => {
  productId = fertilizerItemId||ChemicalItemId||OtherItemId||Craft_fertilizerItemId;
  console.log('use client in product card product Id:', productId);
  onViewDetails(productId);
  setDropdownOpen(false);

};

  return (
    <div className="w-1/5 bg-white rounded-lg shadow border border-black m-2">
      <a href="#" className="flex items-center align-middle mx-auto">
        <div className="rounded-t-lg overflow-hidden" style={{ height: '250px', width: '100%' }}>
          <img className="object-cover w-full h-full" src={`data:image/jpeg;base64,${fertilizerItemPhoto||ChemicalItemPhoto||OtherItemPhoto||CraftItemPhoto}`} alt={fertilizerName||ChemicalName||OtherName||Craft_fertilizerName} />
        </div>
      </a>
      <div className="p-4 bg-gray-900 rounded-b">
        <a href="#" className="flex justify-between">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{fertilizerName||ChemicalName||OtherName||Craft_fertilizerName}</h5>
          <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 bg-gray-900 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 right-0 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10">
          <button
            className="w-full block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white"
            onClick={handleViewDetails}
          >
            <div className="flex items-start p-1">
              <span className="mr-1">🔍</span>
              <span>ดูรายละเอียดสินค้า</span>
            </div>
          </button>
        </div>
      )}
    </div>
        </a>
        <p className="mb-3 font-normal text-white">{fertilizerPrice||Craft_fertilizerPrice||OtherPrice||ChemicalPrice} บาท</p>
      </div>
    </div>
  );
};

export default ProductCard;
