'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./sale_history.css";
import Modal from "./test-billcancel";
// import Navbar from "../Navbar";
import Sidebar from "../test_sidebar/page";
// import Confirm_bill_cancellation from "./confirm_bill_cancellation/page"

import { useState, useEffect } from "react";
import axios from 'axios';

export default function SaleHistory() {
  const [billNumber, setBillNumber] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [customer, setCustomer] = useState('');
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [salesData, setSalesData] = useState([]);

  const [filteredSalesData, setFilteredSalesData] = useState([]);

  // กำหนดตัวแปรเก็บข้อมูลที่จะถูกแสดง
  const displayData = searchButtonClicked ? filteredSalesData : salesData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  const toggleDropdown = (index, action) => {
    setSalesData((prevSalesData) => {
      const updatedSalesData = [...prevSalesData];
      updatedSalesData[index] = {
        ...updatedSalesData[index],
        isDropdownOpen: !updatedSalesData[index]?.isDropdownOpen,
      };
  
      // Get the Item_ItemId of the selected row
      const canceledItemId = updatedSalesData[index]?.Item_ItemId;
  
      // Open the modal only when the "ยกเลิกรายการ" button is clicked
      if (action === 'cancel') {
        setIsModalOpen(canceledItemId);
      } else {
        setIsModalOpen(false);
      }
  
      return updatedSalesData;
    });
  };
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.199.120.125:8080/admin/show_all_item');
        const salesWithData = response.data.Fertilizer.map(sale => ({ ...sale, isDropdownOpen: false }));
        setSalesData(salesWithData || []);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);

  const filterSalesData = () => {
    // Only filter if the user has clicked the Search button
    if (searchButtonClicked) {
      const filteredData = salesData.filter(sale => {
        const billNumberMatch = !billNumber || sale.Item_ItemId.includes(billNumber);
        const dateMatch = !transactionDate || sale.transactionDate.includes(transactionDate);
        const customerMatch = !customer || sale.Item_ItemId.includes(customer);

        if (billNumber && transactionDate && customer) {
          return billNumberMatch && dateMatch && customerMatch;
        } else if (billNumber && customer) {
          return billNumberMatch && customerMatch;
        } else if (transactionDate && customer) {
          return dateMatch && customerMatch;
        } else if (billNumber && transactionDate) {
          return billNumberMatch && dateMatch;
        } else if (billNumber) {
          return billNumberMatch;
        } else if (transactionDate) {
          return dateMatch;
        } else if (customer) {
          return customerMatch;
        }

        return true; // No search criteria, so include all data
      });

      setFilteredSalesData(filteredData);
    }
  };

  useEffect(() => {
    filterSalesData();
  }, [searchButtonClicked]);

  const handleReset = () => {
    // Reset input values
    setBillNumber('');
    setTransactionDate('');
    setCustomer('');

    // Clear the filtered data
    setFilteredSalesData([]);

    // Set searchButtonClicked to false to display all data
    setSearchButtonClicked(false);
  };


  return (
    <>
      <body>
        <Sidebar />
        <div className="" style={{ width: '100%' }}>

          <div class="m-4 border-solid border-2 rounded">
            <div class="p-4 bg-[#777777] font-bold text-white">
              ค้นหาข้อมูล
            </div>

            <div class="p-4">
              <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        เลขที่บิล
                      </label>
                      <input
                        value={billNumber}
                        onChange={(e) => setBillNumber(e.target.value)}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="กรอกเลขที่บิล" />
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                        วันที่
                      </label>
                      <input
                        value={transactionDate}
                        onChange={(e) => setTransactionDate(e.target.value)}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="date" />
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="customer">
                        ลูกค้า
                      </label>
                      <input
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customer" type="text" placeholder="กรอกชื่อลูกค้า" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 flex flex-row-reverse">
              <div class="ps-4">
                <button
                  onClick={handleReset}
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
                  class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                  <span>ค้นหา</span>
                </button>

              </div>
            </div>
          </div>

          <div class="flex justify-between mx-4 mt-8">
            <div class="font-bold">ประวัติการขายสินค้า</div>
          </div>

          <div class="flex flex-col m-4">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead
                      class="border-b bg-[#777777] font-medium text-white">
                      <tr>
                        <th scope="col" class=" px-6 py-4">#</th>
                        <th scope="col" class=" px-6 py-4">เลขที่บิล</th>
                        <th scope="col" class=" px-6 py-4">วันที่ทำรายการ</th>
                        <th scope="col" class=" px-6 py-4">ยอดขาย</th>
                        <th scope="col" class=" px-6 py-4">พนักงาน</th>
                        <th scope="col" class=" px-6 py-4">ลูกค้า</th>
                        <th scope="col" class=" px-6 py-4">หมายเหตุ</th>
                        <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayData.map((sale, index) => (
                        <tr class="border-b dark:border-neutral-500" key={index}>
                          <td class="whitespace-nowrap  px-6 py-4">{index + 1}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.fertilizerName}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.Item_ItemId}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.fertilizerPrice}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.fertilizerName}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.fertilizerName}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.fertilizerName}</td>
                          <td class="whitespace-nowrap  px-6 py-4 ">
                            <div class="direc">
                              <button id="dots"
                                onClick={() => toggleDropdown(index)}
                                class="block p-2 bg-white bg-gray-100 rounded-md">
                                <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                              </button>

                              {sale.isDropdownOpen && (
                                <div class="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                                  <button
                                    class="w-full block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 mr-1">
                                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                                      <span>รายละเอียดบิล</span>
                                    </div>
                                  </button>
                                  <button id="cancle"
                                    onClick={() => toggleDropdown(index, 'cancel')}
                                    class="w-full block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                      </svg>
                                      <span>ยกเลิกรายการ</span>
                                    </div>
                                  </button>
                                </div>
                              )}

                            </div>
                          </td>
                        </tr>
                      ))}
                      {salesData.length === 0 && (
                        <tr>
                          <td colspan="8" class="text-center py-4">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && <Modal itemId={isModalOpen} />}
      </body>
    </>
  );

}