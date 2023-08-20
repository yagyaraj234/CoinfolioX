import axios from "axios";
import React, { useEffect, useState } from "react";

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((res) => {
        setExchange(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold my-2">
        Top 100 Centralised Exchange.
      </h1>

      <table className="md:text-lg text-sm">
        <tr className="mx-auto text-center">
          <th className="w-[100px] border-2">Rank</th>
          <th className="w-[360px] border-2">Name</th>
          <th className="w-[300px] border-2 hid">24h Volume <span className="text-pink-800">(BTC)</span> </th>
          <th className="w-[210px] border-2 hid">Trust Score </th>
          <th className="w-[212px] border-2">Year Established </th>
        </tr>
        {exchange?.map((exchangeData) => {
          return (
            
            <tr key={exchangeData.id} className="text-center ">
              <td className="border-2 p-2">{exchangeData.trust_score_rank}</td>
              <td className="border-b-2 p-2 text-left flex  flex-row items-center">
                <img src={exchangeData.image} alt="exchange_image" className="w-6 h-6 mr-2" />
                <a target="_blank" rel="noreferrer" href={exchangeData.url}>
                  {exchangeData.name}
                </a>
              </td>
              <td className="border-2 p-2 hid">{exchangeData.trade_volume_24h_btc}</td>
              <td className="border-2 p-2 hid">{exchangeData.trust_score}</td>
              <td className="border-2 p-2">{exchangeData.year_established}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Exchanges;
