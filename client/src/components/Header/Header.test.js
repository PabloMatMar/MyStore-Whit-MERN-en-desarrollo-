import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
