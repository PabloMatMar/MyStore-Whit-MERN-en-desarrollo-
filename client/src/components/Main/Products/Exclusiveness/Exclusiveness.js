import React from "react";
import { v4 as uuidv4 } from 'uuid';
import arrOfConsoles from '../Console/consoles.json';


const Exclusiveness = (hooksFromFather) => {
  //Hago destructuing de los hookState que recibo del padre
  const { categories, setCategories, setIsConsoleChecked, isExclusivenessChecked, setIsExclusivenessChecked } = hooksFromFather;


  const handleOnChangeGenre = (event) => {
    //Controlo y cambio los valores de los atributos checked:
    let exclusiveness = {
      "Play Station 5": isExclusivenessChecked["Play Station 5"],
      "Xbox Series": isExclusivenessChecked["Xbox Series"],
      "Nintendo Switch": isExclusivenessChecked["Nintendo Switch"]
    }
    isExclusivenessChecked[event.target.name] === false ? exclusiveness[event.target.name] = true : exclusiveness[event.target.name] = false;
    setIsExclusivenessChecked(exclusiveness);
    //Cambio el valor del filtro de campo que voy a pasar a la peticion para mongo:
    let exclusivenessValue = categories.exclusiveness;
    let consoleValue;

    if (categories.exclusiveness === undefined) {
      //Seteo a false los checklist de consolas y seteo el valor de las mismas a la pulsada en exclusiveness
      // ya que o buscas por exclusivos o por genericos pero no ambas ya que carece de sentido.
      setIsConsoleChecked({
        "Play Station 5": false,
        "Xbox Series": false,
        "Nintendo Switch": false
      });
      exclusivenessValue = true;
      consoleValue = {
        "$in": [
          event.target.name
        ]
      };
    } else if (categories.console.$in.includes(event.target.name)) {
      if (categories.console.$in.length === 1) {
        exclusivenessValue = undefined;
        consoleValue = undefined;
      } else
        consoleValue = { "$in": categories.console.$in.slice(0, [categories.console.$in.indexOf(event.target.name)]).concat(categories.console.$in.slice(categories.console.$in.indexOf(event.target.name) + 1)) };
    } else if (!(categories.console.$in.includes(event.target.name)))
      consoleValue = {
        "$in": [...categories.console.$in, event.target.name]
      };
    //Seteo el valor que he cambiado junto con el resto de valores guardados en el state del PADRE.
    setCategories({
      "genre": categories.genre,
      "console": consoleValue,
      "exclusiveness": exclusivenessValue,
      "age": categories.age,
      "price": categories.price,
      "opinion": categories.opinion

    });
  };

  return <form>
    <fieldset>
      <legend>Filter by game exclusiveness:</legend>
      {arrOfConsoles.map(e => {
        return <div key={uuidv4()}>
          <input type="checkbox" id={`${e} exclusive`} name={e} onChange={handleOnChangeGenre} checked={isExclusivenessChecked[e]} />
          <label htmlFor={e}>{e}</label>
        </div>
      })}
    </fieldset>
  </form>;
};

export default Exclusiveness;
