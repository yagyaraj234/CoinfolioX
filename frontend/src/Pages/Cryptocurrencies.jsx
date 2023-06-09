import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";

const livePrice = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 2184855,
    market_cap: 42388314071781,
    market_cap_rank: 1,
    fully_diluted_valuation: 45891548106117,
    total_volume: 531027445416,
    high_24h: 2208034,
    low_24h: 2175727,
    price_change_24h: 4725.61,
    price_change_percentage_24h: 0.21676,
    market_cap_change_24h: 73981851093,
    market_cap_change_percentage_24h: 0.17484,
    circulating_supply: 19396918,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 5128383,
    ath_change_percentage: -57.38103,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 3993.42,
    atl_change_percentage: 54631.64078,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-06-09T05:31:26.187Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 151556,
    market_cap: 18222025088822,
    market_cap_rank: 2,
    fully_diluted_valuation: 18222025088822,
    total_volume: 415867157763,
    high_24h: 153536,
    low_24h: 151256,
    price_change_24h: -200.813806990569,
    price_change_percentage_24h: -0.13233,
    market_cap_change_24h: -41178355665.515625,
    market_cap_change_percentage_24h: -0.22547,
    circulating_supply: 120229122.258725,
    total_supply: 120229122.258725,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -58.16438,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 538754.83441,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 91.74613774977374,
      currency: "btc",
      percentage: 9174.613774977373,
    },
    last_updated: "2023-06-09T05:31:25.658Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    current_price: 82.48,
    market_cap: 6870918837411,
    market_cap_rank: 3,
    fully_diluted_valuation: 6870918837411,
    total_volume: 1344103745124,
    high_24h: 82.82,
    low_24h: 82.29,
    price_change_24h: -0.08970705467704931,
    price_change_percentage_24h: -0.10864,
    market_cap_change_24h: -6808640409.053711,
    market_cap_change_percentage_24h: -0.099,
    circulating_supply: 83321599071.5721,
    total_supply: 83321599071.5721,
    max_supply: null,
    ath: 91.22,
    ath_change_percentage: -9.59818,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 36.86,
    atl_change_percentage: 123.72921,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-06-09T05:30:00.592Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 21497,
    market_cap: 3350166984882,
    market_cap_rank: 4,
    fully_diluted_valuation: 4299076413060,
    total_volume: 66027731633,
    high_24h: 22003,
    low_24h: 21354,
    price_change_24h: -23.3885763283688,
    price_change_percentage_24h: -0.10868,
    market_cap_change_24h: -3976596633.692383,
    market_cap_change_percentage_24h: -0.11856,
    circulating_supply: 155855196,
    total_supply: 157900174,
    max_supply: 200000000,
    ath: 50351,
    ath_change_percentage: -57.31726,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 2.58,
    atl_change_percentage: 831364.78143,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-06-09T05:31:30.462Z",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
    current_price: 82.43,
    market_cap: 2344933420797,
    market_cap_rank: 5,
    fully_diluted_valuation: 2344933420797,
    total_volume: 127089288921,
    high_24h: 82.79,
    low_24h: 82.34,
    price_change_24h: -0.065571386487278,
    price_change_percentage_24h: -0.07948,
    market_cap_change_24h: -9021670412.954102,
    market_cap_change_percentage_24h: -0.38326,
    circulating_supply: 28438948618.4666,
    total_supply: 28438948618.4666,
    max_supply: null,
    ath: 87.19,
    ath_change_percentage: -5.41002,
    ath_date: "2020-03-13T02:35:16.858Z",
    atl: 65.31,
    atl_change_percentage: 26.2828,
    atl_date: "2021-05-19T13:14:05.611Z",
    roi: null,
    last_updated: "2023-06-09T05:31:29.474Z",
  },
];

const Cryptocurrencies = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currency, setCurrency] = useState("Usd");
  const [filterCoin, setfilterCoin] = useState("");

  useEffect(() => {
    axios
      .get
      // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`
      ()
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
    <Layout>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="border-2 rounded-md py-1 px-2"
          onChange={(e) => setfilterCoin(e.target.value)}
        />
      </div>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <h1 className="md:text-2xl text-xl font-semibold py-4">
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

      <table className="border-2  my-2 md:text-md text-sm  ">
        <tr className=" border-b-2">
          <th className="md:py-2 py-1 md:w-1/12 w-1/8 border-r-2 ">Rank</th>
          <th className="md:py-2 py-1 md:w-3/12 w-1/5 border-r-2">Name</th>
          <th className="md:py-2 py-1 border-r-2 md:w-2/12 w-1/5">Price</th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-1/12 ">24h low</th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-1/12">24h high</th>
          <th className="hid md:py-2 py-1 border-r-2 md:w-2/12">24h Volume</th>
          <th className="md:py-2 md:w-2/12  py-1 md:px-2 px-0">Market Cap</th>
        </tr>

        {livePrice
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
                <img src={coin.image} alt="logo" className="w-4 h-4 md:mx-2 mx-1" />
                <p className="hid">{coin.name}</p>

                <p className="uppercase text-gray-500 text-sm ">{coin.symbol}</p>
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
    </Layout>
  );
};

export default Cryptocurrencies;
