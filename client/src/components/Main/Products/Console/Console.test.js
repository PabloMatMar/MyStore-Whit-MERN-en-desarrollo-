import React from "react";
import { render, screen } from '@testing-library/react';
import Console from "./Console";

describe("Console", () => {
  test("matches snapshot", () => {

    let categories = { "genre": undefined, "console": undefined, "exclusiveness": undefined, "age": { "$gte": 0 }, "price": { "$gte": 15, "$lte": 100 }, "opinion": { "$gte": 0, "$lte": 5 } };

    const setCategories = (setCategories) => {
      return categories = setCategories;
    };
    let isConsoleChecked = {
      "Play Station 5": false,
      "Xbox Series": false,
      "Nintendo Switch": false
    };
    const setIsConsoleChecked = (setIsConsoleChecked) => {
      return isConsoleChecked = setIsConsoleChecked
    }
    let isExclusivenessChecked = {
      "Play Station 5": false,
      "Xbox Series": false,
      "Nintendo Switch": false
    };
    const setIsExclusivenessChecked = (setIsExclusivenessChecked) => {
      return isExclusivenessChecked = setIsExclusivenessChecked
    };

    render(
      <Console categories={categories} setCategories={setCategories} isConsoleChecked={isConsoleChecked} setIsConsoleChecked={setIsConsoleChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
    );
    expect(screen).toMatchSnapshot();
  });
});
