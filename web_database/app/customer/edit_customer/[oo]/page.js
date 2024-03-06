'use client';
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";

import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import styles from "./add_customer.css";

import { useState, useEffect } from "react";

export default function Add_customer({ params }) {
  const [dataPreset, setDataPreset] = useState({
    CustomerId: '',
    CustomerType: '',
    AddressZipcode: '',
    AddressProvince: '',
    AddressDistrict: '',
    AddressSubdistrict: '',
    Address: '',
    AddressMoo: '',
    PersonFname: '',
    PersonLname: '',
    PersonPhone: '',
    PersonPhoto: '',
  });

  const [base64String, setBase64String] = useState('');
  const [image, setImage] = useState("");

  async function api() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IP}/user/select_customer`,
        {
          CustomerId: params.oo,
        },
        {
          withCredentials: true,
        }
      );
      setDataPreset(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }


  useEffect(() => {
    api()
  }, []);


  const handleFileChange = (event) => {
    const imageInput = event.target;
    const image = imageInput.files[0];
    setImage(image);
    if (!image) {
      console.error('No image file selected.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      // Validate data URL format and extract base64 string
      if (result.startsWith('data:image/png;base64,')) {
        setBase64String(result.replace('data:image/png;base64,', ''));
      } else if (result.startsWith('data:image/jpeg;base64,')) {
        setBase64String(result.replace('data:image/jpeg;base64,', ''));
      } else {
        console.error('Unsupported image format. Please select a PNG or JPEG.');
        return;
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(image);
  };

  async function onSubmit(event) {
    console.log("qqqqqqqqqqqqq");
    if (!base64String) {
      alert('Please select an image first.')
      return
    }

    event.preventDefault();
    const form = event.target;




    const output = {
      CustomerId: form.CustomerId.value,
      PersonFname: form.PersonFname.value,
      PersonLname: form.PersonLname.value,
      PersonPhone: form.PersonPhone.value,
      PersonPhoto: base64String,
      Address: form.Address.value,
      AddressZipcode: form.AddressZipcode.value,
      AddressProvince: form.AddressProvince.value,
      AddressDistrict: form.AddressDistrict.value,
      AddressSubdistrict: form.AddressSubdistrict.value,
      AddressMoo: form.AddressMoo.value,
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IP}/user/insert_customer`,
        output,
        {
          withCredentials: true,
        }
      );
      alert("Create fertilizer success!");
    } catch (error) {
      console.error('Error:', error);
    }
  }


  //----------------------------------



















  // ---------- Nav Bar ----------
  const [asideVisible, setAsideVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    venta: false,
    resumen: false,
    financiero: false,
    stock: false,
    clientes: false,
  });

  const handleDropdownToggle = (key) => {
    setDropdownVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      document.addEventListener('click', handleDropdownClick);

      return () => {
        document.removeEventListener('click', handleDropdownClick);
      };
    }
  }, []);

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  // ---------- Nav Bar ----------
  return (
    <>
      <body style={{ width: '100%' }}>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>


            {/* -------------------------------------------------- */}
            <form onSubmit={onSubmit} method="post">
              <div class="m-4 border-solid border-2 rounded">
                <div class="p-4 bg-[#777777] font-bold text-white">
                  ข้อมูลทั่วไป
                </div>
                <div className="flex">
                  <div className="w-1/4 m-4">
                    <div className="block">
                      {image ? (
                        <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
                      ) : (
                        <img src={`data:image/jpeg;base64,${dataPreset.PersonPhoto}`} alt="logo" />
                      )}
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="py-2 focus:border-green-400
                            text-gray-600 placeholder-gray-400
                            outline-none"
                      // style={{ display: "none" }}
                      />
                      {/* <button
                        id="button"
                        name="button"
                        value="Upload"
                        onClick={() => document.getElementById("file").click()}
                        className="py-2 px-6 mt-2 w-40 text-white rounded-md"
                        style={{ background: "#00A84F" }}
                      >
                        เลือกรูปภาพ
                      </button> */}
                    </div>
                  </div>
                  <div className="w-2/3 m-4">
                    <div>
                      <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสลูกค้า</label>
                      <input readOnly value={customerId} type="text" id="name" name="CustomerId" placeholder="รหัสลูกค้า"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    </div>
                    <div className="flex">
                      <div className="w-1/2 mr-4">
                        <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อ</label>
                        <input type="text" id="name" name="PersonFname" placeholder="ชื่อ"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                        <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามสกุล</label>
                        <input type="text" id="name" name="PersonLname" placeholder="นามสกุล"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      </div>
                      <div className="w-1/2">
                        <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เบอร์โทร</label>
                        <input type="text" id="name" name="PersonPhone" placeholder="เบอร์โทร"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-4 border-solid border-2 rounded">
                <div class="p-4 bg-[#777777] font-bold text-white">
                  ข้อมูลที่อยู่
                </div>
                <div className="p-4 flex">
                  <div className="w-1/2 mr-4">
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เลขที่</label>
                    <input type="text" id="name" name="Address" placeholder="เลขที่"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ตำบล/แขวง</label>
                    <input type="text" id="name" name="AddressSubdistrict" placeholder="ตำบล/แขวง"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">จังหวัด</label>
                    <input type="text" id="name" name="AddressProvince" placeholder="จังหวัด"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                  <div className="w-1/2">
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">หมู่ที่</label>
                    <input type="text" id="name" name="AddressMoo" placeholder="หมู่ที่"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">อำเภอ/เขต</label>
                    <input type="text" id="name" name="AddressDistrict" placeholder="อำเภอ/เขต"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสไปรษณีย์</label>
                    <input type="text" id="name" name="AddressZipcode" placeholder="รหัสไปรษณีย์"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                </div>
              </div>

              {/* <div class="m-4 border-solid border-2 rounded">
                <div class="p-4 bg-[#777777] font-bold text-white">
                  ข้อมูลภาษี
                </div>
                <div className="p-4">
                  <div class="relative w-full">
                    <select class="block appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-6 pr-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option disabled selected>เลือกข้อมูล</option>
                      <option>มีการจดข้อมูลภาษี</option>
                      <option>ไม่มีการจดข้อมูลภาษี</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>

                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามผู้เสียภาษี</label>
                  <input type="text" id="name" name="name" placeholder="กรอกชื่อนามผู้เสียภาษี"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  <label for="name" className="inline-block w-50 mr-6 text-left 
                            text-black">หมายเลขประจำตัวผู้เสียภาษี</label>
                  <input type="text" id="name" name="name" placeholder="กรอกชื่อหมายเลขประจำตัวผู้เสียภาษี"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เลขบัตรประชาชน</label>
                  <input type="text" id="name" name="name" placeholder="กรอกเลขบัตรประชาชน"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                </div>
              </div> */}

              <div class="p-4 flex flex-row-reverse">
                <div class="ps-4">
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    ยกเลิก
                  </button>
                </div>
                <div class="ps-4">
                  <button type="submit" class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded">
                    บันทึก
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>

    </>
  );
}
