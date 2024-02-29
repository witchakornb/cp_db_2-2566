'use client';
import "./tsidebar.css";
import React, { useState, useEffect } from 'react';


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
        case '/product':
          return 'สินค้าทั้งหมด';
        // Add more cases for other pages
        default:
          return 'Unknown Page';
      }
    }
    return 'Unknown Page';
  };


  return (
    <>
      <body>
        <div className="" style={{ width: '100%' }}>
          <nav className="p-4 flex items-center justify-between" style={{ background: '#333333', width: '100%', left: 0 }}>
            <div className="flex place-items-center space-x-4">
              <img className="w-12" src="/logo3.png" alt="logo shop" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={toggleAside}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              <h1 className="text-white text-xl font-semibold">{getPageName()}</h1>
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
              <div class="">
                <button
                  onClick={toggleDropdown2}
                  class="block p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
                </button>
                {isDropdown2Open && (
                  <div class="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
                    <a href="/profile" class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div class="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="ps-2">ข้อมูลผู้ใช้</span>
                      </div>
                    </a>
                    <a href="/change_password" class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div class="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                        </svg>
                        <span className="ps-2">เปลี่ยนรหัสผ่าน</span>
                      </div>
                    </a>
                    <a href="/" class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded">
                      <div class="inline-flex items-center">
                        <div className="rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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

          {asideVisible && (
            <aside className="text-black w-64 min-h-screen p-4" style={{ background: '#F7F7F7' }}>
              <nav>
                <ul className="space-y-2">
                  <li className="opcion-con-desplegable" onClick={() => handleDropdownToggle('venta')}>
                    <div className="flex items-center justify-between p-2 hover:bg-gray-300">
                      <div className="flex items-center">
                        <span>ขายหน้าร้าน</span>
                      </div>
                      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>

                    </div>
                    <ul className={`desplegable ml-4 ${dropdownVisible['venta'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                      <li
                        className={`opcion-con-desplegable ${isCurrentPage('/sale') ? 'font-bold' : ''}`}
                        onClick={() => handleDropdownToggle('venta')}
                      >
                        <a href="/sale" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ขายสินค้า
                        </a>
                      </li>
                      <li>
                        <a href="/sale/charge_money" className="block p-2 hover:bg-gray-300 flex items-center ">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ประวัติการขายสินค้า
                        </a>
                      </li>
                      <li>
                        <a href="/sale_history" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ประวัติการยกเลิกบิล
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="opcion-con-desplegable" onClick={() => handleDropdownToggle('resumen')}>
                    <div className="flex items-center justify-between p-2 hover:bg-gray-300">
                      <div className="flex items-center">
                        <span>ภาพรวมร้าน</span>
                      </div>
                      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>

                    </div>
                    <ul className={`desplegable ml-4 ${dropdownVisible['resumen'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                      <li>
                        <a href="/sale_overview" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ภาพรวมการขาย
                        </a>
                      </li>
                      <li>
                        <a href="/sale_report" className="block p-2 hover:bg-gray-300 flex items-center ">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          รายงานการขาย
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="opcion-con-desplegable" onClick={() => handleDropdownToggle('financiero')}>
                    <div className="flex items-center justify-between p-2 hover:bg-gray-300">
                      <div className="flex items-center">
                        <span>การเงิน/บัญชี</span>
                      </div>
                      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                    <ul className={`desplegable ml-4 ${dropdownVisible['financiero'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                      <li>
                        <a href="/tax_invoice" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ออกใบกำกับภาษี
                        </a>
                      </li>
                      {/* Add more items */}
                    </ul>
                  </li>
                  <li className="opcion-con-desplegable" onClick={() => handleDropdownToggle('stock')}>
                    <div className="flex items-center justify-between p-2 hover:bg-gray-300">
                      <div className="flex items-center">
                        <span>บริหารสต็อก</span>
                      </div>
                      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                    <ul className={`desplegable ml-4 ${dropdownVisible['stock'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                      <li>
                        <a href="/product" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          สินค้าทั้งหมด
                        </a>
                        <a href="/craft_stock" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ปุ๋ยรอการผสม
                        </a>
                        <a href="/sale_check" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ตรวจสอบการขาย
                        </a>
                        <a href="/product_import" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ใบนำเข้าสินค้า
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="opcion-con-desplegable" onClick={() => handleDropdownToggle('clientes')}>
                    <div className="flex items-center justify-between p-2 hover:bg-gray-300">
                      <div className="flex items-center">
                        <span>ข้อมูลลูกค้า/พนักงาน</span>
                      </div>
                      <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                    <ul className={`desplegable ml-4 ${dropdownVisible['clientes'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                      <li>
                        <a href="/customer" className="block p-2 hover:bg-gray-300 flex items-center">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ข้อมูลลูกค้า
                        </a>
                      </li>
                      <li>
                        <a href="/employee" className="block p-2 hover:bg-gray-300 flex items-center ">
                          <svg className="mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                          ข้อมูลพนักงาน
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

              </nav>
            </aside>

          )}
        </div>
      </body>
    </>
  );
};

export default Tsidebar;

