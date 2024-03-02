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
                const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}`);
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
                            key={ }>
                            {item.full_name}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TestS2;