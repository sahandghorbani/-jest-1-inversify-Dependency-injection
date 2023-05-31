import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterTwo from "./CounterTwoProps";

describe("CounterTwo component", () => {
  test("renders with props and handles increment and decrement", () => {
    //setup mook data
    let mookData = 10;
    let mookIncrementHandler = jest.fn();
    let mookDecrementHandler = jest.fn();

    render(
      <CounterTwo
        handleIncrement={mookIncrementHandler}
        handleDecrement={mookDecrementHandler}
        count={mookData}
      />
    );

    const element = screen.getByText(mookData);
    expect(element).toBeInTheDocument();

    //user action button
    let incBtn = screen.getByRole('button' , {name:'increment'})
    let decBtn = screen.getByRole('button' , {name:'decrement'})

    userEvent.click(incBtn)
    expect(mookIncrementHandler).toBeCalled() ;

    userEvent.click(decBtn)
    expect(mookDecrementHandler).toBeCalled() ;
  });
});
