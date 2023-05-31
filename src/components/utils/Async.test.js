import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test.only("fetches and renders posts", async () => {
    // Mock the fetch request
    
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    /*
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    */


    // Assert that no posts are initially rendered
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);

    // Wait for the posts to be fetched and rendered
    await waitFor(() => {
      const updatedListItems = screen.getAllByRole("listitem");
      expect(updatedListItems).not.toHaveLength(0); // Assuming the API returns 100 posts
    });
  });
});
