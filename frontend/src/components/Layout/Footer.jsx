import React, { useState } from "react";
import { Link } from "react-router-dom";

const dropDown = [
  {
    id: 1,
    name: "Resources",
    items: [
      {
        item: "Perceptuals",
      },
      {
        id: 2,
        item: "Crypto News",
      },
    ],
  },
  {
    name: "Donations",
    items: [{ item: "Bitcoin" }, { item: "Ethereum" }],
  },
];

const Footer = () => {
  const [showDropDown, setShowDropDown] = useState({});

  // Function to toggle the visibility of a specific dropdown category
  const toggleDropDown = (id) => {
    setShowDropDown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="absolute w-full">
      <div className="flex flex-col  md:px-10 px-2 py-2 md:w-full  relative bottom-0 border-t-2">
        <div className="">
          {/* <p </p> */}
          <Link to="/" className="text-2xl font-bold text-blue-800 text-left ">
            CoinFolioX
          </Link>
        </div>
        <div className="border-b-2 py-4 text-justify">
          <p>
            Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quidem voluptates aliquid obcaecati accusantium eligendi facilis
            nostrum, magnam numquam quo corporis reiciendis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <ul className=" ">
            {dropDown.map((drop) => (
              <li
                key={drop.id}
                className={`cursor-pointer text-md   w-full
             border-b-2 ${showDropDown[drop.id] ? "py-2" : "py-2"} font-semibold `}
                onClick={() => toggleDropDown(drop.id)} // Toggle visibility for the specific category
              >
                {drop.name}
                {/* <p> fsjk</p> */}
                <div>
                  <ul
                    className={`flex flex-col text-sm text-gray-600  ${
                      !showDropDown[drop.id] && "hidden"
                    }`}
                  >
                    {drop.items.map((subD, index) => (
                      <li className="border-b py-3" key={index}>
                        {subD.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription Section (Unchanged) */}
        <div>
          <p className="font-semibold">
            Interested to stay up-to-date with cryptocurrencies?
          </p>
          <p className="text-sm text-gray-600">
            Get the latest crypto news, updates, and reports by subscribing to
            our free newsletter.
          </p>
          <input
            type="text"
            className="border border-gray-500 rounded-md w-full py-1 my-3 px-3"
          />
          <button
            type="submit"
            className="border w-full py-1 rounded-md bg-green-600 text-white"
          >
            Subscribe
          </button>
        </div>
        {/* Copyright Notice (Unchanged) */}
        <p className="mx-auto my-2 text-gray-600">
          &copy; 2023 CoinFolioX. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
