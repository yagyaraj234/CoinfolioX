import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCurrency } from "../Context/CurrencyContext";
import Dropdown from "../Dropdown";

const LiveSection = () => {
  // Replace with actual context values
  const { currency, symbol } = useCurrency();

  // Initialize state variables with initial values
  const [btcPrice, setBtcPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    // Make API call when currency changes
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
    <div className="md:px-10 px-2 py-1 border-b-2  justify-between items-center hidden  sm:flex">
      <p>LiveSection</p>
      <div className="flex gap-10">
        <div className="flex gap-1 mt-1 text-sm">
          <p>
            Btc:{" "}
            <span className="text-blue-600">
              {symbol}
              {btcPrice}
            </span>
          </p>
          <p>
            Eth:{" "}
            <span className="text-blue-600">
              {symbol}
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
