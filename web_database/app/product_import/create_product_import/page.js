import Image from "next/image";
import Link from "next/link";
import styles from "./create_product_import.css";

export default function CreateProductImport() {
  return (
    <>
      <head>
        <title>Create Product Import</title>
      </head>
      <body>
        <div className="">
          <h3 className="mb-10 mx-10 mt-10 px-5 font-bold text-xl">รายละเอียดใบนำเข้าสินค้า</h3>
          <div className="box-1 w-auto mx-10 px-5">
            <form action="" method="post">
              <div className="ip-1 mb-5 text-right pe-10">
                <label for="slip-code">รหัสใบนำเข้าสินค้า</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="id" placeholder="รหัสใบนำเข้าสินค้า" /><br />
                <label for="po">ใบ Po อ้างอิง</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="po" placeholder="เลือกใบ Po อ้างอิง" /><br />
                <label for="date">วันที่รับเข้า</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="date" placeholder="เลือกวัน/เดือน/ปี" /><br />
                <label for="from">ซื้อมาจาก</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="from" placeholder="ซื้อมาจาก" /><br />
                <label for="pay">การชำระเงิน</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="pay" placeholder="เลือกวิธีการชำระเงิน" /><br />
                <label for="note">หมายเหตุ</label>
                <input className="w-11/12 ml-2 mb-5 border py-2 px-3 rounded" type="text" name="note" placeholder="หมายเหตุ" /><br />
              </div>
            </form>
          </div>
          <div className="box-2 border p-1">
            <div className="box-search">
              <div className="relative mb-2 mt-2 px-10 flex flex-wrap items-stretch">
                <label for="name" className="flex items-center w-40 mr-0 text-left text-black font-bold text-lg">รายการสินค้านำเข้า</label>
                <input type="text"
                  className="w-20 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                  placeholder="พิมพ์ชื่อสินค้าที่ต้องการค้นหา"
                  name="amount"
                />
                <div className="me-5 inline-block relative">
                  <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded-r inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                    <span>ค้นหา</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="box-table">
              <div class="flex flex-col m-4">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-center text-sm font-light">
                        <thead
                          class="border-b bg-[#777777] font-medium text-white">
                          <tr>
                            <th scope="col" class=" px-6 py-4">#</th>
                            <th scope="col" class=" px-6 py-4">รหัสสินค้า</th>
                            <th scope="col" class=" px-6 py-4">ชื่อสินค้า</th>
                            <th scope="col" class=" px-6 py-4">จำนวน</th>
                            <th scope="col" class=" px-6 py-4">ราคาทุน/หน่วย</th>
                            <th scope="col" class=" px-6 py-4">ยอดรวม</th>
                            <th scope="col" class=" px-6 py-4">คำสั่ง</th>
                          </tr>
                        </thead>
                        <tbody className="overflow-auto	">
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap  px-6 py-4">1</td>
                            <td class="whitespace-nowrap  px-6 py-4">C000000001</td>
                            <td class="whitespace-nowrap  px-6 py-4">ปุ๋ย K</td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <div className="relative mb-2 mt-2 flex flex-wrap items-stretch">
                                {/* <label for="name" className="flex items-center w-40 mr-0 text-left text-black">ปริมาณ</label> */}
                                <input type="number"
                                  className="w-20 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                  placeholder="กรอกปริมาณ / น้ำหนัก"
                                  name="amount"
                                />
                                <div className="inline-block relative">
                                  <select className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
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
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <input type="number"
                                className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                placeholder="ราคาทุน / หน่วย"
                                name="price"
                              />
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <input type="number"
                                className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                placeholder="ยอดรวม"
                                name="price"
                              />
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4 ">
                              <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
