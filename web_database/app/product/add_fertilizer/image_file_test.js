'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Choose_image() {
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

  const handleSubmit = async () => {
    if (!base64String) {
      console.error('Please select an image first.');
      return;
    }


    const output = {
      Item_ItemId: "I000000003",
      OtherName: "เสื้้อสวย มาก",
      OtherType: "เสื้้อ",
      OtherSize: "xl",
      OtherPrice: 300,
      UnitName: "kg",
      OtherWeigth: 30,
      OtherPhoto: base64String,
    }

    try {
      const response = await axios.post('http://localhost:8080/user/show_all_item_big/updateother',
        output,
        {
          withCredentials: true,
        }
      )

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='text-center'>
      <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
      <button type="submit" onClick={handleSubmit} className='bg-orange-400 p-2 rounded-2xl'>Submit</button>
    </div>
  );
}