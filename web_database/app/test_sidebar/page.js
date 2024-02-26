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
    <body>
      
    
    <div className="" style={{ width: '100%'}}>
      
    <nav className="p-4 flex items-center justify-between" style={{ background: '#333333', width: '100%', left: 0 }}>
      <div className="flex place-items-center space-x-4">
        <img className="w-12" src="/logo3.png" alt="logo shop" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={toggleAside}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        <h1 className="text-white text-xl font-semibold">ขายสินค้า</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="hover:bg-gray-300 text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center"
          style={{ background: '#FFFFFF', color: '#333333' }}
        >
          <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
          <span>ขายสินค้า</span>
        </button>
        <i className="fas fa-user-circle text-white text-3xl"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
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
                   <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                 </div>
                 <ul className={`desplegable ml-4 ${dropdownVisible['venta'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                   <li>
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
                   <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   
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
                   <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
                   <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
                             <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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

