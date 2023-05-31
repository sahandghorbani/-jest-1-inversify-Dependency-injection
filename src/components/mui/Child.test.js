import React from "react";
import { render, screen } from "@testing-library/react";
import Muimode from "./mui.mode";
import AppProvider from "../../providers/app.provider";

test('renders with "dark" mode theme', () => {
  render(<Muimode />, { wrapper: AppProvider });
  const modeElement = screen.getByRole("heading", { level: 2 });
  expect(modeElement).toHaveTextContent("dark mode from child" , {exact:false});
});
