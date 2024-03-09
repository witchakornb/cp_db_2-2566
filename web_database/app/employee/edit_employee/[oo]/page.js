'use client';
import Sidebar from "../../../Sidebar";
import Navbar from "../../../Navbar";
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import styles from "../../add_employee/add_employee.css";

import { useState, useEffect } from "react";

export default function Add_employee({ params }) {
  console.log(params.oo);
  const [role, setRole] = useState([]);
  const [dataPreset, setDataPreset] = useState({
    EmployeeEId: '',
    EmployeeSalary: 0,
    EmployeeUsername: '',
    EmployeeEmail: '',
    EmployeeBirthday: '',
    PersonFname: '',
    PersonLname: '',
    PersonPhone: '',
    RoleName: '',
    AddressZipcode: '',
    AddressProvince: '',
    AddressDistrict: '',
    AddressSubdistrict: '',
    Address: '',
    AddressMoo: '',
    PersonPhoto: '',
  });


  const [base64String, setBase64String] = useState('');
  const [image, setImage] = useState("");

  async function api() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IP}/admin/select_employee`,
        {
          EmployeeEId: params.oo,
        },
        {
          withCredentials: true,
        }
      );
      setDataPreset(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    // -----
    try {
      const role = await axios.get(
        `${process.env.NEXT_PUBLIC_IP}/user/get_role`,
        {
          withCredentials: true,
        }
      );
      setRole(role.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    api()
    console.log(dataPreset);
  }, []);


  const handleFileChange = (event) => {
    const imageInput = event.target;
    const image = imageInput.files[0];
    setImage(image);
    if (!image) {
      console.error('No image file selected.');
      alert("dddddddddddddddddddd")
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
      alert("fffffffffffffffffff")
        return;
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(image);
  };

  async function onSubmit(event) {
    let output = {}
    event.preventDefault();
    const form = event.target;
    if (!base64String) {
     output = {
        EmployeeEId: form.EmployeeEId.value,
        EmployeePId: form.EmployeePId.value,
        EmployeeSalary: parseFloat(form.EmployeeSalary.value),
        EmployeeUsername: form.EmployeeUsername.value,
        EmployeePassword: form.EmployeePassword.value,
        EmployeeEmail: form.EmployeeEmail.value,
        EmployeeBirthday: form.EmployeeBirthday.value,
        PersonFname: form.PersonFname.value,
        PersonLname: form.PersonLname.value,
        PersonPhone: form.PersonPhone.value,
        RoleId: parseInt(form.RoleId.value),
        AddressZipcode: form.AddressZipcode.value,
        AddressProvince: form.AddressProvince.value,
        AddressDistrict: form.AddressDistrict.value,
        AddressSubdistrict: form.AddressSubdistrict.value,
        Address: form.Address.value,
        AddressMoo: form.AddressMoo.value,
        PersonPhoto: dataPreset.PersonPhoto,
      }
    }else{
    output = {
        EmployeeEId: form.EmployeeEId.value,
        EmployeePId: form.EmployeePId.value,
        EmployeeSalary: parseFloat(form.EmployeeSalary.value),
        EmployeeUsername: form.EmployeeUsername.value,
        EmployeePassword: form.EmployeePassword.value,
        EmployeeEmail: form.EmployeeEmail.value,
        EmployeeBirthday: form.EmployeeBirthday.value,
        PersonFname: form.PersonFname.value,
        PersonLname: form.PersonLname.value,
        PersonPhone: form.PersonPhone.value,
        RoleId: parseInt(form.RoleId.value),
        AddressZipcode: form.AddressZipcode.value,
        AddressProvince: form.AddressProvince.value,
        AddressDistrict: form.AddressDistrict.value,
        AddressSubdistrict: form.AddressSubdistrict.value,
        Address: form.Address.value,
        AddressMoo: form.AddressMoo.value,
        PersonPhoto: base64String,
      }
    }


console.log(output);


    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IP}/admin/update_employee`,
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
















  //image
  // const [selectedImage, setSelectedImage] = useState(null);  // State to hold selected image

  // function thisFileUpload(event) {
  //   const fileInput = event.target;
  //   const file = fileInput.files[0];

  //   if (file && file.type.startsWith("image/")) {
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     alert("Please select a valid image file.");
  //   }
  // }
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



            {/* ----------------------------------------------- */}
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
                        name="PersonPhoto"
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
                    <div className="flex">
                      <div className="w-1/2 mr-4">
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสพนักงาน</label>
                        <input readOnly value={dataPreset.EmployeeEId} type="text" id="name" name="EmployeeEId" placeholder="รหัสพนักงาน"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อ</label>
                        <input value={dataPreset.PersonFname} onChange={e => setDataPreset({ ...dataPreset, PersonFname: e.target.value })} type="text" id="name" name="PersonFname" placeholder="ชื่อ"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เบอร์โทร</label>
                        <input value={dataPreset.PersonPhone} onChange={e => setDataPreset({ ...dataPreset, PersonPhone: e.target.value })} type="text" id="name" name="PersonPhone" placeholder="เบอร์โทร"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสบัตรประชาชน</label>
                        <input value={dataPreset.EmployeePId} onChange={e => setDataPreset({ ...dataPreset, EmployeePId: e.target.value })} type="text" id="name" name="EmployeePId" placeholder="รหัสบัตประชาชน"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">นามสกุล</label>
                        <input value={dataPreset.PersonLname} onChange={e => setDataPreset({ ...dataPreset, PersonLname: e.target.value })} type="text" id="name" name="PersonLname" placeholder="นามสกุล"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                        <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">อีเมล</label>
                        <input value={dataPreset.EmployeeEmail} onChange={e => setDataPreset({ ...dataPreset, EmployeeEmail: e.target.value })} type="text" id="name" name="EmployeeEmail" placeholder="อีเมล"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 px-4 pb-4">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">วันเกิด</label>
                    <input value={dataPreset.EmployeeBirthday} onChange={e => setDataPreset({ ...dataPreset, EmployeeBirthday: e.target.value })} type="date" id="name" name="EmployeeBirthday" placeholder="วันเกิด"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                  <div className="w-1/3 px-4 pb-4">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ตำแหน่ง</label>

                    <select name="RoleId" className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md">
                      {role.map(unit => (
                        <option key={unit.RoleID} value={unit.RoleID} selected={unit.RoleID === dataPreset.RoleID}>
                          {unit.RoleName}
                        </option>
                      ))}
                    </select>





                  </div>
                  <div className="w-1/3 px-4 pb-4">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เงินเดือน</label>
                    <input value={dataPreset.EmployeeSalary} onChange={e => setDataPreset({ ...dataPreset, EmployeeSalary: e.target.value })} type="text" id="name" name="EmployeeSalary" placeholder="เงินเดือน"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                </div>
                <div className="flex px-4 pb-6">
                  <div className="w-1/2 pr-4">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left
                            text-black">ชื่อผู้ใช้</label>
                    <input value={dataPreset.EmployeeUsername} onChange={e => setDataPreset({ ...dataPreset, EmployeeUsername: e.target.value })} type="text" id="name" name="EmployeeUsername" placeholder="ชื่อผู้ใช้"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสผ่าน</label>
                    <input value={dataPreset.EmployeePassword} onChange={e => setDataPreset({ ...dataPreset, EmployeePassword: e.target.value })} type="text" id="name" name="EmployeePassword" placeholder="รหัสผ่าน"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                </div>
              </div>

              <div class="m-4 border-solid border-2 rounded">
                <div class="p-4 bg-[#777777] font-bold text-white">
                  ข้อมูลที่อยู่
                </div>
                <div className="p-4 flex">
                  <div className="w-1/2 mr-4">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">เลขที่</label>
                    <input value={dataPreset.Address} onChange={e => setDataPreset({ ...dataPreset, Address: e.target.value })} type="text" id="name" name="Address" placeholder="เลขที่"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ตำบล/แขวง</label>
                    <input value={dataPreset.AddressSubdistrict} onChange={e => setDataPreset({ ...dataPreset, AddressSubdistrict: e.target.value })} type="text" id="name" name="AddressSubdistrict" placeholder="ตำบล/แขวง"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">จังหวัด</label>
                    <input value={dataPreset.AddressProvince} onChange={e => setDataPreset({ ...dataPreset, AddressProvince: e.target.value })} type="text" id="name" name="AddressProvince" placeholder="จังหวัด"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">หมู่ที่</label>
                    <input value={dataPreset.AddressMoo} onChange={e => setDataPreset({ ...dataPreset, AddressMoo: e.target.value })} type="text" id="name" name="AddressMoo" placeholder="หมู่ที่"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">อำเภอ/เขต</label>
                    <input value={dataPreset.AddressDistrict} onChange={e => setDataPreset({ ...dataPreset, AddressDistrict: e.target.value })} type="text" id="name" name="AddressDistrict" placeholder="อำเภอ/เขต"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                    <label htmlFor="name" className="inline-block w-40 mr-6 text-left 
                            text-black">รหัสไปรษณีย์</label>
                    <input value={dataPreset.AddressZipcode} onChange={e => setDataPreset({ ...dataPreset, AddressZipcode: e.target.value })} type="text" id="name" name="AddressZipcode" placeholder="รหัสไปรษณีย์"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
                  </div>
                </div>
              </div>

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
