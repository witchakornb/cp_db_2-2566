'use client';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

import Image from "next/image";
import Link from "next/link";
import styles from "./product.css";
import Posts from "./Posts";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Customer() {

  // get Data Api
  const [customerIdOptions, setcustomerIdOptions] = useState([]);
  const [customerNameOptions, setcustomerNameOptions] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/show_all_item_big`);
        const { Fertilizer, Chemicals, Other, Craft } = response.data;
        const fertilizers = Fertilizer || [];
        const chemicals = Chemicals || [];
        const others = Other || [];
        const crafts = Craft || [];
        const allData = [...fertilizers, ...chemicals, ...others, ...crafts];
        console.log(allData);
        setPosts(allData);

        // Set options for search
        const optionsCustomerId = allData.map((item) => (
          <option key={item.Item_ItemId} value={item.Item_ItemId}></option>
        ));
        setcustomerIdOptions(optionsCustomerId);
        console.log('options customerId :', optionsCustomerId);

        // Helper function to get the appropriate display name based on ItemType
        const getDisplayName = (item) => {
          switch (item.ItemType) {
            case "Fertilizer":
              return item.fertilizerName;
            case "Chemicals":
              return item.ChemicalName;
            case "Other":
              return item.OtherName;
            case "Craft":
              return item.Craft_fertilizerName;
            default:
              return "";
          }
        };

        const optionsCustomerName = allData.map((item) => (
          <option key={item.Item_ItemId} value={getDisplayName(item)}></option>
        ));
        setcustomerNameOptions(optionsCustomerName);
        console.log('options customerName :', optionsCustomerName);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //search
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [InputcustomerID, setInputcustomerID] = useState('');
  const [InputcustomerName, setInputcustomerName] = useState('');
  const filterSalesData = () => {
    if (searchButtonClicked) {
      console.log('customerID input:', InputcustomerID);
      console.log('customerName input:', InputcustomerName);

      const filteredData = posts.filter((sale) => {
        const inputCustomerIDMatch = !InputcustomerID || sale.Item_ItemId.includes(InputcustomerID);
        const inputCustomerNameMatch =
          !InputcustomerName ||
          ((sale.fertilizerName && sale.fertilizerName.includes(InputcustomerName)) ||
            (sale.ChemicalName && sale.ChemicalName.includes(InputcustomerName)) ||
            (sale.OtherName && sale.OtherName.includes(InputcustomerName)) ||
            (sale.Craft_fertilizerName && sale.Craft_fertilizerName.includes(InputcustomerName)));

        return InputcustomerID && InputcustomerName
          ? inputCustomerIDMatch && inputCustomerNameMatch
          : InputcustomerID
            ? inputCustomerIDMatch
            : InputcustomerName
              ? inputCustomerNameMatch
              : true;
      });

      setFilteredSalesData(filteredData);
    }
  };
  const displayData = searchButtonClicked ? filteredSalesData : posts;
  useEffect(() => {
    filterSalesData();
  }, [searchButtonClicked]);

  //เพิ่มสินค้าใหม่
  const [isDropdownAdd, setIsDropdownAdd] = useState(false);
  const toggleDropdownAdd = () => {
    setIsDropdownAdd((prev) => !prev);
  };

  //resat button
  const handleReset = () => {
    // Reset input values
    setInputcustomerID('');
    setInputcustomerName('');

    // Clear the filtered data
    setFilteredSalesData([]);

    // Set searchButtonClicked to false to display all data
    setSearchButtonClicked(false);
  };

  // ---------- Nav Bar ----------
  const [asideVisible, setAsideVisible] = useState(false);
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

  // ---------- Nav Bar ----------

  return (
    <>
      <head>
        <title>Product</title>
      </head>
      <body style={{ width: '100%' }}>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>

            <div class="m-4 border-solid border-2 rounded">
              <div class="p-4 bg-[#777777] font-bold text-white">
                ค้นหาข้อมูล
              </div>

              <div class="p-4">
                <div class="flex -mx-2">
                  <div class="w-1/2 px-2">
                    <div class="h-12">
                      <div class="mb-4">
                        <form action="" method="get">
                          <label for="customerID">รหัสสินค้า</label>
                          <input
                            value={InputcustomerID}
                            onChange={(e) => setInputcustomerID(e.target.value)}
                            type="text" list="customerID"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="กรอกรหัสสินค้า" />
                          <datalist id="customerID">
                            {customerIdOptions}
                          </datalist>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 px-2">
                    <div class="h-12">
                      <div class="mb-4">
                        <form action="" method="get">
                          <label for="customerName">ชื่อสินค้า</label>
                          <input
                            value={InputcustomerName}
                            onChange={(e) => setInputcustomerName(e.target.value)}
                            type="text" list="customerName"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="กรอกชื่อสินค้า" />
                          <datalist id="customerName">
                            {customerNameOptions}
                          </datalist>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 flex flex-row-reverse">
                <div class="ps-4">
                  <button onClick={handleReset}
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    รีเซต
                  </button>
                </div>
                <div class="ps-4">
                  <button
                    onClick={() => {
                      setSearchButtonClicked(true);
                      filterSalesData();
                    }}
                    class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                    <span>ค้นหา</span>
                  </button>
                </div>
              </div>
            </div>


            <div class="flex justify-between mx-4 mt-4">
              <div class="font-bold mx-4 mt-8">สินค้าทั้งหมด</div>

              <div class="">
                <div class="flex flex-row-reverse">
                  <div class="ps-4">
                    <div class="inline-block relative w-fit">
                      <button onClick={toggleDropdownAdd} class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <span className="pr-2">เพิ่มสินค้าใหม่</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </button>
                      {isDropdownAdd && (
                        <div class="absolute mt-2 right-0 w-40 bg-black bg-gray-100 rounded-md shadow-xl z-10 ">
                          <a href="/product/add_fertilizer" class="block px-2 py-2 text-sm text-black hover:bg-gray-400 hover:text-white">
                            <div class="flex items-start p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <span>เพิ่มปุ๋ย</span>
                            </div>
                          </a>
                          <a href="/product/add_craft_fertilizer" class="block px-2 py-2 text-sm text-black hover:bg-gray-400 hover:text-white">
                            <div class="flex items-start p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <span>เพิ่มปุ๋ยผสม</span>
                            </div>
                          </a>
                          <a href="/product/add_chemical" class="block px-2 py-2 text-sm text-black hover:bg-gray-400 hover:text-white">
                            <div class="flex items-start p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <span>เพิ่มเคมีภัณฑ์</span>
                            </div>
                          </a>
                          <a href="/product/add_other" class="block px-2 py-2 text-sm text-black hover:bg-gray-400 hover:text-white">
                            <div class="flex items-start p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <span>เพิ่มสินค้าอื่น ๆ</span>
                            </div>
                          </a>
                          {/* Add more dropdown items as needed */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col m-4">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <Posts posts={displayData} />
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
