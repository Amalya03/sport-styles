import React, { useState } from "react";

import Search from "../../../../components/search";
import Select from "../../../../components/select";

import classes from "../../Products.module.css";
import FilterByCategories from "./filterByCategories";

const ProductFilterBar = ({ data, setFilteredData, setShow }) => {
  const [text, setText] = useState("Sort by manufacturer");
  const [category, setCategory] = useState(
    localStorage.getItem("category") ?? ""
  );

  const filterProducts = (value, key) => {
    const filteredData = data.filter((item) =>
      item[key]?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const onChange = (e) => {
    if (e.target.value === category) {
      setCategory("");
      localStorage.removeItem("category", e.target.value);
    } else {
      setCategory(e.target.value);
      localStorage.setItem("category", e.target.value);
    }
  };

  const filterByCategories = () => {
    const filteredData = data.filter((item) => item.category === category);
    category !== "" ? setFilteredData(filteredData) : setFilteredData(data);
  };

  return (
    <div className="w-100 d-flex justify-content-start align-items-center position-relative ">
      <div className={`d-flex ${classes.container}`}>
        <Search onChange={(e) => filterProducts(e.target.value, "title")} />
        <button
          onClick={() => setShow("add")}
          className={`bg-transparent border-0 ${classes.img_container}`}
        >
          <img src="./assets/products/add.png" alt="add" />
        </button>
      </div>
      <FilterByCategories
        category={category}
        onChange={onChange}
        filterByCategories={filterByCategories}
      />
      <Select
        text={text}
        filterByManufacturer={(value) => {
          filterProducts(value, "brand");
          setText(value);
        }}
      />
    </div>
  );
};

export default ProductFilterBar;
