'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./craft_stock.css";
import { useState } from "react";
export default function CraftStock() {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdown1Open((prev) => !prev);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
  };

  return (
    <>
      <head>
        <title>Craft Stock</title>
      </head>
      <body>
        <div className="">
          <div className="box-1 mt-10">
            <div className="border mx-5 h-80">
              <div className="box-search pe-4">
                <div className="relative mb-2 mt-4 px-10 flex flex-wrap items-stretch">
                  <label for="name" className="flex items-center w-40 mr-4 text-left text-black font-bold text-lg">เพิ่มปุ๋ยรอการผสม</label>
                  <input type="text"
                    className="w-20 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                    placeholder="พิมพ์ชื่อสินค้าที่ต้องการค้นหา"
                    name="amount"
                  />
                  <div className="inline-block relative">
                    <button className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded-r inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                      <span>ค้นหา</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="box-table overflow-auto h-64 w-full">
                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 sm:px-4">
                      <div className="overflow-hidden">
                        <table className="w-full text-center text-sm font-light">
                          <thead className="border-b bg-[#777777] font-medium text-white">
                            <tr>
                              <th scope="col" className=" px-6 py-4">#</th>
                              <th scope="col" className=" px-6 py-4">รหัสสินค้า</th>
                              <th scope="col" className=" px-6 py-4">ชื่อสินค้า</th>
                              <th scope="col" className=" px-6 py-4">จำนวน</th>
                              <th scope="col" className=" px-6 py-4">จำนวนคงเหลือในคลัง</th>
                              <th scope="col" className=" px-6 py-4">คำสั่ง</th>
                            </tr>
                          </thead>
                          <tbody className="overflow-auto">
                            <tr className="border dark:border-neutral-500">
                              <td className="whitespace-nowrap  px-6 py-4">1</td>
                              <td className="whitespace-nowrap  px-6 py-4">C000000001</td>
                              <td className="whitespace-nowrap  px-6 py-4">ปุ๋ย K</td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                <div className="relative mb-2 mt-2 flex flex-wrap items-stretch">
                                  {/* <label for="name" className="flex items-center w-40 mr-0 text-left text-black">ปริมาณ</label> */}
                                  <input type="number"
                                    className="w-24 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                    placeholder="กรอกปริมาณ / น้ำหนัก"
                                    name="amount"
                                  />
                                  <div className="inline-block relative">
                                    <select className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                                      <option>กิโลกรัม</option>
                                      <option>กรัม</option>
                                      <option>ขีด</option>
                                      <option>ปอนด์</option>
                                      <option>ออนซ์</option>
                                      <option>ลิตร</option>
                                      <option>มิลลิลิตร</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <input type="number"
                                  className="w-32 relative border rounded-l-md border-[#e0e0e0] bg-white text-center py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded"
                                  placeholder="จำนวนคงเหลือ"
                                  name="price"
                                  value={1000}
                                  disabled
                                />
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4 ">
                                <button>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className="border dark:border-neutral-500">
                              <td className="whitespace-nowrap  px-6 py-4">1</td>
                              <td className="whitespace-nowrap  px-6 py-4">C000000001</td>
                              <td className="whitespace-nowrap  px-6 py-4">ปุ๋ย K</td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                <div className="relative mb-2 mt-2 flex flex-wrap items-stretch">
                                  {/* <label for="name" className="flex items-center w-40 mr-0 text-left text-black">ปริมาณ</label> */}
                                  <input type="number"
                                    className="w-24 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                    placeholder="กรอกปริมาณ / น้ำหนัก"
                                    name="amount"
                                  />
                                  <div className="inline-block relative">
                                    <select className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                                      <option>กิโลกรัม</option>
                                      <option>กรัม</option>
                                      <option>ขีด</option>
                                      <option>ปอนด์</option>
                                      <option>ออนซ์</option>
                                      <option>ลิตร</option>
                                      <option>มิลลิลิตร</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <input type="number"
                                  className="w-32 relative border rounded-l-md border-[#e0e0e0] bg-white text-center py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded"
                                  placeholder="จำนวนคงเหลือ"
                                  name="price"
                                  value={1000}
                                  disabled
                                />
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4 ">
                                <button>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className="border dark:border-neutral-500">
                              <td className="whitespace-nowrap  px-6 py-4">1</td>
                              <td className="whitespace-nowrap  px-6 py-4">C000000001</td>
                              <td className="whitespace-nowrap  px-6 py-4">ปุ๋ย K</td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                <div className="relative mb-2 mt-2 flex flex-wrap items-stretch">
                                  {/* <label for="name" className="flex items-center w-40 mr-0 text-left text-black">ปริมาณ</label> */}
                                  <input type="number"
                                    className="w-24 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                    placeholder="กรอกปริมาณ / น้ำหนัก"
                                    name="amount"
                                  />
                                  <div className="inline-block relative">
                                    <select className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                                      <option>กิโลกรัม</option>
                                      <option>กรัม</option>
                                      <option>ขีด</option>
                                      <option>ปอนด์</option>
                                      <option>ออนซ์</option>
                                      <option>ลิตร</option>
                                      <option>มิลลิลิตร</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <input type="number"
                                  className="w-32 relative border rounded-l-md border-[#e0e0e0] bg-white text-center py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded"
                                  placeholder="จำนวนคงเหลือ"
                                  name="price"
                                  value={1000}
                                  disabled
                                />
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4 ">
                                <button>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
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
            <div className="p-4 mr-10 flex flex-row-reverse">
              <div className="ps-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  ยกเลิก
                </button>
              </div>
              <div className="ps-4">
                <button className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded">
                  บันทึก
                </button>
              </div>
            </div>
          </div>

          <div className="text-start ml-10 mb-2">
            <p className="font-bold text-lg">จำนวนปุ๋ยรอการผสมทั้งหมด</p>
            <p>Stock : <span className="text-green-400">839</span> ชิ้น </p>
          </div>

          <div className="box-2 h-80 overflow-auto mx-6">
            <div class="flex flex-col mt-5 mx-8">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-4">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center text-sm font-light border">
                      <thead
                        class="border-b bg-[#777777] font-medium text-white">
                        <tr>
                          <th scope="col" class=" px-6 py-4">#</th>
                          <th scope="col" class=" px-6 py-4">รหัสสินค้า</th>
                          <th scope="col" class=" px-6 py-4">ชื่อสินค้า</th>
                          <th scope="col" class=" px-6 py-4">จำนวนคงเหลือ(กระสอบ)</th>
                          <th scope="col" class=" px-6 py-4">จำนวนคงเหลือ(กิโลกรัม)</th>
                          <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap  px-6 py-4">1</td>
                          <td class="whitespace-nowrap  px-6 py-4">F670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 46-0-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">480</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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
                          <td class="whitespace-nowrap  px-6 py-4">2</td>
                          <td class="whitespace-nowrap  px-6 py-4">A670000001</td>
                          <td class="whitespace-nowrap  px-6 py-4">ปุ๋ยเคมี 0-46-0</td>
                          <td class="whitespace-nowrap  px-6 py-4">10</td>
                          <td class="whitespace-nowrap  px-6 py-4">440</td>
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

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 mr-10 flex flex-row-reverse">
            <div className="ps-4">
              <button className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded">
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
