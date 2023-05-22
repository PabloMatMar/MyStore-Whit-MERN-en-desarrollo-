import React from "react";

const Price = (hookFromFather) => {
  const { categories, setCategories } = hookFromFather;

  const handleOnChangeGenre = (event) => {
    console.log(event.target.name)
    let minPriceValue = categories.price.$gte;
    let maxPriceValue = categories.price.$lte;
    event.target.name == "minPrice" ? minPriceValue = event.target.value : maxPriceValue = event.target.value;
    setCategories({
      "genre": categories.genre,
      "console": categories.console,
      "exclusiveness": categories.exclusiveness,
      "age": categories.age,
      "price": { "$gte": minPriceValue, "$lte": maxPriceValue },
      "opinion": categories.opinion
    });
  };

  return <form>
    <fieldset>
      <legend>choose minimum price</legend>
      <input type="number" id="minPrice" name="minPrice" onChange={handleOnChangeGenre} min="15" max="100" defaultValue="15" />
      <legend>choose maximyum price</legend>
      <input type="number" id="maxPrice" name="maxPrice" onChange={handleOnChangeGenre} min="15" max="100" defaultValue="100" />
    </fieldset>
  </form>;
};

export default Price;
