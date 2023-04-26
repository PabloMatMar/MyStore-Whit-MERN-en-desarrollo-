import React from "react";
import { screen, render } from "@testing-library/react";
import Products from "./Products";

describe("Products", () => {
  test("matches snapshot", () => {
    render(<Products />);
    expect(screen).toMatchSnapshot();
  });
});
