import React from "react";
import {Link} from 'react-router-dom';

const Card = ({ products }) => {
  return <div>
    {products !== undefined ?
      <>
        <p>Name: <br />
          {products.name}
        </p>
        <p>Opinion: <br />
          {products.opinion}
        </p>
        <p>Price: <br />
          {products.price}€
        </p>
        <img src={products.image} alt={products.name} width="10%"/> <br />
        <Link to={'http://localhost:3000/products/'+products.id}>Details</Link>
      </> :
      <></>
    }

  </div>;
};

export default Card;