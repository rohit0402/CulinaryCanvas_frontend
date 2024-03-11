import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout, setUser } from "../redux/slices/AuthSlice";
import { useEffect } from "react";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("https://culinary-canvas-backend.onrender.com/api/logout", {
        withCredentials: true,
      });
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        dispatch(logout()); // Dispatch logout action
        navigate("/"); // Redirect to home page after logout
      }
    } catch (error) {
      toast.error("Failed to logout. Please try again later."); // Show error toast
    }
  };

  const checkUser = async () => {
    try {
      const res = await axios.get(`https://culinary-canvas-backend.onrender.com/api/getUser`, {
        withCredentials: true,
      });
      const data = await res.data;
      if (data.success) {
        dispatch(login());
        dispatch(setUser(data.user));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
      checkUser();
  }, []);

  return (
    <nav className="flex justify-between bg-white px-3 md:px-4 lg:px-5 mb-10 py-3 shadow-md">
      <Link to="/" className="TITLE_TEXT text-2xl font-bold text-orange-500 ">
        CulinaryCanvas
      </Link>
      <div className="flex gap-3 text-md justify-center items-center text-gray-600">
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        {isAuth && (
          <Link to="/favourites" className="hover:text-black">
            Favourites
          </Link>
        )}
        {isAuth ? (
          <li
            className="hover:text-black list-none cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        ) : (
          <Link to="/login" className="hover:text-black">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
