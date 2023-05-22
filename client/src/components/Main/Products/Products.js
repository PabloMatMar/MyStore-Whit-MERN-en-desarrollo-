import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Genre from './Genre/Genre';
import Age from './Age/Age';
import Price from './Price/Price';
import Opinion from './Opinion/Opinion';
import Console from './Console/Console';
import Exclusiveness from './Exclusiveness/Exclusiveness';

const Products = () => {

  // const [users, setUsers] = useState([]);
  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);

  const [products, setProducts] = useState([]);
  // const [status, setStatus] = useState(0);
  //Este hook se pasa a cada hijo de este componente para que sete los valores en los filtros de campo para la peticion al backend
  const [categories, setCategories] = useState({ "genre": undefined, "console": undefined, "exclusiveness": undefined, "age": { "$lte": 18 }, "price": { "$gte": 15, "$lte": 100 }, "opinion": { "$gte": 0, "$lte": 5 } });
  //Los siguientes dos hooks se pasan  ambos a dos hijos que requieren comunicacion sibling-sibling 
  const [isConsoleChecked, setIsConsoleChecked] = useState({
    "Play Station 5": false,
    "Xbox Series": false,
    "Nintendo Switch": false
  });
  const [isExclusivenessChecked, setIsExclusivenessChecked] = useState({
    "Play Station 5": false,
    "Xbox Series": false,
    "Nintendo Switch": false
  });


  useEffect(() => {
    //object = JSON con todos los parametros para filtrar por campos en mongo.
    //skip = indice desde el cual quiero que mongo empiece a devolver objetos.
    //limit = cantidad de objetos a devolver.
    async function fetchData() {
      const filtersForFields = JSON.stringify(categories);
      const res = await fetch(`http://localhost:5000/products/filter?object=${filtersForFields}&skip=${skip}&limit=${limit}`);
      const data = await res.json();
      console.log(data.length);
      setProducts(data);
    };
    fetchData();
  }, [categories, skip, limit]);

  const nextPage = () => {
    setSkip(skip + limit)
  };

  const previousPage = () => {
    setSkip(skip - limit)
  };

  const reset = () => {
    setSkip(0)
  };

  return <section>
    <Genre categories={categories} setCategories={setCategories} />
    <Age categories={categories} setCategories={setCategories} />
    <Price categories={categories} setCategories={setCategories} />
    <Opinion categories={categories} setCategories={setCategories} />
    <Console categories={categories} setCategories={setCategories} isConsoleChecked={isConsoleChecked} setIsConsoleChecked={setIsConsoleChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
    <Exclusiveness categories={categories} setCategories={setCategories} setIsConsoleChecked={setIsConsoleChecked} isExclusivenessChecked={isExclusivenessChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
    {products.length > 0 ?
      <div>
        {products.map((product) => <Card products={product} key={uuidv4()} />)}
        {skip > 0 ? <button onClick={previousPage}> Previous Page </button> : <></>}
        {skip <= 185 ? <button onClick={nextPage}> Next Page </button> : <></>}
      </div>
      :
      <div>
        <p>There are no more products with the selected categories, change the categories or click on Reset button</p>
        <button onClick={reset}>Reset</button>
      </div>
    }
  </section>;

};

export default Products;