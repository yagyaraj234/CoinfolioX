import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const Trending = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => setTrendingCoin(res.data.coins))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <h1 className="text-2xl font-bold">
        Top Trending Coins in Last 24 hours.
      </h1>

      <table className="border-2  my-2">
        <tr className="mx-auto">
          <th className="w-[400px]  p-2 border-r-2 ">Rank</th>
          <th className="w-[400px] border-r-2  p-2">Coin</th>
          <th className="w-[400px] p-2 ">Price (BTC)</th>
        </tr>
        {trendingCoin?.map((coin) => {
          return (
            <tr key={coin.item.market_cap_rank} className="border-y-2 text-center">
              <td className="border-r-2 p-2">{coin.item.market_cap_rank}</td>
              <td className="flex  py-2 px-2 border-r-2">
                <img className="w-6 mx-2" src={coin.item.small} alt="coin_logo" />
                {coin.item.id}
                <p className="text-gray-600 mx-2">{coin.item.symbol}</p>
                
              </td>
              <td className="">{coin.item.price_btc}</td>
            </tr>
          );
        })}
      </table>
    </Layout>
  );
};

export default Trending;
