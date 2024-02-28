'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./tax_invoice.css";

import { useState } from "react";

export default function tax_invoice() {

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
      <body>
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
                        เลขที่
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="เลขที่" />
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

          <div class="font-bold mx-4 mt-8">ใบกำกับภาษีเต็มรูปแบบ</div>

          <div class="flex justify-between mx-4 mt-4">
            <div class="inline-block relative w-fit">
              <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-6 pr-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option selected>ทั้งหมด</option>
                <option>รอดำเนินการ</option>
                <option>ดำเนินการเรียบร้อย</option>
                <option>ข้อมูลถูกยกเลิก</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>

            <div class="">
              <div class="ps-4">
                <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>สร้างใบกำกับาษีเต็มรูปแบบ</span>
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
                        <th scope="col" class=" px-6 py-4">เลขที่</th>
                        <th scope="col" class=" px-6 py-4">ลงวันที่</th>
                        <th scope="col" class=" px-6 py-4">ลูกค้า</th>
                        <th scope="col" class=" px-6 py-4">รวมราคา</th>
                        <th scope="col" class=" px-6 py-4">สถานะเอกสาร</th>
                        <th scope="col" class=" px-6 py-4">ปรับปรุงข้อมูล</th>
                        <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">เลขที่</td>
                        <td class="whitespace-nowrap  px-6 py-4">วันที่</td>
                        <td class="whitespace-nowrap  px-6 py-4">name</td>
                        <td class="whitespace-nowrap  px-6 py-4">0000.00</td>
                        <td class="whitespace-nowrap  px-6 py-4">ดำเนินการเรียบร้อย</td>
                        <td class="whitespace-nowrap  px-6 py-4">วันที่ เวลา</td>
                        <td class="whitespace-nowrap  px-6 py-4 ">
                          <div class="">
                            <button
                              onClick={toggleDropdown1}
                              class="block p-2 bg-white bg-gray-100 rounded-md">
                              <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                            </button>

                            {isDropdown1Open && (
                              <div class="absolute mt-2 right-8 w-auto bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                                <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                  <div class="flex items-start p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <span>ดูข้อมูล</span>
                                  </div>
                                </a>
                                <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                                  <div class="flex items-start p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                                    </svg>
                                    <span>พิมพ์ใบกำกับภาษีเต็มรูปแบบ</span>
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
      </body>
    </>
  );

}