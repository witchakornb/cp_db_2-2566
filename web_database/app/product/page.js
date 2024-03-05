'use client'
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Page() {
  const [fertilizerUnitId, setfertilizerUnitId] = useState([]);
  const [ItemUnitId, setItemUnitId] = useState([]);
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
      FertilizerName: form.FertilizerName.value,
      FertilizerFormulaName: form.FertilizerFormulaName.value,
      FertilizerType: form.FertilizerType.value,
      FertilizerPrice: parseFloat(form.FertilizerPrice.value),
      FertilizerUnitId: parseInt(form.FertilizerUnitId.value),
      ItemUnitId: parseInt(form.ItemUnitId.value),
      FertilizerWeigth: parseFloat(form.FertilizerWeigth.value),
      FertilizerPhoto: base64String,
    };
    try {
      const response = await axios.post(
        'http://10.48.104.125:8080/user/insert_fertilizer',
        output,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ItemId = await axios.get(
          'http://10.48.104.125:8080/user/get_item_name_for_fertilizer',
          {
            withCredentials: true,
          }
        );
        setItemId(ItemId.data.ItemId);
        fertilizerUnitId
      } catch (error) {
        console.error('Error:', error);
      }
      // -------------------
      try {
        const response = await axios.get(
          'http://10.48.104.125:8080/user/get_unit_for_item',
          {
            withCredentials: true,
          }
        );
        setItemUnitId(response.data);
        fertilizerUnitId
      } catch (error) {
        console.error('Error:', error);
      }
      // -------------------
      try {
        const response = await axios.get(
          'http://10.48.104.125:8080/user/get_unit_for_product',
          {
            withCredentials: true,
          }
        );
        setfertilizerUnitId(response.data);
        fertilizerUnitId
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

      setSelectedFile(image);
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(image);
  };


  return (
    <div className='mb-16'>
      <form onSubmit={onSubmit} method="post">
        <div>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
          ) : (
            <img src="/logo.jpg" alt="logo" />

          )}
          <label htmlFor="sdfsf">บันทุึกรูปภาพ: </label>
          <input type="file" name="FertilizerPhoto" accept="image/*" onChange={handleFileChange} /><br />
        </div>

        <label htmlFor="sdfsf">รหัสสินค้า: </label>
        <input type="text" name="Item_ItemId" value={ItemId} readOnly /><br /><br />

        <label htmlFor="sdfsf">ชื่อปุ๋ย: </label>
        <input type="text" name="FertilizerName" /><br /><br />

        <label htmlFor="sdfsf">ชื่อสูตรปุ๋ย: </label>
        <input type="text" name="FertilizerFormulaName" /><br /><br />

        <label htmlFor="sdfsf">ประเภทของปุ๋ย: </label>
        <input type="text" name="FertilizerType" /><br /><br />

        <label htmlFor="sdfsf">ราคาขาย: </label>
        <input type="number" name="FertilizerPrice" min={0} /><br /><br />

        <label htmlFor="sdfsf">หน่วยนับ: </label>
        <select name="ItemUnitId">
          {ItemUnitId.map(unit => (
            <option key={unit.UnitId} value={unit.UnitId}>
              {unit.UnitName}
            </option>
          ))}
        </select><br /><br />

        <label htmlFor="sdfsf">ปริมาณ: </label>
        <input type="number" name="FertilizerWeigth" min={0} />

        <select className="ml-2" name="FertilizerUnitId">
          {fertilizerUnitId.map(unit => (
            <option key={unit.UnitId} value={unit.UnitId}>
              {unit.UnitName}
            </option>
          ))}
        </select><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}