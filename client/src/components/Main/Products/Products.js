import React, { useEffect, useState } from "react";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const Products = () => {

  const [products, setProducts] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json();
    const status = res.status;
    setStatus(status);
    setProducts(data);
  }

  return <section>
      {status === 200 ?
        products.map((product) => <Card products={product} key={uuidv4()} />) :
        <></>
      } 
  </section>;

};

export default Products;