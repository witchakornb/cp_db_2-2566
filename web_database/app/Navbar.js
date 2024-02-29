'use client';
import "./tailwind.css";
import React, { useState,userEffect} from 'react';

const Navbar = ({ toggleAside, currentPageName }) => {
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
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
        case '/product_import_po':
          return 'ใบสั่งซื้อสินค้า';
        case '/product_import/create_product_import_po':
          return 'ใบสั่งซื้อสินค้า';
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
    <nav className="p-4 flex items-center justify-between" style={{ background: '#333333', width: '100%', left: 0 }}>
      <div className="flex place-items-center space-x-4">
        <img className="w-12" src="/logo3.png" alt="logo shop" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={toggleAside}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>        <h1 className="text-white text-xl font-semibold">{currentPageName}</h1>
        <h1 className="text-white text-xl font-semibold m-0 p-0">{getPageName()}</h1>
      </div>
      <div className="flex items-center space-x-2">
      <a href="/sale">
                <button
                  className="hover:bg-gray-300 text-gray-200 py-2 px-4 rounded inline-flex items-center"
                  style={{ background: '#FFFFFF', color: '#333333' }} href="/sale"
                >
                  <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                  <span>ขายสินค้า</span>
                </button>
              </a>
              <i className="fas fa-user-circle text-white text-3xl"></i>
              <div className="">
                <button
                  onClick={toggleDropdown2}
                  className="block p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
                 </button>

                {isDropdown2Open && (
                  <div className="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                    <a href="/profile" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="ps-2">ข้อมูลผู้ใช้</span>
                      </div>
                    </a>
                    <a href="/change_password" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                        </svg>
                        <span className="ps-2">เปลี่ยนรหัสผ่าน</span>
                      </div>
                    </a>
                    <a href="/" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div className="inline-flex items-center">
                        <div className="rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                          </svg>
                        </div>
                        <span className="ps-2">ออกจากระบบ</span>
                      </div>
                    </a>
                  </div>
                )}

              </div>
              <span className="text-white">ชื่อผู้ใช้</span>
            </div>

    </nav>
  );
};

export default Navbar;
