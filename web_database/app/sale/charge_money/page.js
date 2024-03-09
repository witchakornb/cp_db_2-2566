'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../tailwind.css';
import Swal from 'sweetalert2';

  export default function ChargeMoney({ paymentData }) {
    console.log(paymentData);
    const [customerIdOptions, setCustomerIdOptions] = useState([]);
    const [customerNameOptions, setCustomerNameOptions] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState('');
    const [paymoney, setPaymoney] = useState('');
    const [discountError, setDiscountError] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/get_customer_id_and_name`);
          const posts = response.data;
          setPosts(posts);
  
          const optionsPersonPhone = posts.map((item) => (
            <option key={item.CustomerId} value={item.CustomerId}>{`Phone: ${item.PersonPhone}`}</option>
          ));
          setCustomerIdOptions(optionsPersonPhone);
  
          const optionsCustomerName = posts.map((item) => (
            <option key={item.CustomerId} value={item.CustomerId}>
              {`${item.PersonFname} ${item.PersonLname}`}
            </option>
          ));
          setCustomerNameOptions(optionsCustomerName);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleItemIdChange = (event) => {
      setSelectedCustomerId(event.target.value);
    };
  
  const handlePaymoneyChange = (paymoney) => {
    console.log('Paymoney:', paymoney);

    if (isNaN(parseFloat(paymoney)) || parseFloat(paymoney) < 0) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter a valid non-negative number for the payment',
        icon: 'error',
      });
      setPaymoney(0);
      setDiscountError('');
    } else {
      setPaymoney(paymoney);
    }
  };

  const handlePayment = () => {
    console.log('paymentData:', paymentData);

    const { orderId, selectedItems, totalDiscount, note, netTotal } = paymentData;
    console.log('Total',netTotal); // Replace 200 with the actual total amount to pay

    if (parseFloat(paymoney) < totalAmountToPay) {
      Swal.fire({
        title: 'Error',
        text: 'Cannot pay, not enough funds',
        icon: 'error',
      });
      setPaymoney(0);
      return;
    }

    // Perform the payment logic here

    // After payment, you might want to reset the form or handle other actions
    setSelectedItemId('');
    setPaymoney('');
  };

  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center h-full ">
        <div className="chemical-detail-box h-fit w-2/5 relative shadow-lg text-center pt-16 pb-6 px-4 border border-gray-900 rounded-lg bg-white">
          <div className="box-1 h-12 absolute top-0 left-0 right-0 text-start px-4 py-1 text-white bg-gray-600 rounded-t-lg flex justify-between items-center">
            <h3>คิดเงิน</h3>
            <a className="text-white" href="/sale">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </a>
          </div>
          <div className="text-start mt-0">
            <div className="flex justify-between items-center mb-4">
              <p className="">ค้นหาข้อมูลลูกค้า</p>
              <div className="">
                <button className="bg-[#00A84F] mr-3 px-2 text-white rounded-md py-2">ลูกค้าทัวไป</button>
                <a href="/customer/add_customer">
                  <button className="bg-[#00A84F] px-2 text-white rounded-md py-2">เพิ่มข้อมูลลูกค้า</button>
                </a>
              </div>
            </div>
            <div className=" mb-4 flex flex-wrap items-stretch">
            <input
              onChange={handleItemIdChange}
              type="text"
              list="customerID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="เลือกเบอร์ลูกค้า"
            />
            <datalist id="customerID">{customerIdOptions}</datalist>
          </div>
          <div>
            {posts.map((item) => (
              item.CustomerId === selectedCustomerId && (
                <div key={item.CustomerId}>
                  <p className="mb-2">รหัสของลูกค้า : {item.CustomerId}</p>
                  <p className="mb-2">ชื่อของลูกค้า : {`${item.CustomerFname} ${item.CustomerLname}`}</p>
                  <p>เบอร์โทรของลูกค้า : {item.PersonPhone}</p>
                </div>
              )
            ))}
          </div>
            <ul class="grid w-full gap-6 md:grid-cols-2 mt-4">
              <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                <label for="hosting-small" class="inline-flex items-center mx-auto justify-center w-full p-5  bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-[#00A84F] peer-checked:text-[#00A84F] peer-checked:border-2 hover:text-gray-900 hover:bg-gray-100">
                  เงินสด
                </label>
              </li>
              <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                <label for="hosting-big" class="inline-flex border-gray items-center justify-center w-full p-5  bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-[#00A84F] peer-checked:text-[#00A84F] peer-checked:border-2 hover:text-gray-900 hover:bg-gray-100">
                  โอนเงินผ่านธนาคาร
                </label>
              </li>
            </ul>
            <input
              type="number"
              value={paymoney}
              placeholder="กรอกเงินที่จ่าย"
              onChange={(e) => handlePaymoneyChange(e.target.value)}
              className="w-full px-3 py-6 mt-4 text-center text-3xl bg-slate-100 border-b border-gray-500"
            />
            {discountError && <p className="text-red-500">{discountError}</p>}
            <div className="flex items-center justify-center">
              <button
                onClick={handlePayment}
                
                className="px-4 mt-4 py-3 rounded-full shadow-lg w-full text-2xl text-center bg-[#00A84F] text-white font-semibold"
              >
                ชำระเงิน
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
