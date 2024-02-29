'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./add_customer.css";

import { useState, useEffect } from "react";

export default function Add_customer() {

  //image
  const [selectedImage, setSelectedImage] = useState(null);  // State to hold selected image

  function thisFileUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  }

  return (
    <>
      <body>
        <div class="m-4 border-solid border-2 rounded">
          <div class="p-4 bg-[#777777] font-bold text-white">
            ข้อมูลทั่วไป
          </div>
          <div className="flex">
            <div className="w-1/4 m-4">
              <div className="block">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="photo product"
                    className="w-40 h-40"
                  />
                ) : (
                  <img
                    src="/logo.jpg"
                    alt="default photo"
                    className="w-40 h-40"
                  />
                )}
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  onChange={thisFileUpload}
                  className="py-2 focus:border-green-400
                            text-gray-600 placeholder-gray-400
                            outline-none"
                  style={{ display: "none" }}
                />
                <button
                  id="button"
                  name="button"
                  value="Upload"
                  onClick={() => document.getElementById("file").click()}
                  className="py-2 px-6 mt-2 w-40 text-white rounded-md"
                  style={{ background: "#00A84F" }}
                >
                  เลือกรูปภาพ
                </button>
              </div>
            </div>
            <div className="w-2/3 m-4">
              <div>
                <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสลูกค้า</label>
                <input type="text" id="name" name="name" placeholder="รหัสลูกค้า"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-4">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อ</label>
                  <input type="text" id="name" name="name" placeholder="ชื่อ"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามสกุล</label>
                  <input type="text" id="name" name="name" placeholder="นามสกุล"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="w-1/2">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เบอร์โทร</label>
                  <input type="text" id="name" name="name" placeholder="เบอร์โทร"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">อีเมล</label>
                  <input type="text" id="name" name="name" placeholder="อีเมล"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 border-solid border-2 rounded">
          <div class="p-4 bg-[#777777] font-bold text-white">
            ข้อมูลที่อยู่
          </div>
          <div className="p-4 flex">
            <div className="w-1/2 mr-4">
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เลขที่</label>
              <input type="text" id="name" name="name" placeholder="เลขที่"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ตำบล/แขวง</label>
              <input type="text" id="name" name="name" placeholder="ตำบล/แขวง"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">จังหวัด</label>
              <input type="text" id="name" name="name" placeholder="จังหวัด"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
            </div>
            <div className="w-1/2">
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">หมู่ที่</label>
              <input type="text" id="name" name="name" placeholder="หมู่ที่"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">อำเภอ/เขต</label>
              <input type="text" id="name" name="name" placeholder="อำเภอ/เขต"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสไปรษณีย์</label>
              <input type="text" id="name" name="name" placeholder="รหัสไปรษณีย์"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
            </div>
          </div>
        </div>

        <div class="m-4 border-solid border-2 rounded">
          <div class="p-4 bg-[#777777] font-bold text-white">
            ข้อมูลภาษี
          </div>
          <div className="p-4">
            <div class="relative w-full">
              <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-6 pr-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option disabled selected>เลือกข้อมูล</option>
                <option>มีการจดข้อมูลภาษี</option>
                <option>ไม่มีการจดข้อมูลภาษี</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>

            <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามผู้เสียภาษี</label>
            <input type="text" id="name" name="name" placeholder="กรอกชื่อนามผู้เสียภาษี"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
            <label for="name" className="inline-block w-50 mr-6 text-left 
                            text-black">หมายเลขประจำตัวผู้เสียภาษี</label>
            <input type="text" id="name" name="name" placeholder="กรอกชื่อหมายเลขประจำตัวผู้เสียภาษี"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
            <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เลขบัตรประชาชน</label>
            <input type="text" id="name" name="name" placeholder="กรอกเลขบัตรประชาชน"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
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
              บันทึก
            </button>
          </div>
        </div>
      </body>

    </>
  );
}
