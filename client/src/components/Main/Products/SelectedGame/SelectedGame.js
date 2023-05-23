import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TitleFormat from "../Card/TitleFormat/TitleFormat";

const SelectedGame = ({ selected }) => {
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

  return <>
    {selectedGame !== undefined && selectedGame !== null ?
      <article className="selected">
        <img src={selectedGame.image} alt={selectedGame.name} width="18%" />
        <iframe width="400" height="200" src={selectedGame.trailer} title={selectedGame.name} allowFullScreen ></iframe>
        <div className="fields">
          <p>{selectedGame.sharedWith.map(e => <button onClick={() => query(e)} key={uuidv4()}>{e}</button>)}</p>
        </div>
        <div className="fields">
          <TitleFormat title={selectedGame.name} />
          <p>Opinions: {selectedGame.opinion}</p>
          <p>Price: {selectedGame.price}€</p>
          <p>Age: {selectedGame.age}</p>
          <p>developers:</p>
          <p>{selectedGame.developers.map((e, i, arr) => {
            return i !== arr.length - 1 ? `${e}, ` : e
          })}</p>
          <p>{selectedGame.genre.map((e, i, arr) => {
            return i !== arr.length - 1 ? `${e}, ` : e
          })}</p>
        </div>
      </article> :
      <>SELECT A GAME!</>
    }
  </>;
};

export default SelectedGame;
