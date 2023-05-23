import React from "react";
import { Link } from 'react-router-dom';
import TitleFormat from "./TitleFormat/TitleFormat";

const Card = ({ product, setSelected }) => {

  const setGame = () => {
    setSelected(product)
  };

  return <div>
    {product !== undefined ?
      <>
        <TitleFormat title={product.name}/>
        <p>Opinion:</p>
        <p>{product.opinion}</p>
        <p>Price:</p>
        <p>{product.price}€</p>
        <img src={product.image} alt={product.name} width="40%" /> <br />
        <button onClick={setGame}>Select</button>
        <Link to={'http://localhost:3000/products/' + product.id}>Details</Link>
      </> :
      <></>
    }

  </div>;
};

export default Card;