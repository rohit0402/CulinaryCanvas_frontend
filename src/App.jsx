import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Store from "../src/redux/Store"
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
