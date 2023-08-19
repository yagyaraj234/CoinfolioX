import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CryptoChart from "../components/Chart";

const CoinDetail = () => {
  let { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoinData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!coinData) {
    return <>Loading...</>;
  }

  return (
    <>
      <h2>{coinData.name}</h2>
      <CryptoChart />
    </>
  );
};
export default CoinDetail;
