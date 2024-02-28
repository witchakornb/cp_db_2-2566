import Image from "next/image";
import Link from "next/link";
import styles from "./sale_overview.css";
import Sidebar from "../test_sidebar/page";

export default function SaleOverview() {
  return (
    <>
      <head>
        <title>Sale Overview</title>
      </head>
      <body>
        <Sidebar/>
        <div className="container">
          <div className="box-1">
            <div className="head-box bg-">
              <h3>ภาพรวมการขาย</h3>
            </div>
            <div class="detail">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="box-2">
            <div className="head-box">
              <h3>ภาพรวมร้านค้า</h3>
            </div>
            <div className="detail">
              <p>สินค้าใน stock ทั้งหมด : </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
