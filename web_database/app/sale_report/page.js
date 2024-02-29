'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./sale_report.css";

// import Navbar from "../Navbar";
import Sidebar from "../test_sidebar/page";

import { useState } from "react";

export default function SaleReport() {

    let data = {
    day: "2024-02-29",
    number_item: 1,
    qty: 5,
    sale: 90.56,
    dis:0,
    net_sale:90.56,
    profit:26
  }
  return (
    <>
    <head>
      <title>Sale Report</title>
    </head>
      <body>
        <Sidebar />
        <div className="" style={{ width: '100%' }}>

          <div class="m-4 border-solid border-2 rounded">
            <div class="p-4 bg-[#777777] font-bold text-white">
              ค้นหาข้อมูล
            </div>

            <div class="p-4">
              <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="start-date">
                        ตั้งแต่วันที่
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start-date" type="date" />
                    </div>
                  </div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="last-date">
                        ถึงวันที่
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-date" type="date" />
                    </div>
                  </div>
                </div>

                <div class="p-4 flex flex-row-reverse mt-2">

                  <div class="ps-5">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded">
                      รีเซต
                    </button>
                  </div>
                  <div class="ps-10">
                    <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                      <span>ค้นหา</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mx-4 mt-8">
            <div class="font-bold">สรุปยอดการขาย</div>
          </div>

          <div class="flex flex-col m-4">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead
                      class="border-b bg-[#777777] font-medium text-white">
                      <tr>
                        <th scope="col" class=" px-6 py-4">วันที่ขาย</th>
                        <th scope="col" class=" px-6 py-4">จำนวนรายการ</th>
                        <th scope="col" class=" px-6 py-4">จำนวน QTY</th>
                        <th scope="col" class=" px-6 py-4">ยอดขาย</th>
                        <th scope="col" class=" px-6 py-4">ส่วนลด</th>
                        <th scope="col" class=" px-6 py-4">ยอดขายสุทธิ</th>
                        <th scope="col" class=" px-6 py-4">กำไร</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4">{data.day}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.number_item}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.qty}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.sale}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.dis}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.net_sale}</td>
                        <td class="whitespace-nowrap  px-6 py-4">{data.profit}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>




        </div>
      </body>
    </>
  );

}
















































// import Image from "next/image";
// import Link from "next/link";
// import Sidebar from "../test_sidebar/page";

// import styles from "./sale_report.css";

// export default function SaleReport() {

//   const resetForm = () => {
//     document.getElementById("report-format").value = "";
//     document.getElementById("select-day").value = "";
//   };
//   let day = {
//     day: "2024-02-29",
//     number_item: 1,
//     qty: 5,
//     sale: 90.56,
//     dis:0,
//     net_sale:90.56,
//     profit:26
//   }
//   return (
//     <>
//       <head>
//         <title>Sale Report</title>
//       </head>
//       <body>
//         <Sidebar />
//         <div>
//           <div className="box-1">
//             <div className="head-box">
//               <h3>เลือกรูปแบบรายงาน</h3>
//             </div>
//             <div className="search-detail">
//               <form action="#" method="post" id="fromjaa">
//                 <div className="s1">
//                   <label for="start-date">ตั้งแต่วันที่</label><br />
//                   <input type="date" name="start-date" id="start-date" />
//                 </div>
//                 <div className="s2">
//                   <label for="to-date">ถึงวันที่</label><br />
//                   <input type="date" name="to-date" id="to-date" />
//                 </div>
//                 <div className="box-btn">
//                   {/* <button className="search-btn" type="submit">
//                     <span>
//                       <img className="icon-search" src="/search.png" alt="icon search"/>
//                     </span>
//                     <span>ค้นหา</span>
//                   </button> */}
//                   <button class="search-btn">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
//                     <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
//                   <span>ค้นหา</span>
//                 </button>
//                   <button className="reset-btn" type="button">รีเซ็ต</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="text">
//             <h3>สรุปยอดการขาย</h3>
//           </div>
//           <div className="box-table">

//             <table className="table-day">
//               <thead>
//                 <tr>
//                   <th>วันที่ขาย</th>
//                   <th>จำนวนรายการ</th>
//                   <th>จำนวน qty</th>
//                   <th>ยอดขาย</th>
//                   <th>ส่วนลด</th>
//                   <th>ยอดขายสุทธิ</th>
//                   <th>กำไร</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{day.day}</td>
//                   <td>{day.number_item}</td>
//                   <td>{day.qty}</td>
//                   <td>{day.sale}</td>
//                   <td>{day.dis}</td>
//                   <td>{day.net_sale}</td>
//                   <td>{day.profit}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// }








