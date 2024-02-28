'use client';
import Image from "next/image";
import Link from "next/link";

import styles from "./create_tax_invoice.css";

import { useState, useEffect } from "react";

export default function Create_tax_invoice() {

  return (
    <>
      <head>
        <title>Create Tax Invoice</title>
      </head>
      <body>
        <div className="" style={{ width: '100%' }}>
          <div class="m-4 border-solid border-2 rounded">
            <div class="p-4 bg-[#777777] font-bold text-white">
              รายละเอียดข้อมูล
            </div>

            <div class="p-4">
              <div class="flex -mx-2 mb-6">
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        เลขที่
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="เลขที่" />
                    </div>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        เลือกบิลการขายวันนี้
                      </label>

                      <div className="">
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="w-1/2 m-4">
              <div class="font-bold my-4">ข้อมูลบิลการขาย</div>
              <div class="border-solid border-2 rounded p-4">
                <div class="px-2 py-2">รหัสบิลการขาย :</div>
                <div class="px-2 py-2">วันที่ทำรายการ :</div>
                <div class="px-2 py-2">ประเภทการชำระ :</div>
                <div class="px-2 py-2">รวมราคา :</div>
                <div class="px-2 py-2">ส่วนลดรวม :</div>
                <div class="px-2 py-2">ราคาสุทธิ :</div>
              </div>
            </div>
            <div class="w-1/2 m-4">
              <div class="font-bold my-4">ข้อมูลลูกค้า</div>
              <div class="flex border-solid border-2 rounded p-4">
                <div class="w-1/3">
                  <img className="w-full" src="/logo.jpg" alt="" />
                </div>
                <div class="w-2/3 px-4">
                  <div class="px-2 py-2">รหัสลูกค้า :</div>
                  <div class="px-2 py-2">ชื่อ-นามสกุล :</div>
                  <div class="px-2 py-2">เบอร์โทรศัพท์ :</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between m-4">
            <div class="font-bold mt-4">รายการสินค้า</div>
            <div class="mt-4">ราคาสุทธิ 0</div>
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
                        <th scope="col" class=" px-6 py-4">สินค้า</th>
                        <th scope="col" class=" px-6 py-4">จำนวน</th>
                        <th scope="col" class=" px-6 py-4">ราคารวม</th>
                        <th scope="col" class=" px-6 py-4">ส่วนลด</th>
                        <th scope="col" class=" px-6 py-4">ราคาสุทธิ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">ชื่อสินค้า</td>
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">1000</td>
                        <td class="whitespace-nowrap  px-6 py-4">0</td>
                        <td class="whitespace-nowrap  px-6 py-4">1000</td>
                      </tr>

                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">ชื่อสินค้า</td>
                        <td class="whitespace-nowrap  px-6 py-4">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">1000</td>
                        <td class="whitespace-nowrap  px-6 py-4">0</td>
                        <td class="whitespace-nowrap  px-6 py-4">1000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 flex flex-row-reverse">
            <div class="ps-4">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                ยกเลิก
              </button>
            </div>
            <div class="ps-4">
              <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded">
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
