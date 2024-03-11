import { HiHeart } from "react-icons/hi";
import { PropTypes } from "prop-types";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getFavourites } from "../helper";
import { setFavourites } from "../redux/slices/AuthSlice";

const RecipeCard = ({ image, title, id }) => {
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { pathname } = useLocation();

  const addToFav = async (favourite) => {
    const res = await axios.post(
      `http://localhost:3000/api/addToFavourites/${user._id}`,
      favourite,
      { withCredentials: true }
    );

    const data = await res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };

  const removeFromFav = async (favourite) => {
    const res = await axios.post(
      `http://localhost:3000/api/removeFromFavourites/${user._id}`,
      favourite,
      { withCredentials: true }
    );

    const data = await res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };

  return (
    <div className="shadow-md flex flex-col justify-between m-1 p-3 rounded-lg bg-white">
        <Link to={`/recipe/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-lg hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
          width={220}
          />
      </div>
          </Link>
      <div className="flex mt-2 justify-between items-center">
        <span className="truncate">{title}</span>
        {pathname === "/favourites" ? (
          <MdDelete
            className="text-red-500 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => {
              removeFromFav({
                idMeal: id,
                strMeal: title,
                strMealThumb: image,
              });
              getFavourites(user._id).then((res) => setFavourites(res));
            }}
          />
        ) : (
          <HiHeart
            className="text-red-500 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() =>
              isAuth
                ? addToFav({
                    idMeal: id,
                    strMeal: title,
                    strMealThumb: image,
                  })
                : toast.error("please login first")
            }
          />
        )}
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RecipeCard;
