'use client';
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

import Image from "next/image";
import Link from "next/link";

import styles from "./sale_check.css";

export default function SaleCheck() {
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
        <title>Sale Check</title>
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
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                          สินค้า
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ค้นหาสินค้า" />
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 px-2">
                    <div class="h-12">
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                          วันที่
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

            <div class="font-bold px-4 pt-8">ตรวจสอบการขายสินค้า</div>
            <div class="flex flex-col m-4">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center text-sm font-light">
                      <thead
                        class="border-b bg-[#777777] font-medium text-white">
                        <tr>
                          <th scope="col" class=" px-6 py-4">#</th>
                          <th scope="col" class=" px-6 py-4">รหัสลูกค้า</th>
                          <th scope="col" class=" px-6 py-4">ชื่อลูกค้า</th>
                          <th scope="col" class=" px-6 py-4">จำนวนที่ซื้อ</th>
                          <th scope="col" class=" px-6 py-4">ยอดซื้อสินค้า</th>
                          <th scope="col" class=" px-6 py-4">ยอดขายสุทธิ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4">1</td>
                          <td class="whitespace-nowrap  px-6 py-4">test</td>
                          <td class="whitespace-nowrap  px-6 py-4">name</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">1000</td>
                          <td class="whitespace-nowrap  px-6 py-4">100</td>
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
