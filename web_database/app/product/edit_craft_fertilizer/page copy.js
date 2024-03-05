"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import '../../tailwind.css';
const Tsidebar = () => {
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
  const [asideVisible, setAsideVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    venta: false,
    resumen: false,
    financiero: false,
    stock: false,
    clientes: false,
  });
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
  };

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


  return (
    <>
      <head>
        <title>Edit Craft Fertilizer</title>
      </head>
      <body>
        <div className="flex flex-col h-screen">
          <Navbar toggleAside={toggleAside} />
          <div className="flex flex-1">
            <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
            <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
              <h2 className="font-bold text-xl mb-5">ข้อมูลปุ๋ย</h2>
              <form action="#" method="post">
                <div className="flex items-start mb-5">
                  <label
                    for="number"
                    className="inline-block w-40 mr-6 text-left text-black"
                  >
                    ภาพสินค้า
                  </label>
                  <div className="mb-5 block mx-auto">
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
                <div className="flex items-center mb-5">
                  <label for="name" className="inline-block w-40 mr-6 text-left text-black">
                    รหัสสินค้า
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="กรอกรหัสสินค้า"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base  outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="flex items-center mb-5">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อปุ๋ย</label>
                  <input type="text" id="name" name="name" placeholder="กรอกชื่อปุ๋ย"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="flex items-center mb-5">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อสูตรปุ๋ย</label>
                  <input type="text" id="name" name="name" placeholder="กรอกสูตรปุ๋ย"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="flex items-center mb-5">
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ประเภทของปุ๋ย</label>
                  <input type="text" id="name" name="name" placeholder="กรอกประเภทของปุ๋ย"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="flex items-center mb-5">
                  <label for="number" className="inline-block w-40 mr-6 text-left 
                            text-black">ราคาขาย</label>
                  <input type="number" id="number" name="number" placeholder="กรอกราคาขาย"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md
          "/>
                </div>
                <div className="flex items-center mb-5">
                  <label for="name" class="inline-block w-40 mr-6 text-left 
                            text-black">หน่วยนับ</label>
                  <input type="text" id="name" name="name" placeholder="กรอกหน่วยนับ"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
                <div className="relative mb-4 flex flex-wrap items-stretch">
                  <label for="name" className="flex items-center w-40 mr-0 text-left 
                            text-black">ปริมาณ</label>
                  <input type="number"
                    className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                    placeholder="กรอกปริมาณ / น้ำหนัก"
                  />
                  <div className="inline-block relative">
                    <select
                      className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
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

                <h2 className="font-bold text-xl mb-5">สูตรการผสมปุ๋ย</h2>
                <div class="flex items-center mb-5">
                  <label for="name" class="inline-block w-40 text-left mr-6
                            text-black">แม่ปุ๋ยตัวที่ 1</label>
                  <div class="inline-block relative w-full">
                    <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option disabled selected>เลือกแม่ปุ๋ยตัวที่ 1</option>
                      <option>ปุ๋ยยูเรีย 46-0-0</option>
                      <option>ปุ๋ยยูเรีย 0-46-0</option>
                      <option>ปุ๋ยยูเรีย 0-0-46</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div class="relative mb-4 flex flex-wrap items-stretch">
                  <label for="name" class="flex items-center w-40 mr-0 text-left 
                            text-black">ปริมาณ</label>
                  <div className="w-40 flex">
                    <input type="number"
                      class="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                      placeholder="กรอกปริมาณ"
                    />
                    <div className="inline-block relative">
                      <select
                        class="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base  outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option>กิโลกรัม</option>
                        <option>กรัม</option>
                        <option>ขีด</option>
                        <option>ปอนด์</option>
                        <option>ออนซ์</option>
                        <option>ลิตร</option>
                        <option>มิลลิลิตร</option>
                      </select>
                      {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div> */}
                    </div>
                  </div>

                </div>
                <div class="flex items-center mb-5">
                  <label for="name" class="inline-block w-40 text-left mr-6
                            text-black">แม่ปุ๋ยตัวที่ 2</label>
                  <div class="inline-block relative w-full">
                    <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option disabled selected>เลือกแม่ปุ๋ยตัวที่ 2</option>
                      <option>ปุ๋ยยูเรีย 46-0-0</option>
                      <option>ปุ๋ยยูเรีย 0-46-0</option>
                      <option>ปุ๋ยยูเรีย 0-0-46</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div class="relative mb-4 flex flex-wrap items-stretch">
                  <label for="name" class="flex items-center w-40 mr-0 text-left 
                            text-black">ปริมาณ</label>
                  <div className="w-40 flex">
                    <input type="number"
                      class="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                      placeholder="กรอกปริมาณ"
                    />
                    <div className="inline-block relative">
                      <select
                        class="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option>กิโลกรัม</option>
                        <option>กรัม</option>
                        <option>ขีด</option>
                        <option>ปอนด์</option>
                        <option>ออนซ์</option>
                        <option>ลิตร</option>
                        <option>มิลลิลิตร</option>
                      </select>
                      {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div> */}
                    </div>
                  </div>

                </div>
                <div class="flex items-center mb-5">
                  <label for="name" class="inline-block w-40 text-left mr-6
                            text-black">แม่ปุ๋ยตัวที่ 3</label>
                  <div class="inline-block relative w-full">
                    <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option disabled selected>เลือกแม่ปุ๋ยตัวที่ 3</option>
                      <option>ปุ๋ยยูเรีย 46-0-0</option>
                      <option>ปุ๋ยยูเรีย 0-46-0</option>
                      <option>ปุ๋ยยูเรีย 0-0-46</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div class="relative mb-4 flex flex-wrap items-stretch">
                  <label for="name" class="flex items-center w-40 mr-0 text-left 
                            text-black">ปริมาณ</label>
                  <div className="w-40 flex">
                    <input type="number"
                      class="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                      placeholder="กรอกปริมาณ"
                    />
                    <div className="inline-block relative">
                      <select
                        class="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option>กิโลกรัม</option>
                        <option>กรัม</option>
                        <option>ขีด</option>
                        <option>ปอนด์</option>
                        <option>ออนซ์</option>
                        <option>ลิตร</option>
                        <option>มิลลิลิตร</option>
                      </select>
                      {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div> */}
                    </div>
                  </div>

                </div>
                <div class="text-right mt-10">
                  <button class="py-2 px-6 text-white rounded-md" style={{ background: "#00A84F" }}>บันทึก</button>
                  <button class="py-2 px-6 ms-4 text-black rounded-md" style={{ background: "#D9D9D9" }}>ยกเลิก</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Tsidebar;
