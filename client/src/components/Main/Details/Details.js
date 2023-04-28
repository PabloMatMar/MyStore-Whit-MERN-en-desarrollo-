import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
        // eslint-disable-next-line
  }, []);

  function fetchData() {
    fetch(`http://localhost:5000/products/${id}`)
      .then(response => response.json())
      .then(product => setProduct(product[0]))
  }
  return <section>
    {product !== undefined && product.provider !== undefined ?
      <span>
        <p>Name: {product.name}</p>
        <p>Relevance: {product.relevance}</p>
        <p>Price: {product.price}€</p>
        <p>Provider: {product.provider.company_name}</p>
        <p>CIF: {product.provider.CIF}</p>
        <p>Adress: {product.provider.address}</p>
      </span>
      :
      <></>
    }
  </section>;
};

export default Detail;
