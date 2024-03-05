'use client';
import { useState, useEffect } from "react";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import styles from "./edit_chemical.css";
import axios from 'axios';

// export default function Page() {
export default async function EditChemical({ itemId }) {
  console.log("itemId ",itemId);
  
  const [fertilizerUnitId, setfertilizerUnitId] = useState([]);
  const [ItemUnitId, setItemUnitId] = useState([]);
  const [dataPreset, setDataPreset] = useState({
    Item_ItemId: '',
    FertilizerName: '',
    FertilizerFormulaName: '',
    FertilizerType: '',
    FertilizerPrice: 0,
    FertilizerUnitId: 0,
    ItemUnitId: 0,
    FertilizerWeigth: 0,
    FertilizerPhoto: '',
  });

  const [base64String, setBase64String] = useState('');
  const [image, setImage] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let output = {}
    console.log("fffff");

    console.log("oooo");
    if (!base64String) {
      output = {
        Item_ItemId: form.Item_ItemId.value,
        FertilizerName: form.FertilizerName.value,
        FertilizerFormulaName: form.FertilizerFormulaName.value,
        FertilizerType: form.FertilizerType.value,
        FertilizerPrice: parseFloat(form.FertilizerPrice.value),
        FertilizerUnitId: parseInt(form.FertilizerUnitId.value),
        ItemUnitId: parseInt(form.ItemUnitId.value),
        FertilizerWeigth: parseFloat(form.FertilizerWeigth.value),
        FertilizerPhoto: dataPreset.ItemPhoto,
      };
    } else {
      output = {
        Item_ItemId: form.Item_ItemId.value,
        FertilizerName: form.FertilizerName.value,
        FertilizerFormulaName: form.FertilizerFormulaName.value,
        FertilizerType: form.FertilizerType.value,
        FertilizerPrice: parseFloat(form.FertilizerPrice.value),
        FertilizerUnitId: parseInt(form.FertilizerUnitId.value),
        ItemUnitId: parseInt(form.ItemUnitId.value),
        FertilizerWeigth: parseFloat(form.FertilizerWeigth.value),
        FertilizerPhoto: base64String,
      };

    }
    console.log(output);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/show_all_item_big/updatefertilizer`,
        output,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
    alert("Update Successful");
  }
  useEffect(() => {
    const fetchData = async () => {
      console.log("oooooooooooo")
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_fertilizerById`,
          {
            Item_ItemId: itemId,
          },
          {
            withCredentials: true,
          }
        );
        setDataPreset(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      // -------------------
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/get_unit_for_item`,
          {
            withCredentials: true,
          }
        );
        setItemUnitId(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      // -------------------
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/get_unit_for_product`,
          {
            withCredentials: true,
          }
        );
        setfertilizerUnitId(response.data);
      } catch (error) {
        console.error('Error:', error);
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
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(image);
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
  // ItemUnitId[0].
  return (
    <>
      <head>
        <title>Edit Chemical</title>
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
                      for="number"
                      className="inline-block w-40 mr-6 text-left text-black"
                    >
                      ภาพสินค้า
                    </label>

                    <div className="mb-5 block m-auto">
                      {image ? (
                        <img className="w-40 h-40" src={URL.createObjectURL(image)} alt="Uploaded Image" />
                      ) : (
                        <img className="w-40 h-40" src={`data:image/jpeg;base64,${dataPreset.ItemPhoto}`} alt="logo" />
                        // <h1>hi</h1>
                      )}
                      <div className="flex">
                        <label htmlFor="sdfsf" className="w-40 mt-5">บันทึกรูปภาพ: </label>
                        <input 
                        className="py-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#00A84F] file:text-white hover:file:bg--[#000000]"
                        type="file" name="FertilizerPhoto" accept="image/*" onChange={handleFileChange} /><br />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">รหัสสินค้า: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="Item_ItemId" value={dataPreset.Item_ItemId} readOnly /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ชื่อเคมีภัณฑ์: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="FertilizerName" value={dataPreset.FertilizerName} onChange={e => setDataPreset({ ...dataPreset, FertilizerName: e.target.value })} /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ชื่อสามัญของเคมีภัณฑ์: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="FertilizerFormulaName" value={dataPreset.FertilizerFormulaName} onChange={e => setDataPreset({ ...dataPreset, FertilizerFormulaName: e.target.value })} /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ประเภทของเคมีภัณฑ์: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="FertilizerType" value={dataPreset.FertilizerType} onChange={e => setDataPreset({ ...dataPreset, FertilizerType: e.target.value })} /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">กลุ่มสารตาม IRAC: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="text" name="FertilizerType" value={dataPreset.FertilizerType} onChange={e => setDataPreset({ ...dataPreset, FertilizerType: e.target.value })} /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">ราคาขาย: </label>
                    <input
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                      type="number" name="FertilizerPrice" value={dataPreset.FertilizerPrice} onChange={e => setDataPreset({ ...dataPreset, FertilizerPrice: e.target.value })} min={0} /><br /><br />
                  </div>
                  <div className="flex items-center mb-5">
                    <label
                      className="inline-block w-40 mr-6 text-left text-black"
                      htmlFor="sdfsf">หน่วยนับ: </label>
                    <select
                      className="w-full bg-white items-stretch flex rounded border-l border border-[#e0e0e0] py-2 px-2 text-base outline-none focus:border-[#6A64F1] focus:shadow-md"
                      name="ItemUnitId">
                      {ItemUnitId.map(unit => (
                        <option key={unit.UnitId} value={unit.UnitId} selected={unit.UnitId === dataPreset.ItemUnitId}>
                          {unit.UnitName}
                        </option>
                      ))}
                    </select><br /><br />
                  </div>
                  <div className="relative mb-4 flex flex-wrap items-stretch">
                    <label
                      className="flex items-center w-40 mr-1 text-left text-black"
                      htmlFor="sdfsf">ปริมาณ / น้ำหนัก: </label>
                    <input
                      className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                      type="number" name="FertilizerWeigth" value={dataPreset.FertilizerWeigth} onChange={e => setDataPreset({ ...dataPreset, FertilizerWeigth: e.target.value })} min={0} />
                   
                    <div className="inline-block relative">
                      <select
                        className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md"
                        name="FertilizerUnitId">
                        {fertilizerUnitId.map(unit => (
                          <option key={unit.UnitId} value={unit.UnitId} selected={unit.UnitId === dataPreset.FertilizerUnitId}>
                            {unit.UnitName}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-right mt-10">
                    <button type="submit" className="py-2 px-6 text-white rounded-md" style={{ background: "#00A84F" }}>บันทึก</button>
                    <button className="py-2 px-6 ms-4 text-black rounded-md" style={{ background: "#D9D9D9" }}>ยกเลิก</button>
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