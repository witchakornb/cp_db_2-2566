'use client';
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./create_product_import_po.css";
import axios from "axios";

import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";


export default function CreateProductImportPo() {
  let itemsWith0001 = null;
  const [isLoading_form, setIsLoading_form] = useState(false)
  const [error_form, setError_form] = useState(null)

  const [data_form, setData_form] = useState([]);
  const [isLoading_form_2, setLoading_form_2] = useState(true)

  const [data_unit, setData_unit] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const unit = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/get_unit_for_item`);
      setData_unit(unit.data);
    };

    fetchData();
  }, []);



  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading_form(true)
    setError_form(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/get_itemId_and_type`);
      const itemsWith0 = response.data.filter(item => item.ItemId.includes(formData.get('amount')));
      itemsWith0001 = response.data.filter(item => item.ItemId === formData.get('amount'));
      console.log(itemsWith0001)
      if (itemsWith0001.length === 0) {
        const itemsString = itemsWith0?.map(item => `Item ID: ${item.ItemId}, Item Type: ${item.ItemType}`).join('\n');
        alert(itemsString)
      }
      if (itemsWith0001.length === 1) {
        let type = itemsWith0001[0].ItemType;
        if (type === 'Chemicals') {
          const chem = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_chemicalsById`, { Item_ItemId: itemsWith0001[0].ItemId });
          const exists = data_form.some(item => item.Item_ItemId === chem.data.Item_ItemId);
          if (!exists) {
            setData_form([...data_form, chem.data]);
          }
          setLoading_form_2(false)
        }
        else if (type === 'Fertilizer') {
          const fert = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_fertilizerById`, { Item_ItemId: itemsWith0001[0].ItemId });
          const exists = data_form.some(item => item.Item_ItemId === fert.data.Item_ItemId);
          if (!exists) {
            setData_form([...data_form, fert.data]);
          }
          setLoading_form_2(false)
        } else if (type === 'Craft') {
          const craft = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_craftById`, { Item_ItemId: itemsWith0001[0].ItemId });
          const exists = data_form.some(item => item.Item_ItemId === craft.data.Item_ItemId);
          if (!exists) {
            setData_form([...data_form, craft.data]);
          }
          setLoading_form_2(false)
        } else if (type === 'Other') {
          const other = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_otherById`, { Item_ItemId: itemsWith0001[0].ItemId });
          const exists = data_form.some(item => item.Item_ItemId === other.data.Item_ItemId);
          if (!exists) {
            setData_form([...data_form, other.data]);
          }
          setLoading_form_2(false)
        }
      }

    } catch (error) {
      // Capture the error message to display to the user
      setError_form(error.message)
      console.error(error)
    } finally {
      setIsLoading_form(false)
    }
  }


  const handleRemoveItem = (itemId) => {
    const newDataForm = data_form.filter(unit => unit.Item_ItemId !== itemId);
    // อัปเดต state ของคอมโพเนนต์ที่เก็บข้อมูล data_form
    setData_form(newDataForm);

    setUnitValues(prevValues => {
      const newValues = { ...prevValues };
      delete newValues[itemId];
      return newValues;
    });
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
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_IP}/gen_import_licenceId`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const toggleDropdown2 = () => {
    setIsDropdown2Open((prev) => !prev);
  };

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

  const [amount, setAmount] = useState(0);
  const [priceUnit, setPriceUnit] = useState(0);
  const [unitValues, setUnitValues] = useState({});
  const handleInputChange = (event, unitId, fieldName) => {
    const newValue = event.target.value;
    setUnitValues(prevValues => ({
      ...prevValues,
      [unitId]: {
        ...prevValues[unitId],
        [fieldName]: newValue
      }
    }));
    
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePriceUnitChange = (event) => {
    setPriceUnit(event.target.value);
  };


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  // ---------- Nav Bar ----------

  return (
    <>
      <head>
        <title>Create Product Import</title>
      </head>
      <body style={{ width: '100%' }}>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-1">
          <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
          <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
            {/* --nav bar-- */}
            <h3 className="ml-5 mb-10 mt-5 px-5 font-bold text-xl">รายละเอียดใบสั่งซื้อสินค้า</h3>
            <div className="box-1 w-auto mx-10 px-5">
            <form onSubmit={onSubmit} method="post">
                <div className="ip-1 mb-5 text-left pe-0">
                  <div className="flex items-center mb-6">
                    <label for="slip-code" className="w-40">รหัสใบสั่งซื้อสินค้า</label>
                    <input className="ml-1 w-full border py-2 px-3 rounded" type="text" name="id" placeholder="รหัสใบสั่งซื้อสินค้า" value={data.ImportLicenceId} />
                  </div>
                  <div className="flex items-center mb-6">
                    <label for="po" className="w-40">วันที่รับเข้า</label>
                    <input className="ml-1 w-full border py-2 px-3 ounded" type="date" name="po" placeholder="เลือกวัน/เดือน/ปี" />
                  </div>
                  <div className="flex items-center mb-6">
                    <label for="date" className="w-40">ซื้อมาจาก</label>
                    <input className="ml-1 w-full border py-2 px-3 rounded" type="text" name="date" placeholder="ซื้อมาจาก" />
                  </div>
                  <div className="flex items-center mb-6">
                    <label for="from" className="w-40">การชำระเงิน</label>
                    <input className="ml-1 w-full border py-2 px-3 rounded" type="text" name="from" placeholder="เลือกวิธีการชำระเงิน" />
                  </div>
                  <div className="flex items-center mb-6">
                    <label for="pay" className="w-40">ล่าช้าได้</label>
                    <input className="ml-1 w-full border py-2 px-3 rounded" type="text" name="pay" placeholder="ใส่จำนวนวัน" />
                  </div>
                  <div className="flex items-center mb-6">
                    <label for="note" className="w-40">หมายเหตุ</label>
                    <input className="ml-1 w-full border py-2 px-3 rounded" type="text" name="note" placeholder="หมายเหตุ" />
                  </div>
                </div>
              </form>
            </div>
            <div className="box-2 border mx-10">
              <div className="box-search pe-4">
                <form onSubmit={onSubmit}>
                  <div className="relative mb-2 mt-4 px-10 flex flex-wrap items-stretch">
                    <label for="name" className="flex items-center w-40 mr-4 text-left text-black font-bold text-lg">รายการสินค้านำเข้า</label>
                    <input type="text"
                      className="w-20 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                      placeholder="พิมพ์ชื่อสินค้าที่ต้องการค้นหา"
                      name="amount"
                    />
                    <div className="inline-block relative">
                      <button className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded-r inline-flex items-center" type="submit" disabled={isLoading_form}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                        <span>ค้นหา </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-table">
                <div className="flex flex-col m-4">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                          <thead
                            className="border-b bg-[#777777] font-medium text-white">
                            <tr>
                              <th scope="col" className=" px-6 py-4">#</th>
                              <th scope="col" className=" px-6 py-4">รหัสสินค้า</th>
                              <th scope="col" className=" px-6 py-4">ชื่อสินค้า</th>
                              <th scope="col" className=" px-6 py-4">จำนวน</th>
                              <th scope="col" className=" px-6 py-4">ราคาทุน/หน่วย</th>
                              <th scope="col" className=" px-6 py-4">ยอดรวม</th>
                              <th scope="col" className=" px-6 py-4">คำสั่ง</th>
                            </tr>
                          </thead>

                          {data_form.map((unit, index) => (
                            <tbody className="overflow-auto">
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                                <td className="whitespace-nowrap px-6 py-4">{unit.Item_ItemId}</td>
                                {(() => {
                                  switch (unit.ItemType) {
                                    case 'Fertilizer':
                                      return <td className="whitespace-nowrap px-6 py-4">{unit.FertilizerName}</td>;
                                    case 'Chemicals':
                                      return <td className="whitespace-nowrap px-6 py-4">{unit.ChemicalName}</td>;
                                    case 'Craft':
                                      return <td className="whitespace-nowrap px-6 py-4">{unit.CraftName}</td>;
                                    default:
                                      return <td className="whitespace-nowrap px-6 py-4">{unit.OtherName}   {unit}</td>;
                                  }
                                })()}
                                <td className="whitespace-nowrap  px-6 py-4">
                                  <div className="relative mb-2 mt-2 flex flex-wrap items-stretch">
                                    {/* <label for="name" className="flex items-center w-40 mr-0 text-left text-black">ปริมาณ</label> */}
                                    <input type="number"
                                      className="w-24 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded-none"
                                      placeholder="กรอกปริมาณ / น้ำหนัก "
                                      name="amount"
                                      value={unitValues[unit.Item_ItemId]?.amount || ''}
                                      onChange={(event) => handleInputChange(event, unit.Item_ItemId, 'amount')}
                                    />
                                    <div className="inline-block relative">
                                      <select className="z-[2] bg-[#D8D8D8] appearance-none items-stretch flex rounded-r-md border-l-0 border border-[#e0e0e0] py-2 px-6 text-base outline-none focus:border-[#6A64F1] focus:shadow-md">
                                        {data_unit.map(unit => (
                                          <option key={unit.UnitId} value={unit.UnitId}>{unit.UnitName}</option>
                                        ))}
                                      </select>

                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <input type="number"
                                    className="w-36 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded"
                                    placeholder="ราคาทุน / หน่วย"
                                    name="priceUnit"
                                    value={unitValues[unit.Item_ItemId]?.priceUnit || ''}
                                    onChange={(event) => handleInputChange(event, unit.Item_ItemId, 'priceUnit')}
                                  />
                                </td>
                                <td className="whitespace-nowrap  px-6 py-4">
                                  <input type="number"
                                    className="w-32 relative border rounded-l-md border-[#e0e0e0] bg-white py-2 px-3 text-base outline-none focus:border-[#6A64F1] focus:shadow-md flex-auto rounded"
                                    placeholder="ยอดรวม"
                                    name="totalPrice"
                                    value={(unitValues[unit.Item_ItemId]?.amount || 0) * (unitValues[unit.Item_ItemId]?.priceUnit || 0)}
                                    disabled
                                  />
                                </td>
                                <td className="whitespace-nowrap  px-6 py-4 ">
                                  <button type="button" onClick={() => handleRemoveItem(unit.Item_ItemId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 mr-10 flex flex-row-reverse">
              <div className="ps-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  ยกเลิก
                </button>
              </div>
              <div className="ps-4">
                <button type="submit" className="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded">
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
