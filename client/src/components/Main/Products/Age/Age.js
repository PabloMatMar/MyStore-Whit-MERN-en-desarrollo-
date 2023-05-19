import React from "react";

const Age = (hookFromFather) => {
  //Hago destructuing del hookState que recibo del padre
  const { categories, setCategories } = hookFromFather;

  const handleOnChangeGenre = (event) => {
    setCategories({
      "genre": categories.genre,
      "console": categories.console,
      "exclusiveness": categories.exclusiveness,
      "age": { "$lte": event.target.value },
      "price": categories.price,
      "opinion": categories.opinion
    });
  };

  return <form>
    <fieldset>
      <legend>choose the age restriction</legend>
      <input type="number" id="age" name="age" min="3" max="18" onChange={handleOnChangeGenre} />
    </fieldset>
  </form>;
};

export default Age;
