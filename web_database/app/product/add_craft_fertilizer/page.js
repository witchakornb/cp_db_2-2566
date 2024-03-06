'use client';
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";

import Image from "next/image";
import Link from "next/link";
import '../../tailwind.css';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Add_fertilizer() {

  const [fertilizerUnitId, setfertilizerUnitId] = useState([]);
  const [ItemUnitId, setItemUnitId] = useState([]);
  const [MotherFer1, setMotherFer1] = useState([]);
  const [MotherFer2, setMotherFer2] = useState([]);
  const [MotherFer3, setMotherFer3] = useState([]);
  const [ItemId, setItemId] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [base64String, setBase64String] = useState('');
  const [image, setImage] = useState("");

  async function onSubmit(event) {
    if (!base64String) {
      alert('Please select an image first.')
      return
    }

    event.preventDefault();
    const form = event.target;

    const output = {
      Item_ItemId: form.Item_ItemId.value,
      CraftUnitId: 0,
      Craft_fertilizerFormulaName: form.Craft_fertilizerFormulaName.value,
      Craft_fertilizerName: form.Craft_fertilizerName.value,
      Craft_fertilizerPrice: parseFloat(form.Craft_fertilizerPrice.value),
      Craft_fertilizerType: form.Craft_fertilizerType.value,
      Craft_fertilizerWeigth: 0,
      ItemPhoto: base64String,
      ItemUnitId: 0,
      MotherFer1: form.MotherFer1.value,
      MotherFer2: form.MotherFer2.value,
      MotherFer3: form.MotherFer3.value,
      WeigthFer1: parseFloat(form.WeigthFer1.value),
      WeigthFer2: parseFloat(form.WeigthFer2.value),
      WeigthFer3: parseFloat(form.WeigthFer3.value),
    };
    console.log("output", output);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/create_formula_craft`,
        output,
        {
          withCredentials: true,
        }
      );
      window.location.href = "/product";
    } catch (error) {
      console.error('Error:', error);
    }
    console.error('output:', output);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ItemId = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/gen_itemId_for_all_item`,
          {
            withCredentials: true,
          }
        );
        setItemId(ItemId.data.ItemId);
        fertilizerUnitId
        console.log("ItemId ", ItemId);
      } catch (error) {
        console.error('Error:', error);
      }
      // -------------------
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/select_all_craftName`, {
          withCredentials: true,
        });
        setMotherFer1(response.data);
        setMotherFer2(response.data);
        setMotherFer3(response.data);
      } catch (error) {
        console.error('Error fetching craft names:', error);
      }

    }
    fetchData();
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

      setSelectedFile(image);
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(image);
  };

  const handleCancle = async () => {
    event.preventDefault(); // ป้องกันการส่งฟอร์ม
    window.location.href = "/product";
  };
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
      <head>
        <title>Add Fertilizer</title>
      </head>
      <body style={{ width: '100%' }}>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>

            <div className="w-full">
              <h2 className="font-bold text-xl mb-5 w-full">ข้อมูลปุ๋ย</h2>
              <div className='mb-16'>
                <form onSubmit={onSubmit} method="post">
                  <div className="flex items-start mb-5">
                    <label
                      htmlFor="file"
                      className="inline-block w-40 mr-6 text-left text-black" >
                      ภาพสินค้า
                    </label>
                    <div className="mb-5 block m-auto">
                      {image ? (
                        <img className="w-40 h-40" src={URL.createObjectURL(image)} alt="Uploaded Image" />
                      ) : (
                        <img className="w-40 h-40" src="/logo.jpg" alt="logo" />

                      )}
                      <div className="flex">
                        <label htmlFor="sdfsf" className="w-40 mt-5">เลือกรูปภาพ : </label>
                        <input
                          className="py-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#00A84F] file:text-white hover:file:bg--[#000000]"
                          type="file" name="ItemPhoto" accept="image/*" onChange={handleFileChange} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">รหัสสินค้า: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="Item_ItemId" value={ItemId} readOnly />
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ชื่อปุ๋ย: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="Craft_fertilizerName" />
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ชื่อสูตรปุ๋ย: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="Craft_fertilizerFormulaName" />
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ประเภทของปุ๋ย: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="Craft_fertilizerType" />
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ราคาขาย: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="number" name="Craft_fertilizerPrice" min={0} />
                  </div>

                  <h2 className="font-bold text-xl mb-5 w-full">สูตรการผสมปุ๋ย</h2>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="sdfsf"
                      className="inline-block w-40 mr-6 text-left text-black">
                      แม่ปุ๋ยตัวที่ 1: </label>
                    <div className="w-full">
                      <select name="MotherFer1" className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option value="" disabled>เลือกปุ๋ย</option>
                        {MotherFer1.map(craft => (
                          <option key={craft.ItemId} value={craft.FertilizerName}>
                            {craft.FertilizerName}
                          </option>
                        ))}
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-4 flex flex-wrap items-stretch">
                    <label htmlFor="sdfsf" className="flex items-center w-40 mr-1 text-left text-black">
                      ปริมาณ: </label>
                    <input type="number" name="WeigthFer1" min={0}
                      className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none" />

                    <div className="inline-block relative">
                      <div className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        กิโลกรัม
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="sdfsf"
                      className="inline-block w-40 mr-6 text-left text-black">
                      แม่ปุ๋ยตัวที่ 2: </label>
                    <div className="w-full">
                      <select name="MotherFer2" className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option value="" disabled>เลือกปุ๋ย</option>
                        {MotherFer2.map(craft => (
                          <option key={craft.ItemId} value={craft.FertilizerName}>
                            {craft.FertilizerName}
                          </option>
                        ))}
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-4 flex flex-wrap items-stretch">
                    <label htmlFor="sdfsf" className="flex items-center w-40 mr-1 text-left text-black">
                      ปริมาณ: </label>
                    <input type="number" name="WeigthFer2" min={0}
                      className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none" />

                    <div className="inline-block relative">
                      <div className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        กิโลกรัม
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="sdfsf"
                      className="inline-block w-40 mr-6 text-left text-black">
                      แม่ปุ๋ยตัวที่ 3: </label>
                    <div className="w-full">
                      <select name="MotherFer3" className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        <option value="" disabled>เลือกปุ๋ย</option>
                        {MotherFer3.map(craft => (
                          <option key={craft.ItemId} value={craft.FertilizerName}>
                            {craft.FertilizerName}
                          </option>
                        ))}
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-4 flex flex-wrap items-stretch">
                    <label htmlFor="sdfsf" className="flex items-center w-40 mr-1 text-left text-black">
                      ปริมาณ: </label>
                    <input type="number" name="WeigthFer3" min={0}
                      className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none" />

                    <div className="inline-block relative">
                      <div className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                        กิโลกรัม
                      </div>
                    </div>
                  </div>

                  <div className="text-right mt-10">
                    <button type="submit"
                      className="py-2 px-6 text-white rounded-md" style={{ background: "#00A84F" }}>บันทึก</button>
                    <button onClick={handleCancle}
                      className="py-2 px-6 ms-4 text-black rounded-md" style={{ background: "#D9D9D9" }}>ยกเลิก</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </body>
    </>

  );
}
