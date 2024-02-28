import Image from "next/image";
import Link from "next/link";
import styles from "./sale_overview.css";
import Sidebar from "../test_sidebar/page";

export default function SaleOverview() {
  let sales = 0.00;
  let fnbill = 0;
  let ccbill = 0;
  let discount = 0.00;
  let stock_products = 531;
  let customer = 24;
  let employee = 5;
  return (
    <>
      <head>
        <title>Sale Overview</title>
      </head>
      <body>
        <Sidebar/>
        <div>
          <div className="box-1">
            <div className="head-box">
              <h3>ภาพรวมการขาย</h3>
            </div>
            <div className="detail">
              <p>ยอดขายรวม : <span className="value">{sales}</span> ฿</p>
              <p>จำนวนบิลที่สำเร็จ : <span className="value">{fnbill}</span> / บิลที่ยกเลิก : <span className="value">{ccbill}</span></p>
              <p>ส่วนลดรวม : <span className="value">{discount}</span></p>
            </div>
          </div>
          <div className="box-2">
            <div className="head-box">
              <h3>ภาพรวมร้านค้า</h3>
            </div>
            <div className="detail">
              <p>สินค้าใน stock ทั้งหมด : <span className="value">{stock_products}</span></p>
              <p>จำนวนลูกค้าทั้งหมด : <span className="value">{customer}</span> คน</p>
              <p>จำนวนพนักงานทั้งหมด : <span className="value">{employee}</span> คน</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
