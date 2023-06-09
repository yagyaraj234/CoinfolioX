import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveSection = () => {
  let [btcPrice, setBtcPrice] = useState([]);
  let [ethPrice, setEthPrice] = useState([]);


  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=Usd`
      )
      .then((res) => {
        setBtcPrice(res.data.bitcoin.usd);
        setEthPrice(res.data.ethereum.usd);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="md:px-10 px-2 py-1 border-b-2 flex justify-between  ">
      <p>LiveSection</p>
      <div className="flex gap-1 text-sm">
        <p >
          Btc: <span className=" text-blue-600  ">{btcPrice}</span>
        </p>
        <p>
          Eth: <span className="text-blue-600">{ethPrice}</span>
        </p>
        {/* <p>Eth:{}</p> */}
      </div>
    </div>
  );
};

export default LiveSection;
