import React from "react";
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Card", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      name: "Gatonico",
      relevance: 146789,
      price: 5678,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU"
    }
    render(
      <BrowserRouter>
        <Card products={simulatedProps} />
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
