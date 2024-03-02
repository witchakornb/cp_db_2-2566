import Image from "next/image";
import Link from "next/link";
import styles from "./product_detail.css";

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
      <body>
        <div>
          <div className="product-detail-box">
            <div className="box-1">
              <h3>รายละเอียดสินค้า</h3>
              <a className="btn-close" href="/sale">&#10006;</a>
            </div>
            <div className="box-2">
              <div className="chemicals">
                <img src="/logo.jpg" alt="image" />
                <div className="detail">
                  <p>รหัสสินค้า : </p>
                  <p>ชื่อสินค้า : </p>
                  <p>หมวดหมู่ : </p>
                  <p>ปริมาณ : </p>
                  <p>ราคาขาย : </p>
                  <p>จำนวนคงเหลือ : </p>
                  <h4>รายละเอียดเพิ่มเติม</h4>
                  <p>ชื่อสามัญของเคมีภัณฑ์ : </p>
                  <p>ประเภทของเคมีภัณฑ์ : </p>
                  <p>กลุ่มสารตาม IRAC : </p>
                </div>
              </div>
              <div className="fertilizer">
                <img src="/printer.png" alt="image" />
                <div className="detail">
                  <p>รหัสสินค้า : </p>
                  <p>ชื่อสินค้า : </p>
                  <p>หมวดหมู่ : </p>
                  <p>ปริมาณ : </p>
                  <p>ราคาขาย : </p>
                  <p>จำนวนคงเหลือ : </p>
                  <h4>รายละเอียดเพิ่มเติม</h4>
                  <p>ชื่อสูตรปุ๋ย : </p>
                  <p>ประเภทของปุ๋ย : </p>
                </div>
              </div>
              <div className="craft_fertilizer">
                <img src="/alert.png" alt="image" />
                <div className="detail">
                  <p>รหัสสินค้า : </p>
                  <p>ชื่อสินค้า : </p>
                  <p>หมวดหมู่ : </p>
                  <p>ปริมาณ : </p>
                  <p>ราคาขาย : </p>
                  <p>จำนวนคงเหลือ : </p>
                  <h4>รายละเอียดเพิ่มเติม</h4>
                  <p>ชื่อสูตรปุ๋ย : </p>
                  <p>ประเภทของปุ๋ย : </p>
                </div>
              </div>
              <div className="Other">
                <img src="/warning_red.png" alt="image" />
                <div className="detail">
                  <p>รหัสสินค้า : </p>
                  <p>ชื่อสินค้า : </p>
                  <p>ประเภทของสินค้า : </p>
                  <p>ขนาดของสินค้า : </p>
                  <p>ราคาขาย : </p>
                  <p>หน่วยนับ : </p>
                  <p>ปริมาณ / น้ำหนัก : </p>
                  <p>จำนวนคงเหลือ : </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
