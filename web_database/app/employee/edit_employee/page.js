'use client';
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";

import Image from "next/image";
import Link from "next/link";
import styles from "./edit_employee.css";

import { useState, useEffect } from "react";

export default function Edit_Employee() {

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
      <body style={{ width: '100%' }}>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>

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
                  <div className="flex">
                    <div className="w-1/2 mr-4">
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสพนักงาน</label>
                      <input type="text" id="name" name="name" placeholder="รหัสพนักงาน"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อ</label>
                      <input type="text" id="name" name="name" placeholder="ชื่อ"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เบอร์โทร</label>
                      <input type="text" id="name" name="name" placeholder="เบอร์โทร"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    </div>
                    <div className="w-1/2">
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสบัตรประชาชน</label>
                      <input type="text" id="name" name="name" placeholder="รหัสบัตประชาชน"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามสกุล</label>
                      <input type="text" id="name" name="name" placeholder="นามสกุล"
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
              <div className="flex">
                <div className="w-1/3 px-4 pb-4">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">วันเกิด</label>
                  <input type="text" id="name" name="name" placeholder="วันเกิด"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="w-1/3 px-4 pb-4">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ตำแหน่ง</label>
                  <input type="text" id="name" name="name" placeholder="ตำแหน่ง"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="w-1/3 px-4 pb-4">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เงินเดือน</label>
                  <input type="text" id="name" name="name" placeholder="เงินเดือน"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
              </div>
              <div className="flex px-4 pb-6">
                <div className="w-1/2 pr-4">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อผู้ใช้</label>
                  <input type="text" id="name" name="name" placeholder="ชื่อผู้ใช้"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="w-1/2">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสผ่าน</label>
                  <input type="text" id="name" name="name" placeholder="รหัสผ่าน"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
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
          </div>
        </div>
      </body>
    </>
  );
}
