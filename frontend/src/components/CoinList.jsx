import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCurrency } from "../components/Context/CurrencyContext";
import { CoinLists } from "../config/api";

const CoinList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filterCoin, setfilterCoin] = useState("");
  const { currency, symbol } = useCurrency();
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false&locale=en

  useEffect(() => {
    axios
      .get(CoinLists(currency))
      .then((res) => {
        setCryptoData(res.data);
      })
      .catch((err) => console.log(err));
  }, [currency]);

  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <h1 className="md:text-2xl text-md font-semibold py-4">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 rounded-md py-1 px-2"
            onChange={(e) => setfilterCoin(e.target.value)}
          />
        </div>
      </div>

      <table className="border-2  text-center my-2 md:text-md text-sm w-full  ">
        <tbody>
          <tr className=" border-b-2">
            <th className="md:py-2 py-1 md:w-1/12 w-1/8 border-r-2 ">Rank</th>
            <th className="md:py-2 py-1 md:w-3/12 w-1/5 border-r-2">Name</th>
            <th className="md:py-2 py-1 border-r-2 md:w-2/12 w-1/5">
              <span className="text-pink-800">{symbol}</span> Price
            </th>
            <th className="hid md:py-2 py-1 border-r-2 md:w-1/12 ">
              <span className="text-pink-800">{symbol}</span> 24h low
            </th>
            <th className="hid md:py-2 py-1 border-r-2 md:w-1/12">
              <span className="text-pink-800">{symbol}</span> 24h high
            </th>
            <th className="hid md:py-2 py-1 border-r-2 md:w-2/12">
              <span className="text-pink-800">{symbol}</span> 24h Volume
            </th>
            <th className="md:py-2 md:w-2/12   py-1 md:px-2 px-0">
              <span className="text-pink-800">{symbol}</span> Market Cap
            </th>
          </tr>

          {cryptoData
            .filter((coin) => {
              return filterCoin.toLowerCase() === ""
                ? coin
                : coin.name.toLowerCase().startsWith(filterCoin.toLowerCase());
            })
            ?.map((coin) => (
              <tr className="border-b-2" key={coin.id}>
                <td className="border-r-2 text-center px-1 py-2 ">
                  <Link to={`/coins/${coin.id}`}> {coin.market_cap_rank}</Link>
                </td>
                <td className=" border-r-2 py-2">
                  <Link
                    className="flex items-center flex-row"
                    to={`/coins/${coin.id}`}
                  >
                    <img
                      src={coin.image}
                      alt="logo"
                      className="w-4 h-4 md:mx-2 ml-1"
                    />
                    <p className="hid">{coin.name}</p>

                    <p className="uppercase text-gray-500 text-md overflow-hidden md:mx-2 ">
                      {coin.symbol}
                    </p>
                  </Link>
                </td>
                <td className="border-r-2 text-center px-1 py-2 ">
                  <Link to={`/coins/${coin.id}`}> {coin.current_price}</Link>
                </td>
                <td className="border-r-2 text-center px-1 py-2 hid ">
                  <Link to={`/coins/${coin.id}`}> {coin.low_24h}</Link>
                </td>
                <td className="border-r-2 text-center px-1 py-2 hid ">
                  <Link to={`/coins/${coin.id}`}> {coin.high_24h}</Link>
                </td>
                <td className="border-r-2 text-center px-1 py-2 hid ">
                  <Link to={`/coins/${coin.id}`}> {coin.total_volume}</Link>
                </td>

                <td className="border-r-2 text-center  py-2  ">
                  <Link to={`/coins/${coin.id}`}> {coin.market_cap}</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinList;
