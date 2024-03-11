import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let { id } = useParams();
  const [details, setDetails] = useState([]);

  const getRecipeDetails = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.data;
    setDetails(data.meals[0]);
  };
  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="w-[70vw] p-5 bg-white" key={details?.idMeal}>
        <div className="flex justify-center items-center">
          <img
            src={details?.strMealThumb}
            width={250}
            className="rounded-full"
          />
        </div>
        <div className="my-3 flex flex-col">
          <span className="text-4xl">{details?.strMeal}</span>
          <h1 className="text-lg font-bold text-gray-800">Ingredients</h1>
          <ul className="text-xl">
            {details &&
              Object.keys(details)
                .filter(
                  (key) =>
                    key.startsWith("strIngredient") &&
                    details[key]?.trim() !== ""
                )
                .map((key, index) => (
                  <li key={key} className="mb-1">
                    {`${index + 1}. ${details[key]}`}
                  </li>
                ))}
          </ul>
          <h1 className="text-lg font-bold text-gray-800">Recipe</h1>
          <p className="text-xl">{details?.strInstructions}</p>
          <h1 className="text-4xl font-bold text-gray-800 flex justify-center mt-3">Happy Cooking!</h1>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
