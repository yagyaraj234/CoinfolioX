import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinList = ({ amount }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currency, setCurrency] = useState("Usd");
  const [filterCoin, setfilterCoin] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setCryptoData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [currency]);
  const currChange = () => {
    setCurrency("Usd");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="border-2 rounded-md py-1 px-2"
          onChange={(e) => setfilterCoin(e.target.value)}
        />
      </div>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <h1 className="md:text-2xl text-md font-semibold py-4">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="flex border-2  rounded-xl font-normal transition-colors md:mb-0 w-[92px]  mb-2 ">
          <button
            className={`px-2 rounded-l-lg ${
              currency === "Inr" && " text-white bg-blue-700 "
            }`}
            onClick={() => setCurrency("Inr")}
          >
            INR
          </button>
          <button
            className={` px-2 rounded-r-lg  ${
              currency === "Usd" && "bg-blue-700 text-white"
            }`}
            onClick={currChange}
          >
            USD
          </button>
        </div>
      </div>

      <table className="border-2  my-2 md:text-md text-sm w-full  ">
        <tr className=" border-b-2">
          <th className="md:py-2 py-1 md:w-1/12 w-1/8 border-r-2 ">Rank</th>
          <th className="md:py-2 py-1 md:w-3/12 w-1/5 border-r-2">Name</th>
          <th className="md:py-2 py-1 border-r-2 md:w-2/12 w-1/5">
            Price
            <span className="text-pink-800">{currency === "Usd" ? " ($)" : " (₹)"}</span>
          </th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-1/12 ">
            24h low<span className="text-pink-800">{currency === "Usd" ? " ($)" : " (₹)"}</span>
          </th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-1/12">
            24h high<span className="text-pink-800">{currency === "Usd" ? " ($)" : " (₹)"}</span>
          </th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-2/12">
            24h Volume<span className="text-pink-800">{currency === "Usd" ? " ($)" : " (₹)"}</span>
          </th>
          <th className="md:py-2 md:w-2/12   py-1 md:px-2 px-0">
            Market Cap<span className="text-pink-800">{currency === "Usd" ? " ($)" : " (₹)"}</span>
          </th>
        </tr>

        {cryptoData
          .filter((coin) => {
            return filterCoin.toLowerCase() === ""
              ? coin
              : coin.name.toLowerCase().includes(filterCoin);
          })
          ?.map((coin) => (
            <tr className="border-b-2 ">
              <td className="border-r-2 text-center px-1 py-2 ">
                {coin.market_cap_rank}
              </td>
              <td className="flex items-center flex-row border-r-2 py-2">
                <img
                  src={coin.image}
                  alt="logo"
                  className="w-4 h-4 md:mx-2 ml-1"
                />
                <p className="hid">{coin.name}</p>

                <p className="uppercase text-gray-500 text-md overflow-hidden md:mx-2 ">
                  {coin.symbol}
                </p>
              </td>
              <td className="border-r-2 text-center px-1 py-2 ">
                {coin.current_price}
              </td>
              <td className="border-r-2 text-center px-1 py-2 hid ">
                {coin.low_24h}
              </td>
              <td className="border-r-2 text-center px-1 py-2 hid ">
                {coin.high_24h}
              </td>
              <td className="border-r-2 text-center px-1 py-2 hid ">
                {coin.total_volume}
              </td>
              <td className="border-r-2 text-center  py-2  ">
                {coin.market_cap}
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default CoinList;
