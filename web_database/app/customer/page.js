'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./customer.css";
import Posts from "./Posts";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Customer() {

  // get Data Api
  const [customerIdOptions, setcustomerIdOptions] = useState([]);
  const [customerNameOptions, setcustomerNameOptions] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/select_customerMini`);
        console.log("res cus : ", response);
        const posts = response.data;
        setPosts(posts);
        console.log("after set : ", posts);

        // Set options for search
        const optionsCustomerId = posts.map((item) => (
          <option key={item.CustomerId} value={item.CustomerId}></option>
        ));
        setcustomerIdOptions(optionsCustomerId);
        console.log('options customerId :', optionsCustomerId);

        const optionsCustomerName = posts.map((item) => (
          <option key={item.CustomerId} value={`${item.PersonFname} ${item.PersonLname}`}>
            {`${item.PersonFname} ${item.PersonLname}`}
          </option>
        ));
        setcustomerNameOptions(optionsCustomerName);

        console.log('options customerName :', optionsCustomerName);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //search
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [InputcustomerID, setInputcustomerID] = useState('');
  const [InputcustomerName, setInputcustomerName] = useState('');
  const filterSalesData = () => {
    if (searchButtonClicked) {
      console.log('customerID input:', InputcustomerID);
      console.log('customerName input:', InputcustomerName);

      const inputParts = InputcustomerName.split(/\s+/).filter(Boolean); // Split by spaces and filter out empty parts

      const filteredData = posts.filter((sale) => {
        const inputCustomerIDMatch = !InputcustomerID || sale.CustomerId.includes(InputcustomerID);

        const inputCustomerNameMatch = inputParts.every((part) =>
          (sale.PersonFname && sale.PersonFname.includes(part)) ||
          (sale.PersonLname && sale.PersonLname.includes(part))
        );

        return InputcustomerID && InputcustomerName
          ? inputCustomerIDMatch && inputCustomerNameMatch
          : InputcustomerID
            ? inputCustomerIDMatch
            : InputcustomerName
              ? inputCustomerNameMatch
              : true;
      });

      setFilteredSalesData(filteredData);
    }
  };

  const displayData = searchButtonClicked ? filteredSalesData : posts;
  useEffect(() => {
    filterSalesData();
  }, [searchButtonClicked]);

  const handleReset = () => {
    // Reset input values
    setInputcustomerID('');
    setInputcustomerName('');

    // Clear the filtered data
    setFilteredSalesData([]);

    // Set searchButtonClicked to false to display all data
    setSearchButtonClicked(false);
  };

  return (
    <>
      <head>
        <title>Customer</title>
      </head>
      <body>
        <div className="" style={{ width: '100%' }}>

          <div class="m-4 border-solid border-2 rounded">
            <div class="p-4 bg-[#777777] font-bold text-white">
              ค้นหาข้อมูล
            </div>

            <div class="p-4">
              <div class="flex -mx-2">
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <form action="" method="get">
                        <label for="customerID">รหัสลูกค้า</label>
                        <input
                          value={InputcustomerID}
                          onChange={(e) => setInputcustomerID(e.target.value)}
                          type="text" list="customerID"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="กรอกรหัสลูกค้า" />
                        <datalist id="customerID">
                          {customerIdOptions}
                        </datalist>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="h-12">
                    <div class="mb-4">
                      <form action="" method="get">
                        <label for="customerName">ชื่อลูกค้า</label>
                        <input
                          value={InputcustomerName}
                          onChange={(e) => setInputcustomerName(e.target.value)}
                          type="text" list="customerName"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="กรอกชื่อลูกค้า" />
                        <datalist id="customerName">
                          {customerNameOptions}
                        </datalist>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 flex flex-row-reverse">
              <div class="ps-4">
                <button
                  onClick={handleReset}
                  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  รีเซต
                </button>
              </div>
              <div class="ps-4">
                <button
                  onClick={() => {
                    setSearchButtonClicked(true);
                    filterSalesData();
                  }}
                  class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                  <span>ค้นหา</span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between mx-4 mt-8">
            <div class="font-bold">ข้อมูลลูกค้า</div>
            <div class="">
              <Link href={`/add_customer/`}>
                <div class="ps-4">
                  <button class="bg-[#00A84F] hover:bg-[#008B41] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>เพิ่มลูกค้าใหม่</span>
                  </button>
                </div>
              </Link>

            </div>
          </div>

          <div class="flex flex-col m-4">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <Posts posts={displayData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
