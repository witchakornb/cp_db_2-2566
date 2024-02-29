'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import '../../tailwind.css';
import { useState,useEffect } from "react"; 

export default function Sell() {
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

  const isCurrentPage = (path) => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      return window.location.pathname === path;
    }
    return false;
  };

  const getPageName = () => {
    const isClient = typeof window !== 'undefined';

    if (isClient) {
      const path = window.location.pathname;
      switch (path) {
        case '/sale':
          return 'ขายสินค้า';
        case '/sale/product_detail':
          return 'ขายสินค้า';
        case '/sale/charge_money':
          return 'ขายสินค้า';
        case '/sale_history':
          return 'ประวัติการขายสินค้า';
        case '/sale_history/bill_details':
          return 'ประวัติการขายสินค้า';
        case '/sale_history/bill_details/receipt':
          return 'ประวัติการขายสินค้า';
        case '/bill_cancellation_history':
          return 'ประวัติการยกเลิกบิล';
        case '/sale_history/confirm_bill_cancellation':
          return 'ประวัติการยกเลิกบิล';
        case '/bill_cancellation_history/confirm_bill_recovery':
          return 'ประวัติการยกเลิกบิล';
        case '/sale_overview':
          return 'ภาพรวมการขาย';
        case '/sale_report':
          return 'รายงานการขาย';
        case '/tax_invoice':
          return 'ออกใบกำกับภาษี';
        case '/tax_invoice/create_tax_invoice':
          return 'ออกใบกำกับภาษี';
        case '/tax_invoice/create_tax_invoice/print_tax_invoice':
          return 'ออกใบกำกับภาษี';
        case '/sale':
          return 'ขายสินค้า';
        case '/sale/sale_out':
          return 'ขายสินค้า';
        case '/sale/charge_money/success_charge':
          return 'ขายสินค้า';
        case '/product':
          return 'สินค้าทั้งหมด';
        case '/product/add_fertilizer':
          return 'สินค้าทั้งหมด';
        case '/product/add_craft_fertilizer':
          return 'สินค้าทั้งหมด';
        case '/product/add_chemical':
          return 'สินค้าทั้งหมด';
        case '/product/add_other':
          return 'สินค้าทั้งหมด';
        case '/craft_stock':
          return 'ปุ๋ยรอการผสม';
        case '/sale_check':
          return 'ตรวจสอบการขาย';
        case '/product_import':
          return 'ใบนำเข้าสินค้า';
        case '/product_import/create_product_import':
          return 'ใบนำเข้าสินค้า';
        case '/customer':
          return 'ข้อมูลลูกค้า';
        case '/customer/add_customer':
          return 'ข้อมูลลูกค้า';
        case '/customer/edit_customer':
          return 'ข้อมูลลูกค้า';
        case '/employee':
          return 'ข้อมูลพนักงาน';
        case '/employee/add_employee':
          return 'ข้อมูลพนักงาน';
        case '/employee/edit_employee':
          return 'ข้อมูลพนักงาน';
        default:
          return 'Unknown Page';
      }
    }
    return 'Unknown Page';
  };
  return (
    <>
      <head>
        <title>Add Chemical</title>
      </head>
      <body>
      <Navbar toggleAside={toggleAside} />
      <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
          <h2 className="font-bold text-xl mb-5">ข้อมูลเคมีภัณฑ์</h2>
          <form action="#">
            <div class="flex items-start mb-5">
              <label
                for="number"
                class="inline-block w-40 mr-6 text-left text-black"
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
                  class="py-2 px-6 mt-2 w-40 text-white rounded-md"
                  style={{ background: "#00A84F" }}
                >
                  เลือกรูปภาพ
                </button>
              </div>
            </div>

            {/* Rest of your form code */}
            <div class="flex items-center mb-5">
              <label for="name" class="inline-block w-48 mr-6 text-left text-black">
                รหัสสินค้า
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="กรอกรหัสสินค้า"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-48 mr-6 text-left 
                            text-black">ชื่อเคมีภัณฑ์</label>
    <input type="text" id="name" name="name" placeholder="กรอกชื่อเคมีภัณฑ์" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-48 mr-6 text-left 
                            text-black">ชื่อสามัญของเคมีภัณฑ์</label>
    <input type="text" id="name" name="name" placeholder="กรอกชื่อสามัญของเคมีภัณฑ์" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-48 mr-6 text-left 
                            text-black">ประเภทของเคมีภัณฑ์</label>
    <input type="text" id="name" name="name" placeholder="กรอกประเภทของเคมีภัณฑ์" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-48 mr-6 text-left 
                            text-black">กลุ่มสารตาม IRAC</label>
    <input type="text" id="name" name="name" placeholder="กรอกกลุ่มสารตาม IRAC" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="number" class="inline-block w-48 mr-6 text-left 
                            text-black">ราคาขาย</label>
    <input type="number" id="number" name="number" placeholder="กรอกราคาขาย" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
          "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-48 mr-6 text-left 
                            text-black">หน่วยนับ</label>
    <input type="text" id="name" name="name" placeholder="กรอกหน่วยนับ" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="relative mb-4 flex flex-wrap items-stretch">
              <label for="name" class="flex items-center w-40 mr-6 text-left 
                            text-black">ปริมาณ</label>
              <input type="number"
                class="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                placeholder="กรอกปริมาณ / น้ำหนัก"
              />
              <div className="inline-block relative">
                <select
                  class="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option>กิโลกรัม</option>
                  <option>กรัม</option>
                  <option>ขีด</option>
                  <option>ปอนด์</option>
                  <option>ออนซ์</option>
                  <option>ลิตร</option>
                  <option>มิลลิลิตร</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
  <div class="text-right mt-10">
    <button class="py-2 px-6 text-white rounded-md" style={{background:"#00A84F"}}>บันทึก</button> 
    <button class="py-2 px-6 ms-4 text-black rounded-md" style={{background:"#D9D9D9"}}>ยกเลิก</button> 
  </div>

          </form>
      </div>
      </div>
      </body>
    </>
  );
}
            