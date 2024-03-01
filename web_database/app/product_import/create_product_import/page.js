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
          <h3>รายละเอียดใบนำเข้าสินค้า</h3>
          <div className="box-1">
            <form action="" method="post">
              <div className="ip-1">
                <label for="slip-code">รหัสใบนำเข้าสินค้า</label>
                <input type="text" />
                <label for="po">ใบ Po อ้างอิง</label>
                <input type="text" />
              </div>
              <label for="date">วันที่รับเข้า</label>
              <input type="text" name="date" placeholder="เลือกวัน/เดือน/ปี" /><br />
              <label for="from">ซื้อมาจาก</label>
              <input type="text" name="from" placeholder="ซื้อมาจาก" /><br />
              <label for="pay">การชำระเงิน</label>
              <input type="text" name="pay" placeholder="เลือกวิธีการชำระเงิน" /><br />
              <label for="note">หมายเหตุ</label>
              <input type="text" name="note" placeholder="หมายเหตุ" /><br />
            </form>
          </div>
          <div className="box-2">
            <div className="box-search">
              <label for="search-ip"><span className="fb">รายการสินค้านำเข้า</span></label>
              <input type="chechbox" name="search-ip" id="search-ip" list="product" />

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
                        <tbody>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap  px-6 py-4">1</td>
                            <td class="whitespace-nowrap  px-6 py-4">C000000001</td>
                            <td class="whitespace-nowrap  px-6 py-4">ปุ๋ย K</td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <input type="text"/>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <input type="text"/>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                              <input type="text"/>
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
