import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CryptoChart from "../Chart";
import { Link } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { useCurrency } from "../components/Context/CurrencyContext";
import { CircleLoader } from "react-spinners";

function Box({ name, link }) {
  return (
    <div className="bg-[#E5E7EB] rounded-md p-1 px-2">
      <a href={link} target="_blank" rel="noreferrer">
        {name[0]}
      </a>
    </div>
  );
}
function Detail({ title, data, symbol }) {
  return (
    <div className="flex w-full md:w-[30vw] justify-between  text:sm sm:text-md md:text-md pr-2 py-1 border-b">
      <p className="opacity-80">{title}</p>
      <p>
        {" "}
        {symbol}
        {data}
      </p>
    </div>
  );
}

const CoinDetail = () => {
  let { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const { currency, symbol } = useCurrency();
  const [val, setVal] = useState("1");
  const [currentPrice, setCurrentPrice] = useState(0);
  console.log(coinData);

  let price = currentPrice * val;
  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((res) => {
        console.log(res.data);
        setCoinData(res.data);
        setCurrentPrice(
          res.data.market_data.current_price[currency.toLowerCase()]
        );
      })
      .catch((err) => console.log(err));
  }, [id, currency]);

  if (!coinData) {
<<<<<<< HEAD
    return <CircleLoader color="#050f0d" height={10} />;
=======
    return (
      <div className="flex justify-center items-center">
        <CircleLoader color="#050f0d" height={10} />
      </div>
    );

>>>>>>> bb5beab31e1d7eb71e0ba879ca9e307a81fd3ac6
  }
  let newdesc = coinData.description.en;

  const desc = newdesc.slice(0, 500);
  let percent =
    (coinData.market_data.high_24h[currency.toLowerCase()] -
      coinData.market_data.low_24h[currency.toLowerCase()]) /
    100;
  const curr = currency.toUpperCase();
  return (
    <>
      <div className="flex pb-5">
        <Link className="text-blue-700 text-lg " to="/">
          Cryptocurrencies
        </Link>
        <div className="font-bold mt-1 text-lg text-blue-700">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
        <p className="mt-1 ">{coinData.name}</p>
      </div>
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="flex flex-col gap-2 w-full md:w-[70%]">
          <p className="bg-gray-800 text-white font-bold  px-1 rounded-md w-[6em]  text-center">
            Rank #{coinData.coingecko_rank}
          </p>
          <div className="flex gap-2">
            <img
              className="h-8 w-8"
              src={coinData.image.small}
              alt={`${coinData.id} logo`}
            />
            <p className="uppercase  font-bold text-xl">{coinData.id}</p>
            <p className="font-bold uppercase text-gray-600 text-xl">
              {coinData.symbol}
            </p>
          </div>
          <div className="flex ">
            <p className="font-bold text-3xl">
              {symbol}
              {coinData.market_data.current_price[currency.toLowerCase()]}
            </p>
            <div className="font-extrabold rounded-lg mt-1 text-red-700 text-lg ml-2 flex">
              <div>
                <ion-icon name="caret-down-outline"></ion-icon>
              </div>
              <p>{percent}</p>
            </div>
          </div>

          <div className="flex-col flex md:flex-row my-10">
            <div className="flex flex-col  pl-0 ">
              <Detail
                data={coinData.market_data.market_cap[currency.toLowerCase()]}
                title="Market Cap"
              />
              <Detail
                data={coinData.market_data.circulating_supply}
                title="Circulating Supply"
              />
              <Detail
                data={` ${
                  coinData.market_data.high_24h[currency.toLowerCase()]
                }`}
                symbol={symbol}
                title="24h high"
              />
            </div>
            <div className="flex flex-col">
              <Detail
                symbol=""
                data={coinData.market_data.total_volume[currency.toLowerCase()]}
                title="Total Volume"
              />
              <Detail
                symbol=""
                data={coinData.market_data.max_supply}
                title="Maximum Supply"
              />
              <Detail
                data={` ${
                  coinData.market_data.low_24h[currency.toLowerCase()]
                }`}
                symbol={symbol}
                title="24h low"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <p className="font-bold">Info</p>
          <div className="flex justify-between my-1">
            <p className="mr-10 ">Website</p>
            <Box
              name={coinData.links.homepage}
              link={coinData.links.homepage[0]}
            />
          </div>
          <div className="flex flex-col bg-[#E5E7EB] p-2 gap-2 rounded my-2">
            <p className="font-semibold mx-4 ">{coinData.name} Converter</p>
            <div className="flex justify-between mx-4">
              <p className="font-semibold uppercase mr-2">{coinData.symbol}</p>
              <input
                type="number"
                className="outline-none  rounded-sm p-1 px-2"
                onChange={(e) => setVal(e.target.value)}
                placeholder="1"
              />
            </div>
            <div className="flex justify-between mx-4">
              <p className="font-semibold mr-2">{curr}</p>
              <input
                readOnly
                type="number"
                className="outline-none  rounded-sm p-1 px-2"
                onChange={(e) => setVal(e.target.val)}
                value={price}
              />
            </div>
          </div>
        </div>
      </div>
      <CryptoChart id={id} name={coinData.name} sym={coinData.symbol} />

      <div>
        <p className="text-3xl font-bold py-1">About.</p>
        <p className="text-justify">{desc}...</p>
      </div>
    </>
  );
};
export default CoinDetail;
