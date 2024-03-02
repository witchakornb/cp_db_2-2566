import React, { useEffect, useState } from 'react';
import styles from "./sale_history.css";

const TestS2 = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);

        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.199.120.125:8080/admin/show_all_item');
                const salesWithData = response.data.Fertilizer.map(sale => ({ ...sale, isDropdownOpen: false }));
                setSalesData(salesWithData || []);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchData();
    }

    return (
        <div class="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
            <div className='search-inner'>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={() => onSearch(value)}>Search</button>
            </div>
            <div className='dropdown'>
                {data
                    .filter(item => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.Item_ItemId.toLowerCase();

                        return searchTerm && fullName.startsWith(searchTerm) && fullName != searchTerm;
                    })
                    .map((item) => (
                        <div onClick={() => onSearch(item.full_name)}
                            className='dropdown-row'
                            key={}>
                            {item.full_name}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TestS2;