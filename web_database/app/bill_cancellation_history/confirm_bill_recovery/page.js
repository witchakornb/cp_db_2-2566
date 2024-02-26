import Image from "next/image";
import Link from "next/link";
import styles from "./confirm_bill_recovery.css";

export default function Sell() {
  let bill_number = "B000001";

  return (
    <>
      <head>
        <title>Confirm Bill Recovery</title>
      </head>
      <body>
        <div className="container">
          <div class="box-alert">
            <div>
              <img src="/warning_yellow.png" alt="alert icon" />
            </div>
            <div>
              <h3>คุณต้องการกู้คืนบิลนี้ใช่หรือไม่ ?</h3>
              <p>
                เลขที่บิล : {bill_number}
              </p>
              <p>
                ระบุหมายเหตุการกู้คืน
              </p>
            </div>
            <div>
              <form action="#" method="post">
                <input type="text" name="recovery_note" placeholder="หมายเหตุ" /><br />
                <div className="btn-box">
                  <button type="submit">ยืนยัน</button>
                  <a href="/bill_cancellation_history">ยกเลิก</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
