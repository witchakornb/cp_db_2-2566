import Image from "next/image";
import Link from "next/link";
import styles from "./print_tax_invoice.css";
export default function PrintTaxInvoice() {
  return (
    <>
      <head>
        <title>Print Tax Invoice</title>
      </head>
      <body>
        <div className="tax-invoice">
          <div className="head">
            <h3>ใบเสร็จรับเงิน / ใบกำกับภาษี </h3>
          </div>
          <div className="box-1">
            <div className="box-1-l">
              <p>ร้านคำปลั๊กการเกษตร</p>
              <p>ตำบลหนองไผ่ อำเภอแก้งคร้อ จังหวัดชัยภูมิ 36150</p>
            </div>
            <div className="box-1-r">
              <p>เลขที่ E000000123</p>
              <p>ใบกำกับภาษีอย่างย่อเลขที่ 003/5830</p>
            </div>
          </div>
          <div className="box-2">
            <table>
              <tr>
                <td>หมายเลขโทรศัพท์</td>
                <td>0123456789</td>
                <td></td>
              </tr>
              <tr>
                <td>เลขประจำตัวผู้เสียภาษีอากร</td>
                <td>1234567890123</td>
                <td>วันที่ 12/03/2567</td>
              </tr>
              <tr>
                <td>ชื่อลูกค้า/ชื่อผู้ซื้อ</td>
                <td>หมิว หมิว</td>
                <td>เลขที่ลูกค้า C000000001</td>
              </tr>
              <tr>
                <td>ที่อยู่</td>
                <td>ตำบล ในเมือง อำเภอ เมือง จังหวัด ขอนแก่น</td>
                <td></td>
              </tr>
              <tr>
                <td>เลขประจำตัวผู้เสียภาษี</td>
                <td>1234567890123</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="box-3">
            <div className="table-1">
              <table>
                <thead>
                  <tr>
                    <th>รหัสสินค้า</th>
                    <th>รายการสินค้า</th>
                    <th>ปริมาณ</th>
                    <th>ราคาสรรพสามิตต่อหน่วย (ไม่รวม VAT)</th>
                    <th>ราคาต่อหน่วย (รวม VAT)</th>
                    <th>จำนวนเงิน (รวม VAT)</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>123456789</td>
                      <td>ปุ๋ย 46-0-0</td>
                      <td>1.00</td>
                      <td></td>
                      <td>1500.00</td>
                      <td>1500.00</td>
                    </tr>
                    <tr>
                      <td>123456789</td>
                      <td>ปุ๋ย 46-0-0</td>
                      <td>1.00</td>
                      <td></td>
                      <td>1500.00</td>
                      <td>1500.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="shift-right">รวม</td>
                      <td></td>
                      <td>3000.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="shift-right">ส่วนลดราคาสินค้า</td>
                      <td></td>
                      <td>0.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="shift-right">รวมยอดที่ชำระ</td>
                      <td></td>
                      <td>3000.00</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="table-2">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>ราคาสรรพสามิตต่อหน่วย 
                      (ไม่รวม VAT)</th>
                    <th>ราคารวม VAT</th>
                    <th>ภาษีมูลค่าเพิ่ม</th>
                    <th>มูลค่าสินค้า</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>​N สินค้าที่มีภาษี</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                  </tr>
                  <tr>
                    <td>V สินค้าที่มีภาษี 7%</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="box-4">
            <p className="pl">ผู้จัดทำผู้รับเงิน</p>
            <p>______________________________</p>
          </div>
        </div>
      </body>
    </>
  );
}
