import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "./index";
import "@testing-library/jest-dom";

describe("Description component", () => {
  it("renders the description text", () => {
    render(<Description />);
    const descriptionText = screen.getByText(/Another clothing brand for/i);
    
    expect(descriptionText).toBeInTheDocument();
  });

  it("has the correct CSS class", () => {
    render(<Description />);
    const descriptionText = screen.getByText(/Another clothing brand for/i);

    expect(descriptionText).toHaveClass('description');
  });
});
