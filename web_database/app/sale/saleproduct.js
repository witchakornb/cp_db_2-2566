import React, { useState } from 'react';

const SaleProductDetail = ({
    productName,
    productPrice,
    clickCount,
    handleQuantityChange,
    handleDeleteItem,
    handleDiscountChange,  // Add this prop
    onItemDelete,  // Add this prop
    handleDiscountInputChange,  // Add this prop

}) => {
    const [discountInput, setDiscountInput] = useState('');

    const calculatedProductPrice = (clickCount[productName] || 0) * productPrice;
    const discountValue = parseFloat(discountInput) || 0;
    const handleDiscountChange = (productName, discount) => {
        // Use the discountInput state
        const discountValue = parseFloat(discountInput) || 0;
        if (discountValue > productPrice) {
            // Show alert
            alert('Discount cannot be greater than the product price. Please enter a valid discount.');
        } else {
            // Update the discounts state with the new discount value
            setDiscounts((prevDiscounts) => ({
                ...prevDiscounts,
                [productName]: discountValue,
            }));
        }
    };

    // console.log('calculatedProduct Price : ',calculatedProductPrice);
    return (
        <div className="pb-3 block border-b-2">
            <div className="flex flex-row justify-between mb-2">
                <span className="text-md">{productName}</span>
                <span className="text-md text-center">{calculatedProductPrice} บาท</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        className="w-8 h-8 rounded-full bg-[#00A84F] text-white flex items-center justify-center font-bold"
                        onClick={() => handleQuantityChange(productName, -1)}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={clickCount[productName] || 0}
                        onChange={(e) => handleQuantityChange(productName, parseInt(e.target.value) || 0)}
                        className="w-16 ps-2 text-center bg-slate-100"
                    />
                    <button
                        className="w-8 h-8 rounded-full bg-[#00A84F] text-white flex items-center justify-center font-bold"
                        onClick={() => handleQuantityChange(productName, 1)}
                    >
                        +
                    </button>
                </div>
                <div className="flex">
                    <label htmlFor="ส่วนลด">ส่วนลด</label>
                    <input
                        type="number"
                        value={discountInput}
                        onChange={handleDiscountInputChange}
                        className="w-16 ps-2 text-center bg-slate-100 border-b border-gray-500"
                    />
                    <label htmlFor="บาท" className="">
                        ฿
                    </label>
                </div>

                <div className="flex items-center">
                    <button className="">
                        <span
                            className="px-2 py-2 rounded-md bg-red-500 text-white"
                            onClick={() => {
                                handleDeleteItem(productName);
                                onItemDelete();  // Call the onItemDelete function
                            }}
                        >
                            ลบ
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SaleProductDetail;
