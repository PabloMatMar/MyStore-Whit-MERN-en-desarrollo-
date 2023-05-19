import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Genre from './Genre/Genre';
import Age from './Age/Age';
import Price from './Price/Price';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({ "genre": undefined, "console": undefined, "exclusiveness": undefined, "age": { "$lte": 18 }, "price": { "$gte": 15, "$lte": 100 }, "opinion": { "$gte": 0, "$lte": 5 } });
  const [status, setStatus] = useState(0);

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
    <Genre categories={categories} setCategories={setCategories}/>
    <Age categories={categories} setCategories={setCategories}/>
    <Price categories={categories} setCategories={setCategories}/>
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