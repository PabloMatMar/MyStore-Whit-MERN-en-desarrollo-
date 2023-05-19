import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Genre from "./Genre";


describe("Genre", () => {
  test("matches snapshot", () => {

    let categories = { "genre": undefined, "console": undefined, "exclusiveness": undefined, "age": { "$gte": 0 }, "price": { "$gte": 15, "$lte": 100 }, "opinion": { "$gte": 0, "$lte": 5 } };

    const setCategories = (setCategories) => {
      return categories = setCategories;
    };

    render(
      <Genre categories={categories} setCategories={setCategories} />
    );
    expect(screen).toMatchSnapshot();
  });
});
