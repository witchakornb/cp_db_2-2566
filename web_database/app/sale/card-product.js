'use cleint';
import React, { useState } from 'react';

const ProductCard = ({ product, onViewDetails, imgclick }) => {
  // Provide default values if 'product' is undefined
  const { Item_ItemId: fertilizerItemId = '', fertilizerName = '', fertilizerPrice = 0, ItemPhoto: fertilizerItemPhoto = '', ItemAmount: fertilizerAmount = 0 } = product || {};
  const { Item_ItemId: ChemicalItemId = '', ChemicalName = '', ChemicalPrice = 0, ItemPhoto: ChemicalItemPhoto = '', ItemAmount: ChemicalAmount } = product || {};
  const { Item_ItemId: OtherItemId = '', OtherName = '', OtherPrice = 0, ItemPhoto: OtherItemPhoto = '', ItemAmount: OtherAmount } = product || {};
  const { Item_ItemId: Craft_fertilizerItemId = '', Craft_fertilizerName = '', Craft_fertilizerPrice = 0, ItemPhoto: CraftItemPhoto = '', ItemAmount: CraftAmount } = product || {};
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default behavior
    setDropdownOpen(!isDropdownOpen);
  };
  const handleViewDetails = (productId) => {
    productId = fertilizerItemId || ChemicalItemId || OtherItemId || Craft_fertilizerItemId;
    console.log('use client in product card product Id:', productId);
    onViewDetails(productId);
    setDropdownOpen(false);
  };

  const handleImageClick = () => {
    const clickproductid = fertilizerItemId || ChemicalItemId || OtherItemId || Craft_fertilizerItemId;
    const productName = fertilizerName || ChemicalName || OtherName || Craft_fertilizerName;
    const productPrice = fertilizerPrice || Craft_fertilizerPrice || OtherPrice || ChemicalPrice;
    const productAmount = fertilizerAmount || CraftAmount || OtherAmount || ChemicalAmount;
    console.log('Product ID:', clickproductid);
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Amount:', productAmount);
    imgclick(clickproductid, productName, productPrice, productAmount);
  };

  return (
    <div className="w-[18%] bg-gray-900 rounded-lg shadow border border-black mx-2 mb-4">
      <div className="flex items-center align-middle mx-auto">
        <div
          className="rounded-t-lg overflow-hidden"
          onClick={handleImageClick}
          style={{ height: '150px', width: '100%', backgroundColor: '#F3F4F6' }}
        >
          <img
            className="object-cover w-full h-full text-wrap"
            src={`data:image/jpeg;base64,${fertilizerItemPhoto || ChemicalItemPhoto || OtherItemPhoto || CraftItemPhoto}`}
            alt={fertilizerName || ChemicalName || OtherName || Craft_fertilizerName}
          />
        </div>
      </div>
      <div className="p-4 bg-gray-900 rounded-b flex-col ">
        <a href="#" className="flex justify-between ">
          <h5 className="mb-2 text-md font-bold tracking-tight text-white">
            {fertilizerName || ChemicalName || OtherName || Craft_fertilizerName}
          </h5>
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
        <p className="mb-3 font-normal text-white">{fertilizerPrice || Craft_fertilizerPrice || OtherPrice || ChemicalPrice} บาท</p>
      </div>
    </div>
  );
};

export default ProductCard;
