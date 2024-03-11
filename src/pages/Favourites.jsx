import { useEffect, useState } from "react"
import { getFavourites } from "../helper";
import RecipeCard from "../components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../redux/slices/AuthSlice";

const Favourites = () => {

  const user= useSelector((state)=>state.auth.user);
  const dispatch=useDispatch();
  const favourites=useSelector((state)=>state.auth.favourites);

    useEffect(() => {
      getFavourites(user._id).then((res)=>dispatch(setFavourites(res)));
    }, []);
    
  return (
    <div>
      <div className=" my-10">
        {  favourites === null ? (
          <h1>no recipe found</h1>
        ) : (
          <div className=" grid w-[70vw] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
            {favourites.map((favourite) => (
              <RecipeCard
                key={favourite.idMeal}
                id={favourite.idMeal}
                image={favourite.strMealThumb}
                title={favourite.strMeal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites
