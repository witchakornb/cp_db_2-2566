import Image from "next/image";
import Link from "next/link";
import styles from "./bill_detail.css";

export default function BillDetail() {
  let pl1 = {
    no: 1,
    product: "ปุ๋ยสูตร 16-16-16 F0000000001",
    price: 300.00,
    qty: "1 กระสอบ",
    sum_price: 300.00,
  }
  let pl2 = {
    no: 2,
    product: "ยาฆ่าแมลง A0000000001",
    price: 80.00,
    qty: "4 ขวด",
    sum_price: 320.00
  }
  return (
    <>
      <head>
        <title>Bill Detail</title>
      </head>
      <body>
        <div className="">
          <div className="bill-detail-box">
            <div className="box-1">
              <h3>รายละเอียดบิล</h3>
              <a className="btn-close" href="/sale_history">&#10006;</a>
            </div>
            <div className="box-2">
              <div className="detail-box">
                <div className="left-box">
                  <div className="l-head">
                    <div className="customer-box">
                      <h4>
                        <span>
                          <img className="icon" src="/user.png" alt="icon" />
                        </span>
                        #รหัสลูกค้า5555555
                      </h4>
                    </div>
                    <div className="lh-detail-wrap">
                      <div className="lh-detail">
                        <h4>ยอดขายสุทธิ </h4>
                        <h4>ส่วนลด </h4>
                      </div>
                      <div className="lh-detail2">
                        <h4>620.00 </h4>
                        <h4>0.00 </h4>
                      </div>
                    </div>
                  </div>
                  <div className="l-body">
                    <h4>&#8226; สรุปการชำระเงิน</h4>
                    <div className="lb1">
                      <div className="lb1-1">
                        <p>รวมทั้งหมด </p>
                        <p>ชำระเงินโดย </p>
                      </div>
                      <div className="lb1-2">
                        <p>620.00</p>
                        <p>เงินสด</p>
                      </div>
                    </div>
                    <h4>&#8226; พนักงาน</h4>
                    <div className="lb2">
                      <div className="lb2-1">
                        <p>ชื่อผู้ใช้</p>
                        <p>รหัสพนักงาน</p>
                        <br />
                        <br />
                        <p>2024/02/12</p>
                      </div>
                      <div className="lb2-2">
                        <p>kapom</p>
                        <p>E001</p>
                        <br />
                        <br />
                        <p>15:30:45</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-box">
                  <h3>รายการสินค้า / BI000012</h3>
                  <div className="btn-box">
                    <a className="print-btn" href="/sale_history/bill_detail/receipt">
                      <span><img className="icon" src="/printer.png" alt="icon" /> </span>พิมพ์ใบเสร็จ
                    </a><br />
                  </div>
                  <div className="table-box">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>สินค้า</th>
                          <th>ราคา</th>
                          <th>QTY</th>
                          <th>ราคารวม</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{pl1.no}</td>
                          <td>{pl1.product}</td>
                          <td>{pl1.price}</td>
                          <td>{pl1.qty}</td>
                          <td>{pl1.sum_price}</td>
                        </tr>
                        <tr>
                          <td>{pl1.no}</td>
                          <td>{pl1.product}</td>
                          <td>{pl1.price}</td>
                          <td>{pl1.qty}</td>
                          <td>{pl1.sum_price}</td>
                        </tr>
                        <tr>
                          <td>{pl1.no}</td>
                          <td>{pl1.product}</td>
                          <td>{pl1.price}</td>
                          <td>{pl1.qty}</td>
                          <td>{pl1.sum_price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="note-box">
                    <label for="note">หมายเหตุ</label><br/>
                    <textarea disabled type="text" name="note" value={"ใส่พริกหยวกระยะออกดอก"} />
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
