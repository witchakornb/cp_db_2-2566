'use client'
import { useState, useEffect } from "react";
import axios from 'axios';

// export default function Page() {
export default function EditFertilizer({ itemId }) {
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
      const response = await axios.post(
        'http://10.48.104.125:8080/user/show_all_item_big/updatefertilizer',
        // 'http://localhost:8080/user/show_all_item_big/updatefertilizer',
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
        const response = await axios.post(
          'http://10.48.104.125:8080/user/select_fertilizerById',
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
        const response = await axios.get(
          'http://10.48.104.125:8080/user/get_unit_for_item',
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
        const response = await axios.get(
          'http://10.48.104.125:8080/user/get_unit_for_product',
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

  // ItemUnitId[0].
  return (
    <div className='mb-16'>
      <form onSubmit={onSubmit} method="post">
        <div>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
          ) : (
            <img src={`data:image/jpeg;base64,${dataPreset.ItemPhoto}`} alt="logo" />
            // <h1>hi</h1>
          )}
          <label htmlFor="sdfsf">บันทุึกรูปภาพ: </label>
          <input type="file" name="FertilizerPhoto" accept="image/*" onChange={handleFileChange} /><br />
        </div>

        <label htmlFor="sdfsf">รหัสสินค้า: </label>
        <input type="text" name="Item_ItemId" value={dataPreset.Item_ItemId} readOnly /><br /><br />

        <label htmlFor="sdfsf">ชื่อปุ๋ย: </label>
        <input type="text" name="FertilizerName" value={dataPreset.FertilizerName} onChange={e => setDataPreset({ ...dataPreset, FertilizerName: e.target.value })} /><br /><br />

        <label htmlFor="sdfsf">ชื่อสูตรปุ๋ย: </label>
        <input type="text" name="FertilizerFormulaName" value={dataPreset.FertilizerFormulaName} onChange={e => setDataPreset({ ...dataPreset, FertilizerFormulaName: e.target.value })} /><br /><br />

        <label htmlFor="sdfsf">ประเภทของปุ๋ย: </label>
        <input type="text" name="FertilizerType" value={dataPreset.FertilizerType} onChange={e => setDataPreset({ ...dataPreset, FertilizerType: e.target.value })} /><br /><br />

        <label htmlFor="sdfsf">ราคาขาย: </label>
        <input type="number" name="FertilizerPrice" value={dataPreset.FertilizerPrice} onChange={e => setDataPreset({ ...dataPreset, FertilizerPrice: e.target.value })} min={0} /><br /><br />

        <label htmlFor="sdfsf">หน่วยนับ: </label>
        <select name="ItemUnitId">
          {ItemUnitId.map(unit => (
            <option key={unit.UnitId} value={unit.UnitId} selected={unit.UnitId === dataPreset.ItemUnitId}>
              {unit.UnitName}
            </option>
          ))}
        </select><br /><br />

        <label htmlFor="sdfsf">ปริมาณ: </label>
        <input type="number" name="FertilizerWeigth" value={dataPreset.FertilizerWeigth} onChange={e => setDataPreset({ ...dataPreset, FertilizerWeigth: e.target.value })} min={0} />

        <select className="ml-2" name="FertilizerUnitId">
          {fertilizerUnitId.map(unit => (
            <option key={unit.UnitId} value={unit.UnitId} selected={unit.UnitId === dataPreset.FertilizerUnitId}>
              {unit.UnitName}
            </option>
          ))}
        </select><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}