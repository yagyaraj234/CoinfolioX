import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCurrency } from "../Context/CurrencyContext";
import Dropdown from "../Dropdown";

const LiveSection = () => {
  // Replace with actual context values
  const { currency, symbol } = useCurrency();
  const [globalData, setGlobalData] = useState();

  // Initialize state variables with initial values
  const [btcPrice, setBtcPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const getGlobalData = async () => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/global");
      setGlobalData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGlobalData();
  }, [currency]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=${currency}`
      )
      .then((res) => {
        // Update state with new prices
        setBtcPrice(res.data.bitcoin[currency.toLowerCase()]);
        setEthPrice(res.data.ethereum[currency.toLowerCase()]);
      })
      .catch((err) => console.log(err));
  }, [currency]);

  return (
    <div className="md:px-10 px-2 py-1 border-b-2 border-lightblue  justify-between  items-center hidden bg-white  sm:flex text-xs">
      <div className="flex gap-5">
        <div className="flex font-semibold">
          <p>Coins:&nbsp;</p>
          <p className="text-blue-600 ">{globalData.active_cryptocurrencies}</p>
        </div>
        <div className="flex font-semibold">
          <p>Exchanges:&nbsp; </p>
          <p className="text-blue-600 ">{globalData.markets}</p>
        </div>
        <div className="flex font-semibold">
          <p>Market Cap:&nbsp;</p>
          <span className="text-blue-600 ">
            {symbol}&nbsp;
            {globalData.total_market_cap[currency]}
          </span>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-1 mt-1 text-xs font-semibold">
          <p>
            Btc:{" "}
            <span className="text-blue-600 ">
              {symbol}&nbsp;
              {btcPrice}
            </span>
          </p>
          <p>
            Eth:{" "}
            <span className="text-blue-600">
              {symbol}&nbsp;
              {ethPrice}
            </span>
          </p>
        </div>
        <Dropdown />
      </div>
    </div>
  );
};

export default LiveSection;
