'use client';
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar.js";
import Navbar from "../Navbar.js";

import Image from "next/image";
import Link from "next/link";
import styles from "./product_import_po.css";

// import { useState } from "react";

async function fetchAPI() {

}


export default function Product_import_po() {

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdown1Open((prev) => !prev);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
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
        <title>Product Import Po</title>
      </head>
      <body style={{ width: '100%' }}>

        <Navbar toggleAside={toggleAside} />

        <div className="flex flex-1">
          
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>

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
                            ใบสั้งซื้อ
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="รหัสใบนำเข้า" />
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2 px-2">
                      <div class="h-12">
                        <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            วันที่นำเข้า
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="datePicker" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-4 flex flex-row-reverse">
                  <div class="ps-4">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      รีเซต
                    </button>
                  </div>
                  <div class="ps-4">
                    <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                      <span>ค้นหา</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between mx-4 mt-8">
              <div class="font-bold">ใบสั้งซื้อสินค้า</div>
              <div class="">
                <div class="ps-4">
                  <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>สร้างใบสั่งซื้อใหม่</span>
                  </button>
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
                          <th scope="col" class=" px-6 py-4">รหัสใบสั่งซื้อ</th>
                          <th scope="col" class=" px-6 py-4">วันที่สั่งซื้อ</th>
                          <th scope="col" class=" px-6 py-4">ประเภทการชำระเงิน</th>
                          <th scope="col" class=" px-6 py-4">จำนวน</th>
                          <th scope="col" class=" px-6 py-4">รวมราคา</th>
                          <th scope="col" class=" px-6 py-4">วันที่สร้างรายการ</th>
                          <th scope="col" class=" px-6 py-4">สถานะ</th>
                          <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4">1</td>
                          <td class="whitespace-nowrap  px-6 py-4">C000000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">date</td>
                          <td class="whitespace-nowrap  px-6 py-4">money</td>
                          <td class="whitespace-nowrap  px-6 py-4">1000</td>
                          <td class="whitespace-nowrap  px-6 py-4">10000</td>
                          <td class="whitespace-nowrap  px-6 py-4">date</td>
                          <td class="whitespace-nowrap  px-6 py-4">get</td>
                          <td class="whitespace-nowrap  px-6 py-4 ">
                            <div class="">
                              <button
                                onClick={toggleDropdown1}
                                class="block p-2 bg-white bg-gray-100 rounded-md">
                                <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                              </button>

                              {isDropdown1Open && (
                                <div class="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                                  <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>
                                      <span>แก้ไขข้อมูล</span>
                                    </div>
                                  </a>
                                  <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                      </svg>
                                      <span>ลบข้อมูล</span>
                                    </div>
                                  </a>
                                  {/* Add more dropdown items as needed */}
                                </div>
                              )}

                            </div>
                          </td>
                        </tr>

                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4">1</td>
                          <td class="whitespace-nowrap  px-6 py-4">C000000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">date</td>
                          <td class="whitespace-nowrap  px-6 py-4">money</td>
                          <td class="whitespace-nowrap  px-6 py-4">1000</td>
                          <td class="whitespace-nowrap  px-6 py-4">10000</td>
                          <td class="whitespace-nowrap  px-6 py-4">date</td>
                          <td class="whitespace-nowrap  px-6 py-4">get</td>
                          <td class="whitespace-nowrap  px-6 py-4 ">
                            <div class="">
                              <button
                                onClick={toggleDropdown2}
                                class="block p-2 bg-white bg-gray-100 rounded-md">
                                <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                              </button>

                              {isDropdown2Open && (
                                <div class="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                                  <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>
                                      <span>แก้ไขข้อมูล</span>
                                    </div>
                                  </a>
                                  <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                    <div class="flex items-start p-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                      </svg>
                                      <span>ลบข้อมูล</span>
                                    </div>
                                  </a>
                                  {/* Add more dropdown items as needed */}
                                </div>
                              )}

                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
