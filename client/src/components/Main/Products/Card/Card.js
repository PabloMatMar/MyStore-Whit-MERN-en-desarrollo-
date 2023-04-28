import React from "react";
import {Link} from 'react-router-dom';

const Card = ({ products }) => {
  return <div>
    {products !== undefined ?
      <>
        <p>Name: <br />
          {products.name}
        </p>
        <p>Relevance: <br />
          {products.relevance}
        </p>
        <p>Price: <br />
          {products.price}€
        </p>
        <img src={products.image} alt={products.name}/>
        <Link to={'http://localhost:3000/products/'+products.id}>Details</Link>
      </> :
      <></>
    }

  </div>;
};

export default Card;