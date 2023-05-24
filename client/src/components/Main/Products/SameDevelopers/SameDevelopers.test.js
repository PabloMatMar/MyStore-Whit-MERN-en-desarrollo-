import React from "react";
import { render, screen } from '@testing-library/react';
import SameDevelopers from "./SameDevelopers";

describe("SameDevelopers", () => {
  test("matches snapshot", () => {

    let developers = "Insomniac Games";
    const setDevelopers = (setDevelopers) => {
      return developers = setDevelopers;
    };

    let products = {
      "image": "../assets/spiderMan.jpg",
      "name": "Spider-Man Miles Morales",
      "opinion": 4.7,
      "price": 60.25,
      "age": 16,
      "console": "Play Station 5",
      "exclusiveness": true,
      "sharedWith": [],
      "developers": ["Insomniac Games"],
      "genre": ["Adventure"],
      "trailer": "https://www.youtube.com/embed/Q3kfF3XNzw8",
    };
    const setProducts = (setProducts) => {
      return products = setProducts;
    };

    render(<SameDevelopers />);
    expect(screen).toMatchSnapshot();
  });
});
