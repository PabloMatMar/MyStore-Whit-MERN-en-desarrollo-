import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import arrOfGenres from './genre.json';

const Genre = (hookFromFather) => {
  //Hago destructuing del hookState que recibo del padre
  const { categories, setCategories } = hookFromFather;
  const [isChecked, setIsChecked] = useState({
    "Adventure": false,
    "Classic": false,
    "Fight": false,
    "Horror": false,
    "Open World": false,
    "Platforms": false,
    "Racing": false,
    "Rol": false,
    "Shooter": false,
    "Sports": false,
    "Strategy": false
  });

  const handleOnChangeGenre = (event) => {
    //Controlo y cambio los valores de los atributos checked:
    let genres = {
      "Adventure": isChecked.Adventure,
      "Classic": isChecked.Classic,
      "Fight": isChecked.Fight,
      "Horror": isChecked.Horror,
      "Open World": isChecked["Open World"],
      "Platforms": isChecked.Platforms,
      "Racing": isChecked.Racing,
      "Rol": isChecked.Rol,
      "Shooter": isChecked.Shooter,
      "Sports": isChecked.Sports,
      "Strategy": isChecked.Strategy
    }
    isChecked[event.target.name] === false ? genres[event.target.name] = true : genres[event.target.name] = false;
    setIsChecked(genres);
    //Cambio el valor del filtro de campo que voy a pasar a la peticion para mongo:
    let genreValue;

    if (categories.genre === undefined)
      genreValue = {
        "$in": [
          event.target.name
        ]
      };
    else if (categories.genre.$in.includes(event.target.name))
      categories.genre.$in.length === 1 ?
        genreValue = undefined : genreValue = { "$in": categories.genre.$in.slice(0, [categories.genre.$in.indexOf(event.target.name)]).concat(categories.genre.$in.slice([categories.genre.$in.indexOf(event.target.name)] + 1)) };
    else if (!(categories.genre.$in.includes(event.target.name)))
      genreValue = {
        "$in": [...categories.genre.$in, event.target.name]
      };
    //Seteo el valor que he cambiado junto con el resto de valores guardados en el state del PADRE.
    setCategories({
      "genre": genreValue,
      "console": categories.console,
      "exclusiveness": categories.exclusiveness,
      "age": categories.age,
      "price": categories.price,
      "opinion": categories.opinion

    });
  };

  return <form>
    <fieldset>
      <legend>Choose which filters you want to apply:</legend>
      {arrOfGenres.map(e => {
        return <div key={uuidv4()}>
          <input type="checkbox" id={e} name={e} onChange={handleOnChangeGenre} checked={isChecked[e]} />
          <label htmlFor={e}>{e}</label>
        </div>
      })}
    </fieldset>
  </form>;
};

export default Genre;
