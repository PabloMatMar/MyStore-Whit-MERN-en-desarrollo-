import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TitleFormat from '../Card/TitleFormat/TitleFormat';
import SearchGame from './SearchGame/SearchGame'


const SelectedGame = ({ selected, setDevelopers }) => {
  const [object, setObject] = useState({});
  const [selectedGame, setSelectedGame] = useState();

  useEffect(() => {
    if (Object.keys(selected).length > 0)
      setSelectedGame(selected)
  }, [selected])

  useEffect(() => {
    async function fetchData() {
      if (object.name !== undefined) {
        const querys = JSON.stringify(object)
        const res = await fetch(`http://localhost:5000/products/shared?object=${querys}`);
        const data = await res.json();
        setSelectedGame(data[0]);
      }
    };
    fetchData();
  }, [object]);

  const query = (console) => {
    setObject({ "name": selectedGame.name, "console": console });
  };

  const sendParams = (devs) => {
    setDevelopers(devs);
  }

  return <>
    <SearchGame setSelectedGame={setSelectedGame} />
    {selectedGame !== undefined && selectedGame !== null ?
      <article className="selected">
        <img src={selectedGame.image} alt={selectedGame.name} width="18%" />
        <iframe width="500" height="310" src={selectedGame.trailer} title={selectedGame.name} allowFullScreen ></iframe>
        <div className="fields">
          <p>{selectedGame.sharedWith.map(e => <button onClick={() => query(e)} key={uuidv4()}>{e}</button>)}</p>
        </div>
        <div className="fields">
          <TitleFormat title={selectedGame.name} />
          <p>Opinions: {selectedGame.opinion}</p>
          <p>Price: {selectedGame.price}€</p>
          <p>Age: {selectedGame.age}</p>
          <p>Developers: {selectedGame.developers.map((e, i, arr) => {
            if (i === 0 && arr[i + 1] === undefined) return <button key={uuidv4()} onClick={() => sendParams(e)}>{e}</button>;
            if (i === 0 && arr[i + 1] !== undefined) return <button key={uuidv4()} onClick={() => sendParams(e)}>{e}, </button>;
            else if (arr[i + 1] === undefined) return <button key={uuidv4()} onClick={() => sendParams(e)}>{e}</button>;
            return <button key={uuidv4()} onClick={() => sendParams(e)}>{e}, </button>;
          })}</p>
          <p>{selectedGame.genre.map((e, i, arr) => {
            if (i === 0 && arr[i + 1] === undefined) return `Genre: ${e}`;
            if (i === 0 && arr[i + 1] !== undefined) return `Genres: ${e}, `;
            else if (arr[i + 1] === undefined) return e;
            return `${e}, `;
          })}</p>
        </div>
      </article> :
      <>SELECT A GAME!</>
    }
  </>;
};

export default SelectedGame;
