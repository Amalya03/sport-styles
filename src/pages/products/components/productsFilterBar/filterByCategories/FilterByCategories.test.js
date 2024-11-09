import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterByCategories from "./index";
import categories from "../../../../../data/categories.json";

describe("FilterByCategories", () => {
  const mockOnChange = jest.fn();
  const mockFilterByCategories = jest.fn();

  test("Button click opens modal", () => {
    render(
      <FilterByCategories
        category=""
        onChange={mockOnChange}
        filterByCategories={mockFilterByCategories}
      />
    );
    const openModalButton = screen.getByRole("button");
    fireEvent.click(openModalButton);
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  test("Categories are displayed correctly in the modal", () => {
    render(
      <FilterByCategories
        category="Running"
        onChange={mockOnChange}
        filterByCategories={mockFilterByCategories}
      />
    );
    const openModalButton = screen.getByRole("button");
    fireEvent.click(openModalButton);
    categories.categories.forEach((category) => {
      expect(screen.getByLabelText(category)).toBeInTheDocument();
    });
  });

  test("Changing the category selection works.", () => {
    render(
      <FilterByCategories
        category=""
        onChange={mockOnChange}
        filterByCategories={mockFilterByCategories}
      />
    );
    const openModalButton = screen.getByRole("button");
    fireEvent.click(openModalButton);
    const categoryCheckbox = screen.getByLabelText(categories.categories[0]);
    fireEvent.click(categoryCheckbox);
    expect(mockOnChange).toHaveBeenCalled();
  });

  test("The Close button closes the modal.", () => {
    render(
      <FilterByCategories
        category=""
        onChange={mockOnChange}
        filterByCategories={mockFilterByCategories}
      />
    );
    const openModalButton = screen.getByRole("button");
    fireEvent.click(openModalButton);
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });

  test("The Apply button calls the filterByCategories function.", () => {
    render(
      <FilterByCategories
        category=""
        onChange={mockOnChange}
        filterByCategories={mockFilterByCategories}
      />
    );
    const openModalButton = screen.getByRole("button");
    fireEvent.click(openModalButton);
    const applyButton = screen.getByText("Apply");
    fireEvent.click(applyButton);
    expect(mockFilterByCategories).toHaveBeenCalled();
  });
});
