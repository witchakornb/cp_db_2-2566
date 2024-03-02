"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import '../tailwind.css';
import ProductCard from './card-product';
import axios from 'axios';


export default function Sell() {
  const [asideVisible, setAsideVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    venta: false,
    resumen: false,
    financiero: false,
    stock: false,
    clientes: false,
  });
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

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

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.62.56.118:8080/user/show_all_item');
        const { Fertilizer, Chemicals, Other, Craft } = response.data;
        const fertilizers = Fertilizer || [];
        const chemicals = Chemicals || [];
        const others = Other || [];
        const crafts = Craft || [];
        const allData = [...fertilizers, ...chemicals, ...others, ...crafts];
        console.log(allData);
        setSalesData(allData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };


    fetchData();
  }, []);
  const [selectedTab, setSelectedTab] = useState('tabs-home02');

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <head>
        <title>Sale</title>
      </head>
      <body>
        <Navbar toggleAside={toggleAside} />
        <div className="flex flex-col h-screen">
          <div className="flex flex-1">
            <Sidebar asideVisible={asideVisible} handleDropdownToggle={handleDropdownToggle} handleDropdownClick={handleDropdownClick} dropdownVisible={dropdownVisible} />
            <div className={`p-10 pt-4 mx-auto ${asideVisible ? 'flex-1' : 'w-full'}`}>
              <div className="flex flex-wrap">
                {salesData.map((product) => (
                  <ProductCard key={product.Item_Itemid} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
