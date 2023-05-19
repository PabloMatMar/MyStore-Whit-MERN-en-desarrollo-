import React, { useEffect, useState } from "react";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import Genre from './genre.json';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({ "genre": undefined, "console": undefined, "exclusiveness": undefined, "age": { "$gte": 0 }, "price": { "$gte": 15, "$lte": 100 }, "opinion": { "$gte": 0, "$lte": 5 } });
  const [status, setStatus] = useState(0);
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
    //Seteo el valor que he cambiado junto con el resto de valores guardados en el state(contex en breve)
    setCategories({
      "genre": genreValue,
      "console": categories.console,
      "exclusiveness": categories.exclusiveness,
      "age": categories.age,
      "price": categories.price,
      "opinion": categories.opinion

    });
  };

  useEffect(() => {
    async function fetchData() {
      const query = JSON.stringify(categories);
      const res = await fetch(`http://localhost:5000/products/filter?object=${query}`);
      const data = await res.json();
      console.log(data.length);
      const status = res.status;
      setStatus(status);
      setProducts(data);
    };
    fetchData();
  }, [categories]);

  return <section>
    <form>
      <fieldset>
        <legend>Choose which filters you want to apply:</legend>
        {Genre.map(e => {
          return <div key={uuidv4()}>
            <input type="checkbox" id={e} name={e} onChange={handleOnChangeGenre} checked={isChecked[e]} />
            <label htmlFor={e}>{e}</label>
          </div>
        })}
      </fieldset>
    </form>
    {status === 200 ?
      products
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .map((product) => <Card products={product} key={uuidv4()} />) :
      <></>
    }
  </section>;

};

export default Products;