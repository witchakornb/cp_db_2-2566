import Image from "next/image";
import Link from "next/link";
import styles from "./success_charge.css";

export default function SuccessMoney() {
  let pay_back = 1.50;
  
  return (
    <>
      <head>
        <title>Success Charge</title>
      </head>
      <body>
        <div className="container">
          <div class="box-alert">
            <div>
              <img src="/accept.png" alt="alert icon" />
            </div>
            <div>
              <h3>ทำรายการสำเร็จ</h3>
              <h4>เงินทอน {pay_back} บาท</h4>
            </div>
            <div className="btn-box">
              <a className="end-btn" href="/sale"><span><img className="icon" src="/accept.png" alt="icon"/> </span>จบการขาย</a>
              <a className="print-btn" href="/sale_history/bill_detail/receipt"><span><img className="icon" src="/printer.png" alt="icon"/> </span>พิมพ์ใบเสร็จ</a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
