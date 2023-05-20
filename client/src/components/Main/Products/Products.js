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

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);
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
    <Genre categories={categories} setCategories={setCategories} />
    <Age categories={categories} setCategories={setCategories} />
    <Price categories={categories} setCategories={setCategories} />
    <Opinion categories={categories} setCategories={setCategories} />
    <Console categories={categories} setCategories={setCategories} isConsoleChecked={isConsoleChecked} setIsConsoleChecked={setIsConsoleChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
    <Exclusiveness categories={categories} setCategories={setCategories} setIsConsoleChecked={setIsConsoleChecked} isExclusivenessChecked={isExclusivenessChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
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