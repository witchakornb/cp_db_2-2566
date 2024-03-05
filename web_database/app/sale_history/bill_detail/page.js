'use client'

// import Image from "next/image";
// import Link from "next/link";
import styles from "./bill_detail.css";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function BillDetail({ input }) {
// export default function BillDetail() {
  const { OrderId } = input
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
      console.log("Dddddd");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IP}/user/select_detailOrder`,
        // `http://localhost:8080/user/select_detailOrder`,
        {
          OrderId: OrderId,
        },
        {
          withCredentials: true,
        }
      )
      // console.log("fffffff");
      setOrder(response.data);
    } catch (error) {
      // console.log("ooooooooooooooooo");
      console.error('Error:', error);
    }
  }


  useEffect(() => {
    useapi()
  }, []);


  // console.log(order);

  return (
    <>
      <div className="wrap">
        <div className="bill-detail-box">
          <div className="box-1">
            <h3>รายละเอียดบิล</h3>
            <a className="btn-close" href="/sale_history">&#10006;</a>
          </div>
          <div className="box-2">
            <div className="detail-box">
              {/* ------------------------------------ */}
              {order && order.SendSelectDetailOrderOne && (
                <div className="left-box">
                  <div className="l-head">
                    <div className="customer-box">
                      <h4>
                        <span>
                          <img className="icon" src="/user.png" alt="icon" />
                        </span>
                        #{order.SendSelectDetailOrderOne.Customer_CustomerId}
                      </h4>
                    </div>
                    <div className="lh-detail-wrap">
                      <div className="lh-detail">
                        <h4>ยอดขายสุทธิ </h4>
                        <h4>ส่วนลด </h4>
                      </div>
                      <div className="lh-detail2">
                        <h4>{order.SendSelectDetailOrderOne.OrderNetPrice} บาท</h4>
                        <h4>{order.SendSelectDetailOrderOne.OrderTotalDiscount} บาท</h4>
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
                        <p>{order.SendSelectDetailOrderOne.OrderTotalPirce} บาท</p>
                        <p>{order.SendSelectDetailOrderOne.PaymentName}</p>
                      </div>
                    </div>
                    <h4>&#8226; พนักงาน</h4>
                    <div className="lb2">
                      <div className="lb2-1">
                        <p>ชื่อผู้ใช้</p>
                        <p>รหัสพนักงาน</p>
                        <br />
                        <p>{order.SendSelectDetailOrderOne.OrderDate.split(" ")[0]}</p>
                      </div>
                      <div className="lb2-2">
                        <p>{order.SendSelectDetailOrderOne.EmployeeUsername}</p>
                        <p>{order.SendSelectDetailOrderOne.EmployeeEId}</p>
                        <br />
                        <p>{order.SendSelectDetailOrderOne.OrderDate.split(" ")[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ------------------------------------ */}
              <div className="right-box">
              {order && order.SendSelectDetailOrderOne && (
                <h3>รายการสินค้า / {order.SendSelectDetailOrderOne.OrderId}</h3>
              )}
                <div className="btn-box">
                  <a className="print-btn" href="/sale_history/bill_detail/receipt">
                    <span><img className="icon" src="/printer.png" alt="icon" /></span>
                    พิมพ์ใบเสร็จ
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
                    {/* ------------------------------------ */}
                    <tbody>
                      {order && order.SendSelectDetailOrderTwo && (
                        order.SendSelectDetailOrderTwo.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.ProductName}</td>
                            <td>{item.OrderItemPirce}</td>
                            <td>{item.ImportItem_Amount} {item.UnitName}</td>
                            <td>{item.OrderItemPirce}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                    {/* ------------------------------------ */}
                  </table>
                </div>
                <div className="note-box">
                  <label htmlFor="note">หมายเหตุ</label><br />
                  {order && order.SendSelectDetailOrderOne && (
                    
                    <textarea disabled type="text" name="note" value={order.SendSelectDetailOrderOne.OrderNote} />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}