'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./receipt.css";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Receipt({ params }) {
  const [datetime, setDatetime] = useState(null)
  const [order, setOrder] = useState({
    SendSelectDetailOrderOne: {
      Customer_CustomerId: "",
      OrderId: "",
      OrderNetPrice: 0,
      OrderTotalDiscount: 0,
      OrderTotalPirce: 0,
      PaymentName: "",
      EmployeeUsername: "",
      EmployeeEId: "",
      OrderDate: "",
      OrderNote: "",
    },
    SendSelectDetailOrder2: [],
  });

  async function useapi() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_detailOrder`,
        {
          OrderId: params.ok,
        },
        {
          withCredentials: true,
        }
      )
      setOrder(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    // -----------

    console.log("dddddddddddddddddddddddddddddddddddddddddddddd");
    const PP = await axios.get("http://worldtimeapi.org/api/timezone/Asia/Bangkok")
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    console.log(PP.data);
    // setDatetime(response.data.currentDateTime);
    let a = PP.data.datetime.split("T")
    console.log("a === ", a);
    let b = a[0]
    let c = a[1].split(".")[0]
    setDatetime([b, c]);

  }


  useEffect(() => {
    useapi()
  }, []);

  console.log(order);
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
              {order && order.SendSelectDetailOrderOne && (
                <p>รายการสินค้า / {order.SendSelectDetailOrderOne.OrderId}</p>
              )}
            </div>
            <div className="product">
              <table>
                {order && order.SendSelectDetailOrderTwo && (
                  order.SendSelectDetailOrderTwo.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ImportItem_Amount}</td>
                      <td>{item.ProductName}</td>
                      <td className="r">{item.ImportItem_Amount * item.OrderItemPirce}</td>
                    </tr>
                  ))
                )}
              </table>
            </div>
            <div className="sum">
              <table>
                <tr>
                  <td>จำนวนสินค้า</td>

                  {order && order.SendSelectDetailOrderTwo && (
                    <tr>
                      <td>{order.SendSelectDetailOrderTwo.length}</td>
                    </tr>
                  )}


                  <td className="r">รายการ</td>
                </tr>
                <tr>
                  <td>รวมทั้งหมด</td>

                  {order && order.SendSelectDetailOrderTwo && (
                    <td>({order.SendSelectDetailOrderTwo.reduce((sum, item) => sum + item.ImportItem_Amount, 0)})</td>
                  )}
                  {order && order.SendSelectDetailOrderOne && (
                    <td className="r">{order.SendSelectDetailOrderOne.OrderTotalPirce}</td>
                  )}
                </tr>
              </table>
            </div>
            <div className="other">
              <table>
                <tr>
                  <td>ส่วนลด</td>
                  {order && order.SendSelectDetailOrderOne && (
                    <td className="r">{order.SendSelectDetailOrderOne.OrderTotalDiscount}</td>
                  )}
                </tr>
                <tr>
                  <td>ราคาสุทธิ</td>
                  {order && order.SendSelectDetailOrderOne && (
                    <td className="r">{order.SendSelectDetailOrderOne.OrderNetPrice}</td>
                  )}
                </tr>
                <tr>
                  <td>ชำระเงินโดย</td>
                  {order && order.SendSelectDetailOrderOne && (
                    <td className="r">{order.SendSelectDetailOrderOne.PaymentName}</td>
                  )}
                </tr>
              </table>
            </div>
            <div className="last">
              <p>ขอบคุณที่ใช้บริการครับ/ค่ะ</p>
              <table>
                <tr>
                  {datetime && datetime[0] && datetime[1] && (
                    <>
                      <td className="l">{datetime[0]}</td>
                      <td className="r">{datetime[1]}</td>
                    </>
                  )}
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
