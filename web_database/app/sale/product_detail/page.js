'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./product_detail.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function ProductDetail({ itemId }) {
  const [fertilizer, setfertilizer] = useState(null);
  const [craft_fertilizer, setcraft_fertilizer] = useState(null);
  const [chemical, setchemical] = useState(null);
  const [other, setother] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('itemId: ', itemId); // แสดงค่า itemId ที่ส่งเข้าไปใน API
        // เรียกใช้งาน API แต่ละตัวโดยไม่รอผลลัพธ์ก่อนส่งไปยังตัวต่อไป
        axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_chemicalsById`, { Item_ItemId: itemId }, { withCredentials: true })
          .then(responseChemical => {
            console.log('Chemicals data : ', responseChemical.data);
            if (responseChemical.data) {
              setchemical(responseChemical.data);
            }
          })
          .catch(error => console.error('Error fetching chemicals data:', error));
  
        axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_fertilizerById`, { Item_ItemId: itemId }, { withCredentials: true })
          .then(responseFertilizer => {
            console.log('Fertilizer data : ', responseFertilizer.data);
            if (responseFertilizer.data) {
              setfertilizer(responseFertilizer.data);
            }
          })
          .catch(error => console.error('Error fetching fertilizer data:', error));
  
        axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_craftById`, { Item_ItemId: itemId }, { withCredentials: true })
          .then(responseCraft => {
            console.log('Craft data : ', responseCraft.data);
            if (responseCraft.data) {
              setcraft_fertilizer(responseCraft.data);
            }
          })
          .catch(error => console.error('Error fetching craft data:', error));
  
        axios.post(`${process.env.NEXT_PUBLIC_IP}/user/select_otherById`, { Item_ItemId: itemId }, { withCredentials: true })
          .then(responseOther => {
            console.log('Other data : ', responseOther.data);
            if (responseOther.data) {
              setother(responseOther.data);
            }
          })
          .catch(error => console.error('Error fetching other data:', error));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [itemId]);
  
  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center h-full ">
      <div className="chemical-detail-box h-fit w-96 relative shadow-lg text-center pt-16 pb-6 px-4 border border-gray-300 rounded-lg bg-white">
        <div className="box-1 h-12 absolute top-0 left-0 right-0 text-start px-4 py-1 text-white bg-gray-600 rounded-t-lg flex justify-between items-center">
          <h3>รายละเอียดสินค้า</h3>
          <a className="text-white" href="/sale">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </a>
        </div>
        <div className="detail text-start mt-4">
          {chemical && (
            <>
              <img src={`data:image/jpeg;base64,${chemical.ItemPhoto}`} alt="image" className="w-44 mx-auto mb-4" />
              <p className="mb-2">รหัสสินค้า: {chemical.Item_ItemId}</p>
              <p className="mb-2">ชื่อสินค้า: {chemical.ChemicalName}</p>
              <p className="mb-2">หมวดหมู่: {chemical.ItemType}</p>
              <p className="mb-2">ปริมาณ: {chemical.Chemicalweight} {chemical.ChemicalUnitName}</p>
              <p className="mb-2">ราคาขาย: {chemical.ChemicalPrice} บาท</p>
              <p className="mb-2">จำนวนคงเหลือ: {chemical.ItemAmount} {chemical.ItemUnitName}</p>
              <h4 className="font-bold mt-3 mb-3">รายละเอียดเพิ่มเติม</h4>
              <p className="mb-2">ชื่อสามัญของเคมีภัณฑ์ : {chemical.ChemicalCommonName}</p>
              <p className="mb-2">ประเภทของเคมีภัณฑ์ : {chemical.ChemicalType}</p>
              <p className="mb-0">กลุ่มสารตาม IRAC : {chemical.ChemicalIRAC}</p>
            </>
          )}
        </div>
        <div className="detail text-start mt-4">
          {fertilizer && (
            <>
              <img src={`data:image/jpeg;base64,${fertilizer.ItemPhoto}`} alt="image" className="w-44 mx-auto mb-4" />
              <p className="mb-2">รหัสสินค้า: {fertilizer.Item_ItemId}</p>
              <p className="mb-2">ชื่อสินค้า: {fertilizer.FertilizerName}</p>
              <p className="mb-2">หมวดหมู่: {fertilizer.ItemType}</p>
              <p className="mb-2">ปริมาณ: {fertilizer.FertilizerWeigth} {fertilizer.FertilizerUnitName}</p>
              <p className="mb-2">ราคาขาย: {fertilizer.FertilizerPrice} บาท</p>
              <p className="mb-2">จำนวนคงเหลือ: {fertilizer.ItemAmount} {fertilizer.ItemUnitName}</p>
              <h4 className="font-bold mt-3 mb-3">รายละเอียดเพิ่มเติม</h4>
              <p className="mb-2">ชื่อสูตรปุ๋ย : {fertilizer.FertilizerFormulaName}</p>
              <p className="">ประเภทของปุ๋ย : {fertilizer.FertilizerType}</p>
            </>
          )}
        </div>
        <div className="detail text-start mt-4">
          {craft_fertilizer && (
            <>
              <img src={`data:image/jpeg;base64,${craft_fertilizer.ItemPhoto}`} alt="image" className="w-44 mx-auto mb-4" />
              <p className="mb-2">รหัสสินค้า: {craft_fertilizer.Item_ItemId}</p>
              <p className="mb-2">ชื่อสินค้า: {craft_fertilizer.CraftName}</p>
              <p className="mb-2">หมวดหมู่: {craft_fertilizer.ItemType}</p>
              <p className="mb-2">ปริมาณ: {craft_fertilizer.CraftWeigth} {craft_fertilizer.CraftUnitName}</p>
              <p className="mb-2">ราคาขาย: {craft_fertilizer.CraftPrice} บาท</p>
              <p className="mb-2">จำนวนคงเหลือ: {craft_fertilizer.ItemAmount} {craft_fertilizer.ItemUnitName}</p>
              <h4 className="font-bold mt-3 mb-3">รายละเอียดเพิ่มเติม</h4>
              <p className="mb-2">ชื่อสูตรปุ๋ย : {craft_fertilizer.CraftFormulaName}</p>
              <p className="">ประเภทของปุ๋ย : {craft_fertilizer.CraftType}</p>
            </>
          )}
        </div>
        <div className="detail text-start mt-4">
          {other && (
            <>
              <img src={`data:image/jpeg;base64,${other.ItemPhoto}`} alt="image" className="w-44 mx-auto mb-4" />
              <p className="mb-2">รหัสสินค้า: {other.Item_ItemId}</p>
              <p className="mb-2">ชื่อสินค้า: {other.OtherlName}</p>
              <p className="mb-2">ประเภทของสินค้า : {other.ItemType}</p>
              <p className="mb-2">ขนาดของสินค้า : {other.OtherSize}</p>
              <p className="mb-2">ราคาขาย : {other.OtherPrice} บาท</p>
              <p className="mb-2">ปริมาณ / น้ำหนัก :  {other.OtherWeigth} {other.OtherUnitName}</p>
              <p className="mb-0">จำนวนคงเหลือ: {other.ItemAmount} {other.ItemUnitName}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
