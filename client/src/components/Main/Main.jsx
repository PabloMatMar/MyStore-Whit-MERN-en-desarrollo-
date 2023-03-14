import React, { useEffect, useState } from "react";
import Card from './Products/Card/Card'
import Products from './Products/Products';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';


const Main = () => {

  const [products, setProducts] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json();
    const status = res.status;
    setStatus(status)
    setProducts(data)
    console.log(data);
  }

  return <main className='main'>
    <section>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* {status === 200 ?
        <Products products={products} /> :
        <></>
      } */}
    </section>

  </main >
}


export default Main;