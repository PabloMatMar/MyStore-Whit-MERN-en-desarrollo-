import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import arrOfConsoles from './consoles.json';

const Console = (hookFromFather) => {
  //Hago destructuing del hookState que recibo del padre
  const { categories, setCategories } = hookFromFather;
  const [isChecked, setIsChecked] = useState({
    "Play Station 5": false,
    "Xbox Series": false,
    "Nintendo Switch": false
  });

  const handleOnChangeGenre = (event) => {
    //Controlo y cambio los valores de los atributos checked:
    let consoles = {
      "Play Station 5": isChecked["Play Station 5"],
      "Xbox Series": isChecked["Xbox Series"],
      "Nintendo Switch": isChecked["Nintendo Switch"]
    }
    isChecked[event.target.name] === false ? consoles[event.target.name] = true : consoles[event.target.name] = false;
    setIsChecked(consoles);
    //Cambio el valor del filtro de campo que voy a pasar a la peticion para mongo:
    let consoleValue;

    if (categories.console === undefined)
      consoleValue = {
        "$in": [
          event.target.name
        ]
      };
    else if (categories.console.$in.includes(event.target.name))
      categories.console.$in.length === 1 ?
        consoleValue = undefined : consoleValue = { "$in": categories.console.$in.slice(0, [categories.console.$in.indexOf(event.target.name)]).concat(categories.console.$in.slice([categories.console.$in.indexOf(event.target.name)] + 1)) };
    else if (!(categories.console.$in.includes(event.target.name)))
      consoleValue = {
        "$in": [...categories.console.$in, event.target.name]
      };
    //Seteo el valor que he cambiado junto con el resto de valores guardados en el state del PADRE.
    setCategories({
      "genre": categories.genre,
      "console": consoleValue,
      "exclusiveness": categories.exclusiveness,
      "age": categories.age,
      "price": categories.price,
      "opinion": categories.opinion

    });
  };

  return <form>
    <fieldset>
      <legend>Filter by game consoles:</legend>
      {arrOfConsoles.map(e => {
        return <div key={uuidv4()}>
          <input type="checkbox" id={e} name={e} onChange={handleOnChangeGenre} checked={isChecked[e]} />
          <label htmlFor={e}>{e}</label>
        </div>
      })}
    </fieldset>
  </form>;
};

export default Console;
