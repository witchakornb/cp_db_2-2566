'use client';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

import Image from "next/image";
import Link from "next/link";
import styles from "./bill_cancellation_history.css";
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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/select_orderGood`);
        console.log("res cus : ", response);
        const posts = response.data;
        setPosts(posts);
        console.log("after set : ", posts);

        // Set options for search
        const optionsCustomerId = posts.map((item) => (
          <option key={item.OrderId} value={item.OrderId}></option>
        ));
        setcustomerIdOptions(optionsCustomerId);
        console.log('options customerId :', optionsCustomerId);

        const optionsCustomerName = posts.map((item) => (
          <option key={item.OrderId} value={item.CustomerName}></option>
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
  // Assume this is your formatDate function
  const formatDate = (dateString) => {
    // Your date formatting logic here
    return formattedDate;
  };
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [InputcustomerID, setInputcustomerID] = useState('');
  const [InputDate, setInputDate] = useState('');
  const [InputcustomerName, setInputcustomerName] = useState('');
  const filterSalesData = () => {
    if (searchButtonClicked) {
      console.log('customerID input:', InputcustomerID);
      console.log('customerName input:', InputcustomerName);
      console.log('InputDate input:', InputDate);

      const filteredData = posts.filter((sale) => {
        const inputCustomerIDMatch = !InputcustomerID || sale.OrderId.includes(InputcustomerID);
        // Extracting the date part from the API response
        const apiDate = sale.OrderDate.split(' ')[0];
        // Comparing with the extracted date part
        const inputDateMatch = !InputDate || apiDate.includes(InputDate);
        const inputCustomerNameMatch = !InputcustomerName || sale.CustomerName.includes(InputcustomerID);

        return InputcustomerID && InputcustomerName && InputDate
          ? inputCustomerIDMatch && inputCustomerNameMatch && inputDateMatch
          : InputcustomerID && InputcustomerName
            ? inputCustomerIDMatch && inputCustomerNameMatch
            : InputcustomerID && InputDate
              ? inputCustomerIDMatch && inputDateMatch
              : InputcustomerName && InputDate
                ? inputCustomerNameMatch && inputDateMatch
                : InputcustomerID
                  ? inputCustomerIDMatch
                  : InputcustomerName
                    ? inputCustomerNameMatch
                    : InputDate
                      ? inputDateMatch
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
                  <div class="w-1/3 px-2">
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
                  <div class="w-1/3 px-2">
                    <div class="h-12">
                      <div class="mb-4">
                        <form action="" method="get">
                          <label for="InputDate">วันที่</label>
                          <input
                            value={InputDate}
                            onChange={(e) => setInputDate(e.target.value)}
                            type="date"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </form>

                      </div>
                    </div>
                  </div>
                  <div class="w-1/3 px-2">
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

            <div class="font-bold mx-4 mt-8">ประวัติการยกเลิกบิล</div>

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