{/* <select name="report-format" id="report-format">
                    <option value="" disabled selected hidden><span className="ophint">เลือกรูปแบบรายงาน</span></option>
                    <option value="day">แบบรายวัน</option>
                    <option value="bestselling">รายการสินค้าขายดี</option>
                    <option value="product">จำแนกตามสินค้า</option>
                  </select> */}



{/* <table className="table-best-selling">
<thead>
  
</thead>
<tbody>

</tbody>
</table>

<table className="table-product">
<thead>

</thead>
<tbody>

</tbody>
</table> */}










// 'use client';

// import { useState } from "react";

// const [isDropdown1Open, setIsDropdown1Open] = useState(false);
// const [isDropdown2Open, setIsDropdown2Open] = useState(false);

// const toggleDropdown1 = () => {
//   setIsDropdown1Open((prev) => !prev);
// };

// const toggleDropdown2 = () => {
//   setIsDropdown2Open((prev) => !prev);
// };

// <div class="overflow-hidden">
//   <table class="min-w-full text-center text-sm font-light">
//     <thead
//       class="border-b bg-[#777777] font-medium text-white">
//       <tr>
//         <th scope="col" class=" px-6 py-4">#</th>
//         <th scope="col" class=" px-6 py-4">รหัสพนักงาน</th>
//         <th scope="col" class=" px-6 py-4">ชื่อ</th>
//         <th scope="col" class=" px-6 py-4">นามสกุล</th>
//         <th scope="col" class=" px-6 py-4">เบอร์โทร</th>
//         <th scope="col" class=" px-6 py-4">สิทธิ</th>
//         <th scope="col" class=" px-6 py-4">คำสั่ง</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr class="border-b dark:border-neutral-500">
//         <td class="whitespace-nowrap  px-6 py-4">1</td>
//         <td class="whitespace-nowrap  px-6 py-4">test</td>
//         <td class="whitespace-nowrap  px-6 py-4">name</td>
//         <td class="whitespace-nowrap  px-6 py-4">lastname</td>
//         <td class="whitespace-nowrap  px-6 py-4">phone</td>
//         <td class="whitespace-nowrap  px-6 py-4">role</td>
//         <td class="whitespace-nowrap  px-6 py-4 ">
//           <div class="">
//             <button
//               onClick={toggleDropdown1}
//               class="block p-2 bg-white bg-gray-100 rounded-md">
//               <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
//             </button>

//             {isDropdown1Open && (
//               <div class="absolute mt-2 right-0 w-48 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
//                 <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
//                   <div class="inline-flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
//                       <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
//                     <span>แก้ไขข้อมูล</span>
//                   </div>
//                 </a>
//                 <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
//                   <div class="inline-flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
//                       <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
//                     <span>ลบข้อมูล</span>
//                   </div>
//                 </a>
//                 {/* Add more dropdown items as needed */}
//               </div>
//             )}

//           </div>
//         </td>
//       </tr>

//       <tr class="border-b dark:border-neutral-500">
//         <td class="whitespace-nowrap  px-6 py-4">1</td>
//         <td class="whitespace-nowrap  px-6 py-4">test</td>
//         <td class="whitespace-nowrap  px-6 py-4">name</td>
//         <td class="whitespace-nowrap  px-6 py-4">lastname</td>
//         <td class="whitespace-nowrap  px-6 py-4">phone</td>
//         <td class="whitespace-nowrap  px-6 py-4">role</td>
//         <td class="whitespace-nowrap  px-6 py-4 ">
//           <div class="">
//             <button
//               onClick={toggleDropdown2}
//               class="block p-2 bg-white bg-gray-100 rounded-md">
//               <svg class="h-6 w-6 text-gray-500 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
//             </button>

//             {isDropdown2Open && (
//               <div class="absolute mt-2 right-8 w-40 bg-white bg-gray-100 rounded-md shadow-xl z-10 ">
//                 <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
//                   <div class="inline-flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
//                       <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
//                     <span>แก้ไขข้อมูล</span>
//                   </div>
//                 </a>
//                 <a href="#" class="block px-2 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
//                   <div class="inline-flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
//                       <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
//                     <span>ลบข้อมูล</span>
//                   </div>
//                 </a>
//                 {/* Add more dropdown items as needed */}
//               </div>
//             )}

//           </div>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>