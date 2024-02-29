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
              <label for=""><span className="fb">รายการสินค้านำเข้า</span></label>
              <input type="chechbox" name="" id=""/>
            </div>
            <div className="box-table">

            </div>
          </div>
        </div>
      </body>
    </>
  );
}
