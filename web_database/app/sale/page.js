'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import '../tailwind.css';
import ProductCard from './card-product';
import axios from 'axios';
import ProductDetail from "./product_detail/page";

export default function Sell() {
  const [orderId, setorderId] = useState([]);
  const [asideVisible, setAsideVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/gen_orderId`);
        console.log('orderid: ', response.data);
        setorderId(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };
    fetchData();
  }, []);
  const [dropdownVisible, setDropdownVisible] = useState({
    venta: false,
    resumen: false,
    financiero: false,
    stock: false,
    clientes: false,
  });

  const handleDropdownToggle = (key) => {
    setDropdownVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      document.addEventListener('click', handleDropdownClick);

      return () => {
        document.removeEventListener('click', handleDropdownClick);
      };
    }
  }, []);

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };


  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/show_all_item`);
        const { Fertilizer, Chemicals, Other, Craft } = response.data;

        const fertilizers = (Fertilizer || []).map(product => ({ ...product, category: 'fertilizer' }));
        console.log('Fertilizers all: ', fertilizers);
        fertilizers.forEach(fertilizer => {
          console.log('Fertilizer Name: ', fertilizer.fertilizerName);
        }); const chemicals = (Chemicals || []).map(product => ({ ...product, category: 'chemicals' }));
        console.log(Chemicals);
        const others = (Other || []).map(product => ({ ...product, category: 'other' }));
        console.log(others);
        const crafts = (Craft || []).map(product => ({ ...product, category: 'craft' }));
        console.log(crafts);
        const allData = [...fertilizers, ...chemicals, ...others, ...crafts];
        console.log(allData);

        setSalesData(allData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);


  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [productName, setProductName] = useState('');
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const filterSalesData = () => {
    if (searchButtonClicked) {
      console.log('ProductName input:', productName);

      const filteredData = salesData.filter(sale => {
        const productNameMatch = !productName || (
          (sale.fertilizerName && sale.fertilizerName.includes(productName)) ||
          (sale.ChemicalName && sale.ChemicalName.includes(productName)) ||
          (sale.OtherName && sale.OtherName.includes(productName)) ||
          (sale.Craft_fertilizerName && sale.Craft_fertilizerName.includes(productName))
        );

        if (productNameMatch) {
          http://localhost:3000/sale  console.log('ProductName match for Item_ItemId:', sale.Item_ItemId);
          console.log('ProductName match for Name:', productNameMatch);
        }

        return productNameMatch;
      });

      setFilteredSalesData(filteredData);
    }
  };
  const displayData = searchButtonClicked ? filteredSalesData : salesData;
  useEffect(() => {
    filterSalesData();
  }, [searchButtonClicked]);
  const [selectproduct, setSelectProduct] = useState('');
  const handleViewDetails = (productId) => {
    console.log('use client in sell product id:', productId);
    setSelectProduct(productId); // เปลี่ยนค่า selectproduct โดยใช้ setSelectProduct
    // You can perform any actions with the productId here
  };
  useEffect(() => {
    // Effect to trigger when selectproduct changes
    if (selectproduct !== '') {
    }
  }, [selectproduct]);

  const handleCloseProductDetail = () => {
    setSelectProduct('');
  };
  const [clickCount, setClickCount] = useState({});
  const [saleproduct, setsaleProduct] = useState('');
  const handleImageClick = (itemId, productName, productPrice, productAmount) => {
    // Check if the quantity exceeds the available product amount
    if (productAmount === 0) {
      alert("สินค้าหมด.");
      return;
    }

    // Rest of the function remains unchanged
    setClickCount((prev) => {
      const updatedCount = { ...prev };

      if (updatedCount[itemId]) {
        updatedCount[itemId] = {
          ...updatedCount[itemId],
          quantity: updatedCount[itemId].quantity + 1,
        };
      } else {
        updatedCount[itemId] = {
          productName,
          productPrice,
          quantity: 1,
        };
      }

      const updatedTotalAmount = Object.values(updatedCount).reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);

      setTotalAmount(updatedTotalAmount);

      return updatedCount;
    });
  };

  // Function to handle decrementing quantity
  const handleDecrement = (itemId, productAmount) => {
    setClickCount((prev) => {
      const updatedCount = { ...prev };
      const currentCount = updatedCount[itemId]?.quantity || 0;

      // If the current quantity is greater than 0, decrement it
      if (currentCount > 0) {
        updatedCount[itemId] = { ...updatedCount[itemId], quantity: currentCount - 1 };
      }

      // If the updated quantity is 0, remove the item
      if (updatedCount[itemId]?.quantity === 0) {
        delete updatedCount[itemId];
      }

      // Check if the productAmount is 0, make the product available again
      if (productAmount === 0) {
        alert("สินค้าหมด.");
        return prev;
      }

      return updatedCount;
    });
  };
  const [totalAmount, setTotalAmount] = useState(0);
  const handleDeleteItem = (itemId) => {
    setClickCount((prev) => {
      const updatedCount = { ...prev };
      const deletedItem = updatedCount[itemId];
      delete updatedCount[itemId];
      const updatedTotalDiscount = totalDiscount - (deletedItem?.discount || 0);
      setTotalDiscount(updatedTotalDiscount);

      // Calculate and update the total amount
      const updatedTotalAmount = Object.values(updatedCount).reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
      setTotalAmount(updatedTotalAmount);

      return updatedCount;
    });
  };
  const handleDeleteAllItems = () => {
    setClickCount({});
    setTotalAmount(0);
    setTotalDiscount(0);
  };
  const [discountError, setDiscountError] = useState('');
  const [totalDiscount, setTotalDiscount] = useState(0);
  const handleDiscountChange = (itemId, discount) => {
    // Check if the entered value is not a number or less than 0
    if (isNaN(parseFloat(discount)) || parseFloat(discount) < 0) {
      alert("Please enter a valid non-negative number for the discount");
      return;
    }
    const totalAmountForItem =
      clickCount[itemId].productPrice * (clickCount[itemId].quantity || 0);
    if (parseFloat(discount) > totalAmountForItem) {
      alert("Discount cannot exceed the total amount for the item");
      discount = 0;
    }
    setClickCount((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        discount: parseFloat(discount),
      },
    }));
    const updatedTotalDiscount = Object.values(clickCount).reduce(
      (total, item) => total + (item.discount || 0),
      0
    );
    setTotalDiscount(updatedTotalDiscount);

  };

  return (
    <>
      <head>
        <title>Sale</title>
      </head>
      <body>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-col h-screen">
          <div className="flex flex-1">
            <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
            <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-9/12'}`}>
              <div className=" mb-4 flex flex-wrap items-stretch">
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="relative border rounded-l-md border-[#e0e0e0] bg-white py-3 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                  placeholder="พิมพ์ชื่อสินค้าที่ต้องการค้นหา"
                />

                <div className="flex relative items-stretch">
                  <button
                    onClick={() => {
                      setSearchButtonClicked(true);
                      filterSalesData();
                    }}
                    className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-3 px-8 rounded-r-md inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 me-1">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                    </svg>
                    <span className="">ค้นหา</span>
                  </button>
                </div>
              </div>

              <div className="w-full p-0">
                <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
                  <li
                    className={`flex-auto cursor-pointer text-black text-center bg-white border-b-[3px] ${toggle === 1 ? ' border-green-500 ' : 'hover:bg-gray-400 hover:text-white  border-gray-200'} px-4 py-2`}
                    onClick={() => updateToggle(1)}
                  >
                    ทั้งหมด
                  </li>
                  <li
                    className={`flex-auto cursor-pointer text-black text-center bg-white border-b-[3px] ${toggle === 2 ? ' border-green-500' : 'hover:bg-gray-400 hover:text-white hover:border-gray-400  border-gray-200'} px-4 py-2`}
                    onClick={() => updateToggle(2)}
                  >
                    ปุ๋ย
                  </li>
                  <li
                    className={`flex-auto cursor-pointer text-black text-center bg-white border-b-[3px] ${toggle === 3 ? ' border-green-500' : 'hover:bg-gray-400 hover:text-white hover:border-gray-400  border-gray-200'} px-4 py-2`}
                    onClick={() => updateToggle(3)}
                  >
                    เคมีภัณฑ์
                  </li>
                  <li
                    className={`flex-auto cursor-pointer text-black text-center bg-white border-b-[3px] ${toggle === 4 ? ' border-green-500' : 'hover:bg-gray-400 hover:text-white hover:border-gray-400  border-gray-200'} px-4 py-2`}
                    onClick={() => updateToggle(4)}
                  >
                    อื่นๆ
                  </li>
                </ul>
                <div style={{ display: toggle === 1 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData.map((product) => (
                    <ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} imgclick={handleImageClick} />
                  ))}

                </div>
                <div style={{ display: toggle === 2 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 2 && (product.category === 'fertilizer' || product.category === 'craft'))
                    .map((product) => (
                      <ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} imgclick={handleImageClick} />
                    ))}
                </div>
                <div style={{ display: toggle === 3 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 3 && (product.category === 'chemicals'))
                    .map((product) => (
                      <ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} imgclick={handleImageClick} />
                    ))}
                </div>
                <div style={{ display: toggle === 4 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 4 && (product.category === 'other'))
                    .map((product) => (
                      <ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} imgclick={handleImageClick} />
                    ))}
                </div>
              </div>
              {selectproduct && (
                <ProductDetail itemId={selectproduct} onClose={handleCloseProductDetail} />
              )}
            </div>
            <div className=" flex justify-center w-3/12 bg-slate-100 ">
              <div className="w-full h-fit px-3">
                <div className="flex flex-row items-center justify-between px-0 mt-5 my-4">
                  <div className="font-bold text-xl">รายการที่ : {orderId.OrderId}</div>
                  <button onClick={handleDeleteAllItems}>
                    <span className="px-2 py-2 rounded-md bg-red-100 text-red-500">ลบทั้งหมด</span>
                  </button>
                </div>
                <div className="px-0 py-0 mt-0 overflow-y-auto h-96 bg-slate-100">
                  {Object.keys(clickCount).map((itemid) => (
                    <div key={itemid} className="pb-3 block border-b-2">
                      <div className="flex flex-row justify-between mb-2">
                        <span className="text-md">{clickCount[itemid].productName}</span>
                        <span className="text-md text-center">
                          {clickCount[itemid].productPrice * (clickCount[itemid].quantity || 0)} บาท
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleDecrement(itemid)}
                            className="w-8 h-8 rounded-full bg-[#00A84F] text-white flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={clickCount[itemid]?.quantity || 0}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value, 10);
                              if (!isNaN(newQuantity) && newQuantity >= 0) {
                                setClickCount((prev) => ({
                                  ...prev,
                                  [itemid]: { ...prev[itemid], quantity: newQuantity },
                                }));
                              }
                            }}
                            className="w-16 ps-2 text-center bg-slate-100"
                          />
                          <button
                            className="w-8 h-8 rounded-full bg-[#00A84F] text-white flex items-center justify-center font-bold"
                            onClick={() => handleImageClick(itemid, clickCount[itemid].productName, clickCount[itemid].productPrice)}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex">
                          <label htmlFor="ส่วนลด">ส่วนลด</label>
                          <input
                            type="number"
                            value={clickCount[itemid]?.discount || ''}
                            onChange={(e) => handleDiscountChange(itemid, e.target.value)}
                            className="w-16 ps-2 text-center bg-slate-100 border-b border-gray-500"
                          />

                          {discountError && <p className="text-red-500">{discountError}</p>}

                          <label htmlFor="บาท" className="">
                            ฿
                          </label>
                        </div>

                        <div className="flex items-center">
                          <button className="">
                            <span
                              className="px-2 py-2 rounded-md bg-red-500 text-white"
                              onClick={() => handleDeleteItem(itemid)} // Call the new function
                            >
                              ลบ
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <div className="py-2 ">
                    <form action="#" method="post">
                      <div className="px-0 flex justify-between items-center mb-2">
                        <label for="ส่วนลดท้ายบิล" className="text-md">หมายเหตุ</label>
                        <input type="text" className="border-gray-200 px-2 py-1 rounded-md" placeholder="กรอกหมายเหตุ" />
                      </div>
                    </form>
                    <div className=" px-0 flex justify-between mb-2">
                      <span className=" text-xl">ยอดรวม</span>
                      <span className="text-xl">{totalAmount} บาท</span>
                    </div>

                    <div className=" px-0 flex justify-between mb-2">
                      <span className=" text-xl">ส่วนลดรวม</span>
                      <span className="text-xl">- {totalDiscount} บาท</span>
                    </div>

                    <div className="border-t-2 mt-3 py-2 px-0 flex items-center justify-between">
                      <span className="text-2xl font-semibold">ยอดสุทธิ</span>
                      <span className="text-2xl font-semibold">{totalAmount - totalDiscount} บาท</span>
                    </div>
                  </div>
                  <div className=" bg-blue-200 ">
                    <div className="px-4 py-2 rounded-full shadow-lg  text-2xl text-center bg-[#00A84F] text-white font-semibold">
                      ชำระเงิน
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
