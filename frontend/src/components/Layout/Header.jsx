import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobHeader from "./MobHeader";
import { useToken } from "../Context/Token";

const Header = () => {
  const { token } = useToken();

  const [screen, setScreen] = useState(window.screen.width);

  const widthResize = () => {
    setScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    };
  }, [screen]);
  return (
    <>
      {screen <= "480" ? (
        <MobHeader />
      ) : (
        <nav className="justify-between items-center md:px-10 px-2 py-1 cursor-pointer flex flex-row  ">
          <p className="text-[#C53678] font-bold text-2xl">
            <Link to="/">CoinFolioX</Link>
          </p>
          <ul className=" md:flex md:flex-row gap-6 ">
            <li>
              <NavLink className="hover:text-lightblue font-semibold" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="hover:text-lightblue font-semibold"
                to="/exchanges"
              >
                Exchanges
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-lightblue font-semibold"
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-lightblue font-semibold"
                to="/trending"
              >
                Trending
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-4">
            <button
              className="border border-lightblue px-4 py-1 rounded-md hover:bg-lightblue
            font-semibold transition-colors duration-700 delay-75  hover:text-white"
            >
              {token !== null ? (
                <Link to="/profile/edit-profile">Profile</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
