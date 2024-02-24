'use client';
import "./tsidebar.css";
import '@fortawesome/fontawesome-free/css/all.css';
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
      
    
    <div  style={{ width: '100%'}}>
      
    <nav className="p-4 flex items-center justify-between" style={{ background: '#333333', width: '100%', left: 0 }}>
      <div className="flex place-items-center space-x-4">
        <img className="w-12" src="/logo3.png" alt="logo shop" />
        <i className="fa fa-bars text-2xl text-white" onClick={toggleAside}></i>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        <h1 className="text-white text-xl font-semibold">ขายสินค้า</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="hover:bg-gray-300 text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center"
          style={{ background: '#FFFFFF', color: '#333333' }}
        >
          <i className="fa fa-shopping-cart text-xl pr-3" style={{ color: '#333333' }}></i>
          <span>ขายสินค้า</span>
        </button>
        <i className="fas fa-user-circle text-white text-3xl"></i>
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
                   <i className="fas fa-chevron-down text-xs"></i>
                 </div>
                 <ul className={`desplegable ml-4 ${dropdownVisible['venta'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center"> 
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       ขายสินค้า
                     </a>
                   </li>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center ">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       ประวัติการขายสินค้า
                     </a>
                   </li>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
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
                   <i className="fas fa-chevron-down text-xs"></i>
                 </div>
                 <ul className={`desplegable ml-4 ${dropdownVisible['resumen'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       ภาพรวมการขาย
                     </a>
                   </li>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center ">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
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
                   <i className="fas fa-chevron-down text-xs"></i>
                 </div>
                 <ul className={`desplegable ml-4 ${dropdownVisible['financiero'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
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
                   <i className="fas fa-chevron-down text-xs"></i>
                 </div>
                 <ul className={`desplegable ml-4 ${dropdownVisible['stock'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                   <li>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       สินค้าทั้งหมด
                     </a>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       ปุ๋ยรอการผสม
                     </a>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                       ตรวจสอบการขาย
                     </a>
                     <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                       <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
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
                             <i className="fas fa-chevron-down text-xs"></i>
                         </div>
                         <ul className={`desplegable ml-4 ${dropdownVisible['clientes'] ? '' : 'hidden'}`} onClick={handleDropdownClick}>
                            <li>
                                 <a href="#" className="block p-2 hover:bg-gray-300 flex items-center">
                                     <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
                                    ข้อมูลลูกค้า
                                 </a>
                             </li>
                             <li>
                                 <a href="#" className="block p-2 hover:bg-gray-300 flex items-center ">
                                     <i className="fa fa-circle mr-2 mt-1" style={{ fontSize: '9px' }}></i>
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

