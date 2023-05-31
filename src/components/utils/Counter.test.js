import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  test("renders initial count", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  test("increments count on button click", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    const buttonElement = screen.getByRole("button", { name: "increment" });

    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent("1");
  });
});
