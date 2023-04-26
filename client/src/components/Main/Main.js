import React from "react";
import Products from './Products/Products';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';


const Main = () => {

  return <main className='main'>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
  </main >
};


export default Main;