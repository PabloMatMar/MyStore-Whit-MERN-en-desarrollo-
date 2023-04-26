import React from "react";

const Card = ({ products }) => {
  console.log("****")
  console.log(products)
  console.log("****")

  return <div>

    {products !== undefined ?
      <span>
        <p>Name: <br />
          {products.name}
        </p>
        <p>Relevance: <br />
          {products.relevance}
        </p>
        <p>Price: <br />
          {products.price}€
        </p>
        <img src={products.image}/>
        <a href={'http://localhost:3000/products/'+products.id}>Details</a>
      </span> :
      <></>
    }

  </div>;
};

export default Card;