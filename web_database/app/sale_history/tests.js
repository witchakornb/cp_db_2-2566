import React, { useEffect } from 'react';
import styles from "./sale_history.css";

const TestS = () => {
    let countries = [
        { name: "Afghanistan", code: "AF" },
        { name: "Banana", code: "AX" },
        { name: "Rose", code: "AL" },
    ];

    useEffect(() => {
        renderOptions(countries);
    }, []);

    const onkeyUp = (e) => {
        let keyword = e.target.value;
        let dropdownEl = document.querySelector("#dropdown");
        dropdownEl.classList.remove("hidden");
        let filteredCountries = countries.filter((c) =>
            c.name.toLowerCase().includes(keyword.toLowerCase())
        );

        renderOptions(filteredCountries);
    };

    const renderOptions = (options) => {
        let dropdownEl = document.querySelector("#dropdown");

        let newHtml = ``;

        options.forEach((country) => {
            newHtml += `<div
          onclick="selectOption('${country.name}')"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
        >
          ${country.name}
        </div>`;
        });

        dropdownEl.innerHTML = newHtml;
    };

    const selectOption = (selectedOption) => {
        hideDropdown();
        let input = document.querySelector("#autocompleteInput");
        input.value = selectedOption;
    };

    const hideDropdown = () => {
        let dropdownEl = document.querySelector("#dropdown");
        dropdownEl.classList.add("hidden");
    };

    return (
        <div class="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
            <div class="w-96 relative" onClick={(e) => e.stopPropagation()}>
                <input
                    id="autocompleteInput"
                    placeholder="Select country name"
                    class="px-5 py-3 w-full border border-gray-300 rounded-md"
                    onKeyUp={(e) => onkeyUp(e)}
                />
                <div
                    id="dropdown"
                    class="w-full h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto hidden"
                ></div>
            </div>
        </div>
    );
};

export default TestS;