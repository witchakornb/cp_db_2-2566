
import React from 'react';

const ProductCard = ({ product }) => {
  // Provide default values if 'product' is undefined
  const { fertilizerName = '', fertilizerPrice = 0, ItemPhoto: fertilizerItemPhoto = '' } = product || {};
const { ChemicalName = '', ChemicalPrice = 0, ItemPhoto: ChemicalItemPhoto = '' } =  product || {};
const { OtherName = '', OtherPrice = 0, ItemPhoto: OtherItemPhoto = '' } = product || {};
const { Craft_fertilizerName = '', Craft_fertilizerPrice = 0, ItemPhoto: CraftItemPhoto = '' } = product || {};

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </a>
        <p className="mb-3 font-normal text-white">{fertilizerPrice||Craft_fertilizerPrice||OtherPrice||ChemicalPrice} บาท</p>
      </div>
    </div>
  );
};

export default ProductCard;
