import React from "react";
import { render, screen } from '@testing-library/react';
import TitleFormat from "./TitleFormat";

describe("TitleFormat", () => {
  test("matches snapshot", () => {
    const title = "Like A Dragon: Ishin"
    render(<TitleFormat title={title}/>);
    expect(screen).toMatchSnapshot();
  });
});
