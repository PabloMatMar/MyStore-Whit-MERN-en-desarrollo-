import React from "react";

const Opinion = (hookFromFather) => {
  const { categories, setCategories } = hookFromFather;

  const handleOnChangeGenre = (event) => {
    console.log(event.target.name)
    let minOpinionValue = categories.opinion.$gte;
    let maxOpinionValue = categories.opinion.$lte;
    event.target.name == "minOpinion" ? minOpinionValue = event.target.value : maxOpinionValue = event.target.value;
    setCategories({
      "genre": categories.genre,
      "console": categories.console,
      "exclusiveness": categories.exclusiveness,
      "age": categories.age,
      "price": categories.price,
      "opinion": { "$gte": minOpinionValue, "$lte": maxOpinionValue }
    });
  };

  return <form>
    <fieldset>
      <legend>Minimum score-opinion</legend>
      <input type="number" id="minOpinion" name="minOpinion" onChange={handleOnChangeGenre} min="3.5" max="5" step="0.1" defaultValue="3.5" />
      <legend>Maximum score-opinion</legend>
      <input type="number" id="maxOpinion" name="maxOpinion" onChange={handleOnChangeGenre} min="0" max="5" step="0.1" defaultValue="5" />
    </fieldset>
  </form>;
};

export default Opinion;
