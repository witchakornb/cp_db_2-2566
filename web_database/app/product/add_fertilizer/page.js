'use client';
import Image from "next/image";
import Link from "next/link";
import "./add_fertilizer.css";
import { useState } from "react"; 

export default function Sell() {
  const [selectedImage, setSelectedImage] = useState(null);  // State to hold selected image

  function thisFileUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  }

  return (
    <>
      <head>
        <title>Add Fertilizer</title>
      </head>
      <body>
        <div class="p-10 pt-4 mx-auto">
          <h2 className="font-bold text-xl mb-5">ข้อมูลปุ๋ย</h2>
          <form action="#">
            <div class="flex items-start mb-5">
              <label
                for="number"
                class="inline-block w-40 mr-6 text-left text-black"
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
                  onChange={thisFileUpload}
                  className="py-2 focus:border-green-400
                            text-gray-600 placeholder-gray-400
                            outline-none"
                  style={{ display: "none" }}
                />
                <button
                  id="button"
                  name="button"
                  value="Upload"
                  onClick={() => document.getElementById("file").click()}
                  class="py-2 px-6 mt-2 w-40 text-white rounded-md"
                  style={{ background: "#00A84F" }}
                >
                  เลือกรูปภาพ
                </button>
              </div>
            </div>

            {/* Rest of your form code */}
            <div class="flex items-center mb-5">
              <label for="name" class="inline-block w-40 mr-6 text-left text-black">
                รหัสสินค้า
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="กรอกรหัสสินค้า"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-40 mr-6 text-left 
                            text-black">ชื่อปุ๋ย</label>
    <input type="text" id="name" name="name" placeholder="กรอกชื่อปุ๋ย" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-40 mr-6 text-left 
                            text-black">สูตรปุ๋ย</label>
    <input type="text" id="name" name="name" placeholder="กรอกสูตรปุ๋ย" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-40 mr-6 text-left 
                            text-black">ประเภทของปุ๋ย</label>
    <input type="text" id="name" name="name" placeholder="กรอกประเภทของปุ๋ย" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="number" class="inline-block w-40 mr-6 text-left 
                            text-black">ราคาขาย</label>
    <input type="number" id="number" name="number" placeholder="กรอกราคาขาย" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
          "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="name" class="inline-block w-40 mr-6 text-left 
                            text-black">หน่วยนับ</label>
    <input type="text" id="name" name="name" placeholder="กรอกหน่วยนับ" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
                  "/>
  </div>
  <div class="flex items-center mb-5">
    <label for="number" class="inline-block w-40 mr-6 text-left 
                            text-black">ปริมาณ / นำ้หนัก</label>
    <input type="number" id="number" name="number" placeholder="กรอกปริมาณ / นำ้หนัก" 
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base text-[#737373] outline-none focus:border-[#6A64F1] focus:shadow-md
          "/>
  </div>
  <div class="text-right">
    <button class="py-2 px-6 text-white rounded-md" style={{background:"#00A84F"}}>บันทึก</button> 
    <button class="py-2 px-6 ms-4 text-black rounded-md" style={{background:"#D9D9D9"}}>ยกเลิก</button> 
  </div>

          </form>
        </div>
      </body>
    </>
  );
}
            