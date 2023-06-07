import React, { useEffect, useState,useLayoutEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Cryptocurrencies = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const [currency, setCurrency] = useState("Usd");

  useLayoutEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setCryptoData(res.data);
      })
      .catch((err) => console.log(err));
  }, [currency]);
  const currChange =()=>{
    setCurrency('Usd');
  }
  return (
    <Layout>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <h1 className="md:text-2xl text-xl font-semibold md:pb-10 pb-2">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="flex border rounded-lg font-normal transition-colors md:mb-0 w-[90px]  mb-2 ">

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

      <ul>
        <ul className="flex justify-between border text-center items-center ">
          <li className="border w-1/2 text-gray-800 py-2 px-1 md:px-3">Rank</li>
          <li className="border md:w-10/12 w-2/3  flex flex-row justify-center items-center py-2 px-1 ">
            <p className={`hid pl-1 `}></p>
            <p className="uppercase text-gray-400 text-center pl-2 px-1"></p>
            Name
          </li>
          <li className="border md:w-1/2 w-4/5 py-2 text-center px-1">Price</li>
          <li className="hid border md:w-1/2 py-2 px-1">24h high</li>
          <li className="hid border md:w-1/2 py-2 px-1">24h low</li>
          <li className="border hid w-full py-2 text-center px-1">
            Total Volume
          </li>
          <li className="border w-full py-2 text-center px-1">Market Cap</li>
        </ul>

        {cryptoData?.map((coin) => (
          <ul
            key={coin.market_cap_rank}
            className="flex justify-between border text-center items-center "
          >
            <li className="border w-1/2 text-gray-800 py-2 px-1 md:px-3">
              {coin.market_cap_rank}
            </li>
            <li className="border md:w-10/12 w-2/3  flex flex-row justify-start items-center py-2 px-1 ">
              <img className="h-4 md:pl-3 pl-1 " src={coin.image} alt="logo" />
              <p className={`hid pl-1 `}>{coin.name.slice(0, 12)}</p>
              <p className="uppercase text-gray-400 text-center pl-2 px-1">
                {coin.symbol}
              </p>
            </li>
            <li className="border md:w-1/2 w-4/5 py-2 text-center px-1">
            <span>{currency==='Inr'?'₹ ':'$'}</span>{coin.current_price}
            </li>
            <li className="hid border md:w-1/2 py-2 px-1"><span>{currency==='Inr'?'₹ ':'$'}</span>{coin.high_24h}</li>
            <li className="hid border md:w-1/2 py-2 px-1"><span>{currency==='Inr'?'₹ ':'$'}</span>{coin.low_24h}</li>
            <li className="border hid w-full py-2 text-center px-1">
            <span>{currency==='Inr'?'₹ ':'$'}</span>
              {coin.total_volume}
            </li>
            <li className="border w-full py-2 text-center px-1">
                <span>{currency==='Inr'?'₹ ':'$'}</span>
              {coin.market_cap}
            </li>
          </ul>
        ))}
      </ul>
    </Layout>
  );
};

export default Cryptocurrencies;
