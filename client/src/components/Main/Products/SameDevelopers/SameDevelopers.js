import React, { useState, useEffect } from "react";

const SameDevelopers = ({ setDevelopers, developers, setProducts, products }) => {
  const [saveProducts, setSaveProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      if (developers !== undefined) {
        const res = await fetch('http://localhost:5000/products/developers/:' + developers);
        const data = await res.json();
        setSaveProducts(products);
        setProducts(data);
      }
    };
    fetchData();
  }, [developers, setProducts, products]);

  const resetCategories = () => {
    setDevelopers(undefined);
    setProducts(saveProducts);
  }


  return <>{developers !== undefined ? <button onClick={resetCategories}>Reset Filters</button> : <></>}</>;
};

export default SameDevelopers;
