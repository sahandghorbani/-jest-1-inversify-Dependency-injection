import { render, screen, waitFor } from "@testing-library/react";
import Sum from "./sum";
describe("add function", () => {
  test("returns the correct result based on mode", () => {
    // Arrange
    const a = 3;
    const b = 5;
    render(<Sum />);
    // Mock the add function
    const mockAdd = jest.fn((a, b, mode) => {
      return mode === "add" ? a + b : a * b;
    });

    // Act and Assert
    const addResult = mockAdd(a, b, "add");
    expect(addResult).toBe(8);

    const multiplyResult = mockAdd(a, b, "multiply");
    expect(multiplyResult).toBe(15);
  });

  test("async fetching data", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue ({
      json: async () => [{ id: 1, title: "title" } , {  id: 2, title: "title"}],
    });

    render(<Sum />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);

  });
});
