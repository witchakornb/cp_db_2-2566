'use client'
// import Image from "next/image";
import Link from "next/link";
import styles from "./bill_detail.css";
import { useState, useEffect } from "react";
import axios from 'axios';
export default function BillDetail({ params }) {
  console.log("OrderId:", params.slug);
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
        {
          OrderId: params.slug,
        },
        {
          withCredentials: true,
        }
      )
      setOrder(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }


  useEffect(() => {
    useapi()
  }, []);

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
                  <Link href={{
                    pathname: `/sale_history/${params.slug}/receipt/${params.slug}`,
                  }}
                  >
                    <button
                      class="bg-[#777777] hover:bg-[#008B41] text-white font-bold p-1 rounded inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </button>
                    <a className="print-btn" href={`sale_history/receipt/${params.slug}`}>
                      <span><img className="icon" src="/printer.png" alt="icon" /></span>
                      พิมพ์ใบเสร็จ
                    </a><br />
                  </Link>


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