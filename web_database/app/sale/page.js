"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import '../tailwind.css';
const Tsidebar = () => {
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
      <body>
      <div className="flex flex-col h-screen">
          <Navbar toggleAside={toggleAside} />
          <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
          <h2 className="font-bold text-xl mb-5">sale</h2>
          
        </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Tsidebar;
