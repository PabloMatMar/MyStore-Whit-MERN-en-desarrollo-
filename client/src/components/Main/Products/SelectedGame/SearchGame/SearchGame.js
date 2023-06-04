import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import namesGames from './NamesGames.json';

const SearchGame = ({ setSelectedGame }) => {

  const [nameGame, setNameGame] = useState();
  const [consolesSelect, setConsolesSelect] = useState();

  const handleChange = event => setNameGame(event.target.value);

  useEffect(() => {
    const fetchData = async () => {
      if (nameGame !== undefined) {
        const res = await fetch(`http://localhost:5000/products/name/:${nameGame}`);
        const data = await res.json();
        console.log(data, data.map(e => e.console))
        data.length > 1 ? setConsolesSelect([data, data.map(e => e.console)]) :
          setSelectedGame(data[0]);
        setNameGame(undefined);
        console.log(consolesSelect)
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [nameGame, setNameGame])

  const handleChangeConsole = event => setSelectedGame(consolesSelect[0].filter(e => e.console === event.target.value)[0]);

  return <form>
    <select placeholder="Select A Game" onChange={(event) => handleChange(event)}>
      <option defaultValue="Select a Game">Select a Game</option>
      {namesGames.names.map((name) => <option value={name} key={uuidv4()}>{name}</option>)}
    </select>
    {consolesSelect !== undefined ?
      <select placeholder="What console do you want it for?" onChange={(event) => handleChangeConsole(event)}>
        <option defaultValue="Select a Console">Select a Console</option>
        {consolesSelect[1].map((console) => <option value={console} key={uuidv4()}>{console}</option>)}
      </select> : <></>}
  </form>;
};

export default SearchGame;
