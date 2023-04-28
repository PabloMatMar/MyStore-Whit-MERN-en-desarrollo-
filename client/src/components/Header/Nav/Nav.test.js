import React from "react";
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
