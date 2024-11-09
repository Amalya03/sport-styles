import React, { useState } from "react";
import classes from "./filterByCategories.module.css";
import Modals from "../../../../../components/modal";
import categories from "../../../../../data/categories.json";
import { Button } from "../../../../../components/buttons";

const FilterByCategories = ({ category, onChange, filterByCategories }) => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const categoriesData = categories.categories;

  const handleCategoryChange = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div>
      <button className={classes.button} onClick={() => setShow(true)}>
        <img
          className={classes.filterImage}
          src="../assets/products/filter.svg"
          alt=""
        />
      </button>
      {show && (
        <Modals showModal={show} onHide={() => setShow(false)}>
          {categoriesData.map((item, index) => (
            <div
              className={`d-flex ${classes.checkboxContainer}`}
              key={`${item}_${index}`}
            >
              <input
                id={`productCategory_${index}`}
                type="checkbox"
                value={item}
                checked={category === item}
                onChange={(e) => {
                  handleCategoryChange(item);
                  onChange(e);
                }}
              />
              <label htmlFor={`productCategory_${index}`}>{item}</label>
            </div>
          ))}
          <div className={classes.actionButton}>
            <Button text="Close" onClick={() => setShow(false)} />
            <Button
              status={true}
              text="Apply"
              onClick={() => {
                filterByCategories(selectedCategory);
                setShow(false);
              }}
            />
          </div>
        </Modals>
      )}
    </div>
  );
};

export default FilterByCategories;
