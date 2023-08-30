import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useToken } from "../Context/Token";
import Dropdown from "../Dropdown";
const MobHeader = () => {
  const [menu, setMenu] = useState("hidden");
  const { token } = useToken();

  const showMenu = () => {
    if (menu === "hidden") {
      setMenu("");
    } else {
      setMenu("hidden");
    }
  };
  return (
    <>
      <div className="px-2 flex justify-between py-2 border-b-2 w-full">
        <Link to="/" className="text-2xl font-semibold text-blue-700">
          {" "}
          CoinFolioX
        </Link>

        {menu === "hidden" ? (
          <RxHamburgerMenu className="text-4xl font-light" onClick={showMenu} />
        ) : (
          <RxCross2 className="text-4xl font-light " onClick={showMenu} />
        )}
      </div>
      <div className="px-2">
        <ul className={`flex flex-col py-2 ${menu}`}>
          <NavLink className="border-b-2 py-2 border-gray-100" to="/articles">
            Articles
          </NavLink>
          <NavLink className="border-b-2 py-2 border-gray-100" to="/exchanges">
            Exchanges
          </NavLink>
          <NavLink className="border-b-2 py-2 border-gray-100" to="/trending">
            Trending
          </NavLink>
          {/* <Link className="border-b-2 font-semibold py-2" to="/login">Login</Link> */}
          {token !== null ? (
            <Link
              to="/profile/edit-profile"
              className="border-b-2 font-semibold py-2"
            >
              Profile
            </Link>
          ) : (
            <Link className="border-b-2 font-semibold py-2" to="/login">
              Login
            </Link>
          )}
          <Dropdown />
        </ul>
      </div>
    </>
  );
};

export default MobHeader;
