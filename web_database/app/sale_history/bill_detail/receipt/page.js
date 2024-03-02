import Image from "next/image";
import Link from "next/link";
import styles from "./receipt.css";

export default function Receipt() {
  return (
    <>
      <head>
        <title>Receipt</title>
      </head>
      <body>
        <div>
          <div className="receipt-body">
            <div className="head">
              <h4>ใบเสร็จรับเงิน / ใบกำกับภาษีอย่างย่อ</h4>
              <p>ร้านคำปลั๊กการเกษตร</p>
              <p>รายการสินค้า / BI000012</p>
            </div>
            <div className="product">
              <table>
                <tr>
                  <td>1</td>
                  <td>ปุ๋ยสูตร 16-16-16</td>
                  <td className="r">300.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ยาฆ่าแมลง</td>
                  <td className="r">320.00</td>
                </tr>
              </table>
            </div>
            <div className="sum">
              <table>
                <tr>
                  <td>จำนวนสินค้า</td>
                  <td>2</td>
                  <td className="r">รายการ</td>
                </tr>
                <tr>
                  <td>รวมทั้งหมด</td>
                  <td>(5)</td>
                  <td className="r">620.00</td>
                </tr>
              </table>
            </div>
            <div className="other">
              <table>
                <tr>
                  <td>ส่วนลด</td>
                  <td className="r">0.00</td>
                </tr>
                <tr>
                  <td>ราคาสุทธิ</td>
                  <td className="r">620.00</td>
                </tr>
                <tr>
                  <td>ชำระเงินโดย</td>
                  <td className="r">เงินสด</td>
                </tr>
              </table>
            </div>
            <div className="last">
              <p>ขอบคุณที่ใช้บริการครับ/ค่ะ</p>
              <table>
                <tr>
                  <td className="l">2024/02/12 </td>
                  <td className="r">15:30:45</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
