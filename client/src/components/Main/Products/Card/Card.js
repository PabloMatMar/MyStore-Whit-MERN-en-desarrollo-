import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ product, setSelected }) => {

  const setGame = () => {
    setSelected(product)
  };

  return <div>
    {product !== undefined ?
      <>
        <p>Name: <br />
          {product.name}
        </p>
        <p>Opinion: <br />
          {product.opinion}
        </p>
        <p>Price: <br />
          {product.price}€
        </p>
        <img src={product.image} alt={product.name} width="40%" /> <br />
        <button onClick={setGame}>Select</button>
        <Link to={'http://localhost:3000/products/' + product.id}>Details</Link>
      </> :
      <></>
    }

  </div>;
};

export default Card;