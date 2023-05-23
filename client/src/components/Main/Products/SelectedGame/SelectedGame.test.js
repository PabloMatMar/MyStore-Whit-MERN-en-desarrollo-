import React from "react";
import { render, screen } from '@testing-library/react';
import SelectedGame from "./SelectedGame";

describe("SelectedGame", () => {
  test("matches snapshot", () => {
    const selected = {
      "image": "../assets/mortalKombatUltimateX.jpg",
      "name": "MORTAL KOMBAT ULTIMATE",
      "opinion": 4.7,
      "price": 29.09,
      "age": 18,
      "console": "Xbox Series",
      "exclusiveness": false,
      "sharedWith": ["Play Station 5", "Nintendo Switch"],
      "developers": ["NetherRealm Studios", "Shiver Entertainment", "QLOC"],
      "genre": ["Fight", "Adventure"],
      "trailer": "https://www.youtube.com/embed/vhjoNZIogRA"
    }
    render(<SelectedGame selected={selected} />);
    expect(screen).toMatchSnapshot();
  });
});
