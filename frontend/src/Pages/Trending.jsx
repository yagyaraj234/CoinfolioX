import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import trending from "../trending";



const Trending = () => {
  // const [trendingCoin, setTrendingCoin] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://api.coingecko.com/api/v3/search/trending")
  //     .then((res) => setTrendingCoin(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Layout>
      <h1 className="text-2xl font-bold">
        Top Trending Coins in Last 24 hours.
      </h1>

      <table>
        <tr className="mx-auto">
          <th className="w-[400px] border-2">Rank</th>
          <th className="w-[400px] border-2">Coin</th>
          <th className="w-[400px] border-2">Price (BTC)</th>
        </tr>
      </table>


    </Layout>
  );
};

export default Trending;

// {trending?.map((coin) => {
//   return (
//     <tr key={coin.item.market_cap_rank}>
//       {/* <p>Hello</p> */}
//       <td>{coin.item.market_cap_rank}</td>
//       <td>
//         <p>{coin.small}</p>
//         {coin.id}
//         <p className="text-gray-600">{coin.symbol}</p>
//       </td>
//       <td>{coin.price_btc}</td>
//     </tr>
//   );
// })}
