import {  useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecipes = async (text) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
      );
      const data = res.data;
      setRecipes(data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  const getInitializationRecipes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
      );
      const data = res.data;
      if (data === null || data === undefined) {
        console.log("no data defined");
      } else {
        setRecipes(data.meals);
      }
    } catch (error) {
      console.error("error occured", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInitializationRecipes();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search dish"
          className="outline-none border px-2 py-2 rounded-xl w-[60vw] shadow-md focus:border-orange-500"
          onChange={(e) => {
            getRecipes(e.target.value);
          }}
        />
      </div>
      <div className=" my-10">
        {loading ? (
          <ClipLoader color="#36d7b7"  size={150}/>
        ) : recipes === null ? (
          <h1>no recipe found</h1>
        ) : (
          <div className=" grid w-[70vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                image={recipe.strMealThumb}
                title={recipe.strMeal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
