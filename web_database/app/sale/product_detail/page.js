import Image from "next/image";
import Link from "next/link";
import styles from "./product_detail.css";
import React from 'react';

export default function ProductDetail() {
  async function getFertilizer(fertilizerId) {
    
    const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/insert_customer`,
    {
      Item_ItemId: fertilizerId,
    },
    {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  }
  return (
    <>
      <head>
        <title>Product Detail</title>
      </head>
      <body className="bg-red-500 text-center">
        <div className="product-detail-box h-full w-1/4 relative shadow-lg text-center pt-16 pb-6 px-4 border border-gray-300 rounded-lg bg-white">
          <div className="box-1 h-12 absolute top-0 left-0 right-0 text-start px-4 py-1 text-white bg-gray-600 rounded-t-lg flex justify-between items-center">
            <h3>รายละเอียดสินค้า</h3>
            <a className="btn-close text-white" href="/sale"><span className="text-white">&#10006;</span></a>
          </div>
          <div className="box-2 w-full px-4">
            <div className="chemicals">
              <img src="/logo.jpg" alt="image" className="w-44 mx-auto"/>
              <div className="detail text-start mt-4">
                <p>รหัสสินค้า : </p>
                <p>ชื่อสินค้า : </p>
                <p>หมวดหมู่ : </p>
                <p>ปริมาณ : </p>
                <p>ราคาขาย : </p>
                <p>จำนวนคงเหลือ : </p>
                <h4 className="font-bold mt-1 mb-1">รายละเอียดเพิ่มเติม</h4>
                <p>ชื่อสามัญของเคมีภัณฑ์ : </p>
                <p>ประเภทของเคมีภัณฑ์ : </p>
                <p>กลุ่มสารตาม IRAC : </p>
              </div>
            </div>
            {/* <div className="fertilizer">
              <img src="/printer.png" alt="image" className="w-40" />
              <div className="detail text-start px-4">
                <p>รหัสสินค้า : </p>
                <p>ชื่อสินค้า : </p>
                <p>หมวดหมู่ : </p>
                <p>ปริมาณ : </p>
                <p>ราคาขาย : </p>
                <p>จำนวนคงเหลือ : </p>
                <h4 className="font-bold mt-1 mb-1">รายละเอียดเพิ่มเติม</h4>
                <p>ชื่อสูตรปุ๋ย : </p>
                <p>ประเภทของปุ๋ย : </p>
              </div>
            </div>
            <div className="craft_fertilizer">
              <img src="/alert.png" alt="image" className="w-40" />
              <div className="detail text-start px-4">
                <p>รหัสสินค้า : </p>
                <p>ชื่อสินค้า : </p>
                <p>หมวดหมู่ : </p>
                <p>ปริมาณ : </p>
                <p>ราคาขาย : </p>
                <p>จำนวนคงเหลือ : </p>
                <h4 className="font-bold mt-1 mb-1">รายละเอียดเพิ่มเติม</h4>
                <p>ชื่อสูตรปุ๋ย : </p>
                <p>ประเภทของปุ๋ย : </p>
              </div>
            </div>
            <div className="Other">
              <img src="/warning_red.png" alt="image" className="w-40" />
              <div className="detail text-start px-4">
                <p>รหัสสินค้า : </p>
                <p>ชื่อสินค้า : </p>
                <p>ประเภทของสินค้า : </p>
                <p>ขนาดของสินค้า : </p>
                <p>ราคาขาย : </p>
                <p>หน่วยนับ : </p>
                <p>ปริมาณ / น้ำหนัก : </p>
                <p>จำนวนคงเหลือ : </p>
              </div>
            </div> */}
          </div>
        </div>
      </body>
    </>
  );
}
