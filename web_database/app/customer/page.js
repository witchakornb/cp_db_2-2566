'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./customer.css";

import { useState, useEffect } from "react";

export default function Customer() {

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdown1Open((prev) => !prev);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
  };

  //search
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");

  const toggleDropdown3 = () => {
    setIsOpen1((prev) => !prev);
  };

  const toggleDropdown4 = () => {
    setIsOpen2((prev) => !prev);
  };

  const handleInputChange1 = (event) => {
    setSearchTerm1(event.target.value.toLowerCase());
  };

  const handleInputChange2 = (event) => {
    setSearchTerm2(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const items = document.querySelectorAll('#dropdown-menu1 a');

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm1) ? 'block' : 'none';
    });
  }, [searchTerm1]);

  useEffect(() => {
    const items = document.querySelectorAll('#dropdown-menu2 a');

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm2) ? 'block' : 'none';
    });
  }, [searchTerm2]);

  useEffect(() => {
    toggleDropdown1(); // Set initial state for dropdown 1
  }, []);

  useEffect(() => {
    toggleDropdown2(); // Set initial state for dropdown 2
  }, []);

  return (
    <>
      <head>
        <title>Edit Customer</title>
      </head>
      <body>
        <div className="" style={{ width: '100%' }}>

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
                        รหัสลูกค้า
                      </label>
                      {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="รหัสลูกค้า" /> */}
                      <div className="group">
                        <button id="dropdown-button" className="flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" onClick={toggleDropdown3} >
                          <span className="mr-2">รหัสลูกค้า</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div id="dropdown-menu" className={`${isOpen1 ? "" : "hidden"} absolute w-1/3 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
                          <input id="search-input" className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none" type="text" placeholder="ค้นหารหัสลูกค้า" autoComplete="off" onChange={handleInputChange1} />
                          <option>Select option</option>
                          <option>Name</option>
                          <option>Email address</option>
                          <option>Description</option>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        ชื่อลูกค้า
                      </label>
                      {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ชื่อลูกค้า" /> */}
                      <div className="group">
                        <button id="dropdown-button" className="flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" onClick={toggleDropdown4} >
                          <span className="mr-2">ชื่อลูกค้า</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div id="dropdown-menu" className={`${isOpen2 ? "" : "hidden"} absolute w-1/3 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
                          <input id="search-input" className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none" type="text" placeholder="ค้นหาชื่อลูกค้า" autoComplete="off" onChange={handleInputChange2} />
                          <option>Select option</option>
                          <option>Name</option>
                          <option>Email address</option>
                          <option>Description</option>
                        </div>
                      </div>
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

          <div class="flex justify-between mx-4 mt-8">
            <div class="font-bold">ข้อมูลลูกค้า</div>
            <div class="">
              <div class="ps-4">
                <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>เพิ่มลูกค้าใหม่</span>
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
                        <th scope="col" class=" px-6 py-4">รหัสลูกค้า</th>
                        <th scope="col" class=" px-6 py-4">ชื่อ</th>
                        <th scope="col" class=" px-6 py-4">นามสกุล</th>
                        <th scope="col" class=" px-6 py-4">เบอร์โทร</th>
                        <th scope="col" class=" px-6 py-4">ที่อยู่</th>
                        <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">test</td>
                        <td class="whitespace-nowrap  px-6 py-4">name</td>
                        <td class="whitespace-nowrap  px-6 py-4">lastname</td>
                        <td class="whitespace-nowrap  px-6 py-4">phone</td>
                        <td class="whitespace-nowrap  px-6 py-4">role</td>
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
                        <td class="whitespace-nowrap  px-6 py-4">test</td>
                        <td class="whitespace-nowrap  px-6 py-4">name</td>
                        <td class="whitespace-nowrap  px-6 py-4">lastname</td>
                        <td class="whitespace-nowrap  px-6 py-4">phone</td>
                        <td class="whitespace-nowrap  px-6 py-4">role</td>
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
      </body>
    </>
  );
}
