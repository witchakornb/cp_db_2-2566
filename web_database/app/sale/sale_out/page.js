import Image from "next/image";
import Link from "next/link";
import styles from "./sale_out.css";
export default function Sell() {
  return (
    <>
      <head>
        <title>Product Out Of Stock</title>
      </head>
      <body>
        <div className="container">
          <div class="box-alert">
            <div>
              <img src="../alert1.png" alt="alert icon" />
            </div>
            <div>
              <h3>สินค้าหมด กรุณาตรวจสอบบริหารสต็อก</h3>
            </div>
            <div>
              <a className="btn" href="../sale">ตกลง</a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
