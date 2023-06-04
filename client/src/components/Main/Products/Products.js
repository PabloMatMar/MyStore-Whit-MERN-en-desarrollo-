import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Genre from './Genre/Genre';
import Age from './Age/Age';
import Price from './Price/Price';
import Opinion from './Opinion/Opinion';
import Console from './Console/Console';
import Exclusiveness from './Exclusiveness/Exclusiveness';
import SelectedGame from './SelectedGame/SelectedGame';
import SameDevelopers from './SameDevelopers/SameDevelopers';

const Products = () => {

  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [selected, setSelected] = useState({});

  const [products, setProducts] = useState([]);
  const [developers, setDevelopers] = useState();
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
      if (developers === undefined) {
        const filtersForFields = JSON.stringify(categories);
        const res = await fetch(`http://localhost:5000/products/filter?object=${filtersForFields}&skip=${skip}&limit=${limit}`);
        const data = await res.json();
        console.log(data.length);
        setProducts(data);
      };
    };
    fetchData();
  }, [categories, skip, limit, developers]);

  const nextPage = () => {
    setSkip(skip + limit)
  };

  const previousPage = () => {
    setSkip(skip - limit)
  };

  const reset = () => {
    setSkip(0)
  };

  return <section className='products'>
    <article className='box1'>
      <Genre categories={categories} setCategories={setCategories} />
      <Age categories={categories} setCategories={setCategories} />
      <Price categories={categories} setCategories={setCategories} />
      <Opinion categories={categories} setCategories={setCategories} />
      <Console categories={categories} setCategories={setCategories} isConsoleChecked={isConsoleChecked} setIsConsoleChecked={setIsConsoleChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
      <Exclusiveness categories={categories} setCategories={setCategories} setIsConsoleChecked={setIsConsoleChecked} isExclusivenessChecked={isExclusivenessChecked} setIsExclusivenessChecked={setIsExclusivenessChecked} />
    </article>
    <article className='box2'>
      <article>
        <SelectedGame selected={selected} setDevelopers={setDevelopers} />
      </article>
      <article className='lineProducts'>
        {developers !== undefined ? <SameDevelopers developers={developers} setProducts={setProducts} setDevelopers={setDevelopers} products={products}/> : <></>}
        {products.length > 0 ?
          <>
            {products.map(product => <Card product={product} setSelected={setSelected} key={uuidv4()} />)}
            <div className='buttons'>
              {skip <= 185 ? <button onClick={nextPage}> Next Page </button> : <></>}
              {skip > 0 ? <button onClick={previousPage}> Previous Page </button> : <></>}
            </div>
            {/* El div de abajo es simplemente para mantener el tamaño de las targetas en caso de no haber 5*/}
            {products.length < 5 ? <div></div> : <></>}
          </>
          :
          <div>
            <p>There are no more products with the selected categories, change the categories or click on Reset button</p>
            <button onClick={reset}>Reset</button>
          </div>
        }
      </article>
    </article>
  </section>;

};

export default Products;