import React from 'react';


const Sidebar = ({ asideVisible, handleDropdownToggle, handleDropdownClick, dropdownVisible }) => {
  return (
    <aside className={`text-black w-64 min-h-screen p-4 ${asideVisible ? '' : 'hidden'}`} style={{ background: '#F7F7F7' }}>
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
  );
};

export default Sidebar;
