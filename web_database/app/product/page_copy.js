'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./product.css";

import { useState, useEffect } from "react";
import axios from 'axios';

export default function Product() {

  //เพิ่มสินค้าใหม่
  const [isDropdownAdd, setIsDropdownAdd] = useState(false);
  const toggleDropdownAdd = () => {
    setIsDropdownAdd((prev) => !prev);
  };

  //get Data Api
  const [salesData, setSalesData] = useState([]);
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
        setSalesData(allData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };


    fetchData();
  }, []);

  //filter search
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [item_id, setItem_id] = useState('');
  const [item_name, setItem_name] = useState('');
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const filterSalesData = () => {
    // Only filter if the user has clicked the Search button
    if (searchButtonClicked) {
      const filteredData = salesData.filter(sale => {
        const item_idMatch = !item_id || sale.Item_ItemId.includes(item_id);
        const item_nameMatch = !item_name || (
          (sale.fertilizerName && sale.fertilizerName.includes(item_name)) ||
          (sale.ChemicalName && sale.ChemicalName.includes(item_name)) ||
          (sale.OtherName && sale.OtherName.includes(item_name)) ||
          (sale.Craft_fertilizerName && sale.Craft_fertilizerName.includes(item_name))
        );

        if (item_id && item_name) {
          return item_idMatch && item_nameMatch;
        } else if (item_id) {
          return item_idMatch;
        } else if (item_name) {
          return item_nameMatch;
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
    setItem_id('');
    setItem_name('');

    // Clear the filtered data
    setFilteredSalesData([]);

    // Set searchButtonClicked to false to display all data
    setSearchButtonClicked(false);
  };

  //วางไว้หลัง fetsh ค่า และ filter
  const displayData = searchButtonClicked ? filteredSalesData : salesData;

  //ปุ่ม kbub
  const toggleDropdown = (index, action) => {
    setSalesData((prevSalesData) => {
      const updatedSalesData = [...prevSalesData];
      updatedSalesData[index] = {
        ...updatedSalesData[index],
        isDropdownOpen: !updatedSalesData[index]?.isDropdownOpen,
      };

      return updatedSalesData;
    });
  };

  //delete item
  const handleCancelItem = (itemId) => {
    // ทำสิ่งที่คุณต้องการก่อนส่ง HTTP request เช่น แสดง confirm modal หรือตรวจสอบการกรอกข้อมูล
    console.log(itemId);
    // const response = await axios.post(`${ process.env.NEXT_PUBLIC_IP } / delete_item`,
    //   {
    //     itemId,
    //   },
    //   {
    //     withCredentials: true,
    //   });
  };


  return (
    <>
      <head>
        <title>Product</title>
      </head>
      <body>
        <div className="">
          <div class="m-4 border-solid border-2 rounded">
            <div class="p-4 bg-[#777777] font-bold text-white">
              ค้นหาข้อมูล
            </div>

            <div class="p-4">
              <div class="flex -mx-2">
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        รหัสสินค้า
                      </label>
                      <input
                        value={item_id}
                        onChange={(e) => setItem_id(e.target.value)}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="รหัสสินค้า" />
                    </div>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        ชื่อสินค้า
                      </label>
                      <input
                        value={item_name}
                        onChange={(e) => setItem_name(e.target.value)}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ชื่อสินค้า" />
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
                  class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                  <span>ค้นหา</span>
                </button>
              </div>
            </div>
          </div>

          <div class="font-bold mx-4 mt-8">สินค้าทั้งหมด</div>
          <div class="mx-4 mt-2">Stock : <span className="text-[#00A84F]">0</span> ชิ้น</div>

          <div class="flex justify-between mx-4 mt-4">
            <div class="inline-block relative w-fit">
              <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-6 pr-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option disabled selected>เลือกหมวดหมู่</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
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
                  <table class="min-w-full text-center text-sm font-light">
                    <thead
                      class="border-b bg-[#777777] font-medium text-white">
                      <tr>
                        <th scope="col" class=" px-6 py-4">#</th>
                        <th scope="col" class=" px-6 py-4">รหัสสินค้า</th>
                        <th scope="col" class=" px-6 py-4">ชื่อสินค้า</th>
                        <th scope="col" class=" px-6 py-4">ประเภท</th>
                        <th scope="col" class=" px-6 py-4">ราคาที่ขาย</th>
                        <th scope="col" class=" px-6 py-4">จำนวน</th>
                        <th scope="col" class=" px-6 py-4">หน่วย</th>
                        <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayData.map((sale, index) => (
                        <tr class="border-b dark:border-neutral-500" key={index}>
                          <td class="whitespace-nowrap  px-6 py-4">{index + 1}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{sale.Item_ItemId}</td>
                          {sale.ItemType === "Fertilizer" && (
                            <>
                              <td className="whitespace-nowrap px-6 py-4">{sale.fertilizerName}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.fertilizerPrice}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemType}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemAmount}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.UnitName}</td>
                            </>
                          )}
                          {sale.ItemType === "Chemicals" && (
                            <>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ChemicalName}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ChemicalPrice}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemType}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemAmount}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.UnitName}</td>
                            </>
                          )}
                          {sale.ItemType === "Craft" && (
                            <>
                              <td className="whitespace-nowrap px-6 py-4">{sale.Craft_fertilizerName}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.Craft_fertilizerPrice}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemType}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemAmount}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.UnitName}</td>
                            </>
                          )}
                          {sale.ItemType === "Other" && (
                            <>
                              <td className="whitespace-nowrap px-6 py-4">{sale.OtherName}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.OtherPrice}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemType}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.ItemAmount}</td>
                              <td className="whitespace-nowrap px-6 py-4">{sale.UnitName}</td>
                            </>
                          )}
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
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>
                                      <span>แก้ไขข้อมูล</span>
                                    </div>
                                  </button>
                                  <button id="cancle"
                                    onClick={() => handleCancelItem(sale.Item_ItemId)}
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

      </body>
    </>
  );
}
