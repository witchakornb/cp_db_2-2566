'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import '../../tailwind.css';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Sell() {

  // get Data Api
  const [itemId, setItemId] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.62.58.160:8080/user/get_item_name_for_fertilizer');
        const { ItemId } = response.data;

        // เซตค่า ItemId ใน state
        setItemId(ItemId);

        // Set the initial value for Item_ItemId in fertilizerData
        setFertilizerData((prevData) => ({
          ...prevData,
          Item_ItemId: ItemId,
        }));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);  // State to hold selected image
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64String, setBase64String] = useState(''); // Initially empty

  const handleFileChange = (event) => {
    const imageInput = event.target;
    const image = imageInput.files[0];

    if (!image) {
      console.error('No image file selected.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (result.startsWith('data:image/png;base64,')) {
        setBase64String(result.replace('data:image/png;base64,', ''));
        setFertilizerData((prevData) => ({
          ...prevData,
          OtherPhoto: result.replace('data:image/png;base64,', ''),
        }));
      } else if (result.startsWith('data:image/jpeg;base64,')) {
        setBase64String(result.replace('data:image/jpeg;base64,', ''));
        setFertilizerData((prevData) => ({
          ...prevData,
          OtherPhoto: result.replace('data:image/jpeg;base64,', ''),
        }));
      } else {
        console.error('Unsupported image format. Please select a PNG or JPEG.');

        // Clear the selected file input
        const fileInput = document.getElementById('file');
        if (fileInput) {
          fileInput.value = '';
        }

        // Reset state to clear the selected image
        setSelectedFile(null);
        setSelectedImage(null);
        setBase64String('');

        // Show a dialog or notification for unsupported format
        alert('Unsupported image format. Please select a PNG or JPEG.');
        return;
      }

      // setFertilizerData((prevData) => ({
      //   ...prevData,
      //   OtherPhoto: base64String,
      // }));

      setSelectedFile(image);
      console.log('Image File Selected:', image.name);
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsDataURL(image);
  };

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

  //add fertilizer
  const [fertilizerData, setFertilizerData] = useState({
    Item_ItemId: itemId,
    FertilizerFormulaName: '',
    FertilizerName: '',
    OtherPhoto: base64String,
    FertilizerPrice: 0,
    FertilizerType: '',
    FertilizerWeigth: 0,
    UnitName: '',
  });

  const handleInputChange = (field, value) => {
    // Validate if the input is a number and greater than or equal to 0
    if ((field === 'FertilizerPrice' || field === 'FertilizerWeigth') && (!isNaN(value) && parseFloat(value) < 0)) {
      // If the input is not a valid number or less than 0, prompt the user to enter a valid value
      alert(`Please enter a valid non-negative number for ${field}.`);
      document.getElementById(field).value = '';
    }
    else {
      setFertilizerData((prevData) => ({
        ...prevData,
        [field]: value,
        Item_ItemId: itemId,
      }));
      console.log('Input Changed:', field, value);
    }

  };

  const handleSave = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log('Fertilizer Data before validation:', fertilizerData);
    // Set Item_ItemId to itemId
    setFertilizerData((prevData) => ({
      ...prevData,
      Item_ItemId: fertilizerData.Item_ItemId || itemId,
    }));
    if (!fertilizerData.Item_ItemId) {
      console.log('Item ID is empty.');
      return;
    }
    else if (
      !fertilizerData.FertilizerFormulaName ||
      !fertilizerData.FertilizerName ||
      !fertilizerData.OtherPhoto ||
      !fertilizerData.FertilizerPrice ||
      !fertilizerData.FertilizerType ||
      !fertilizerData.FertilizerWeigth ||
      !fertilizerData.UnitName
    ) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง'); // Show an alert
      return;
    }
    else if (!base64String) {
      console.error('Please select an image first.');
      return;
    }
    else {
      console.log('Fertilizer Data validation:', fertilizerData);
      try {
        setLoading(true);
        setError(null);

        console.log('Fertilizer Data:', fertilizerData);

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_IP}/insert_customer`,
          fertilizerData,
          {
            withCredentials: true,
          }
        );

        console.log('else :', fertilizerData);
        console.log(response.data);

        // Reset form after successful submission
        setFertilizerData({
          Item_ItemId: itemId,
          FertilizerFormulaName: '',
          FertilizerName: '',
          OtherPhoto: '',
          FertilizerPrice: 0,
          FertilizerType: '',
          FertilizerWeight: 0,
          UnitName: '',
        });

        setSelectedImage(null);
      } catch (error) {
        console.error('Error while saving data:', error);
        setError('An error occurred while saving data. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <head>
        <title>Add Fertilizer</title>
      </head>
      <body>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
            <h2 className="font-bold text-xl mb-5">ข้อมูลปุ๋ย</h2>
            <form action="#" method="post">
              <div className="flex items-start mb-5">
                <label
                  htmlFor="file"
                  className="inline-block w-40 mr-6 text-left text-black"
                >
                  ภาพสินค้า
                </label>
                <div className="mb-5 block mx-auto">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="photo product"
                      className="w-40 h-40"
                    />
                  ) : (
                    <img
                      src="/logo.jpg"
                      alt="default photo"
                      className="w-40 h-40"
                    />
                  )}
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="py-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#00A84F] file:text-white hover:file:bg--[#00A84F]"
                  />
                  {/* <button
                    id="button"
                    name="button"
                    value="Upload"
                    onClick={() => document.getElementById("file").click()}  // This line triggers the click on the file input
                    className="py-2 px-6 mt-2 w-40 text-white rounded-md"
                    style={{ background: "#00A84F" }}
                  >
                    เลือกรูปภาพ
                  </button> */}
                </div>
              </div>

              {/* Rest of your form code */}
              <div className="flex items-center mb-5">
                <label for="name" className="inline-block w-40 mr-6 text-left text-black">
                  รหัสสินค้า
                </label>
                <input
                  type="text"
                  id="Item_ItemId"
                  name="Item_ItemId"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={itemId} // กำหนดค่า value จากข้อมูลที่ได้จาก API
                  readOnly // ทำให้ input เป็นแบบอ่านอย่างเดียว
                />
              </div>
              <div className="flex items-center mb-5">
                <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อปุ๋ย</label>
                <input type="text" id="FertilizerName" name="FertilizerName" placeholder="กรอกชื่อปุ๋ย"
                  onChange={(e) => handleInputChange('FertilizerName', e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              </div>
              <div className="flex items-center mb-5">
                <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อสูตรปุ๋ย</label>
                <input type="text" id="FertilizerFormulaName" name="FertilizerFormulaName" placeholder="กรอกสูตรปุ๋ย"
                  onChange={(e) => handleInputChange('FertilizerFormulaName', e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              </div>
              <div className="flex items-center mb-5">
                <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">ประเภทของปุ๋ย</label>
                <input type="text" id="FertilizerType" name="FertilizerType" placeholder="กรอกประเภทของปุ๋ย"
                  onChange={(e) => handleInputChange('FertilizerType', e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              </div>
              <div className="flex items-center mb-5">
                <label for="number" className="inline-block w-40 mr-6 text-left 
                            text-black">ราคาขาย</label>
                <input type="number" id="FertilizerPrice" name="FertilizerPrice" placeholder="กรอกราคาขาย"
                  onChange={(e) => handleInputChange('FertilizerPrice', e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
          "/>
              </div>
              <div className="flex items-center mb-5">
                <label for="name" className="inline-block w-40 mr-6 text-left 
                            text-black">หน่วยนับ</label>
                <input type="text" id="UnitName" name="UnitName" placeholder="กรอกหน่วยนับ"
                  onChange={(e) => handleInputChange('UnitName', e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
              </div>
              <div className="relative mb-4 flex flex-wrap items-stretch">
                <label for="name" className="flex items-center w-40 mr-0 text-left 
                            text-black">ปริมาณ</label>
                <input type="number" type="number" id="FertilizerWeigth" name="FertilizerWeigth"
                  onChange={(e) => handleInputChange('FertilizerWeigth', e.target.value)}
                  className="relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                  placeholder="กรอกปริมาณ / น้ำหนัก"
                />
                <div className="inline-block relative">
                  <select
                    className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-8 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option>กิโลกรัม</option>
                    <option>กรัม</option>
                    <option>ขีด</option>
                    <option>ปอนด์</option>
                    <option>ออนซ์</option>
                    <option>ลิตร</option>
                    <option>มิลลิลิตร</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="text-right mt-10">
                <button onClick={(event) => handleSave(event)}
                  className="py-2 px-6 text-white rounded-md" style={{ background: "#00A84F" }}>บันทึก</button>
                <button className="py-2 px-6 ms-4 text-black rounded-md" style={{ background: "#D9D9D9" }}>ยกเลิก</button>
              </div>

            </form>
          </div>
        </div>
      </body>
    </>
  );
}
