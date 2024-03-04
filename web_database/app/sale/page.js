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
  const [asideVisible, setAsideVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    venta: false,
    resumen: false,
    financiero: false,
    stock: false,
    clientes: false,
  });
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
  };

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
          console.log('ProductName match for Item_ItemId:', sale.Item_ItemId);
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
            <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
              <div className="relative mb-4 flex flex-wrap items-stretch">
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
                    <ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} />
                  ))}
                  
                </div>
                <div style={{ display: toggle === 2 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 2 && (product.category === 'fertilizer' || product.category === 'craft'))
                    .map((product) => (
<ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} />
                    ))}
                </div>
                <div style={{ display: toggle === 3 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 3 && (product.category === 'chemicals'))
                    .map((product) => (
<ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} />
                    ))}
                </div>
                <div style={{ display: toggle === 4 ? 'flex' : 'none' }} className="flex-wrap">
                  {displayData
                    .filter(product => toggle === 4 && (product.category === 'other'))
                    .map((product) => (
<ProductCard key={product.Item_Itemid} product={product} onViewDetails={handleViewDetails} />
                    ))}
                </div>
              </div>
              {selectproduct && (
        <ProductDetail itemId={selectproduct} onClose={handleCloseProductDetail} />
      )}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
