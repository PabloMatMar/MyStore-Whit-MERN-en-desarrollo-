import React from "react";
import { screen, render } from "@testing-library/react";
import SearchGame from "./SearchGame";

describe("SearchGame", () => {
  test("matches snapshot", () => {
    let selectedGame = {
      "image": "../assets/atari50.jpg",
      "name": "ATARI 50",
      "opinion": 4.8,
      "price": 40.11,
      "age": 16,
      "console": "Play Station 5",
      "exclusiveness": false,
      "sharedWith": ["Nintendo Switch", "Xbox Series"],
      "developers": ["Digital Eclipse"],
      "genre": ["Classic", "Platforms", "Fight"],
      "trailer": "https://www.youtube.com/embed/CQKwj_hi-Gc",
    }
    const setSelectedGame = setSelectedGame => selectedGame = setSelectedGame;
    render(<SearchGame setSelectedGame={setSelectedGame} />);
    expect(screen).toMatchSnapshot();
  });
});
