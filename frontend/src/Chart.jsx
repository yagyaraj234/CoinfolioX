import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useCurrency } from "./components/Context/CurrencyContext";
import { BarLoader } from "react-spinners";
import {
  CategoryScale,
  PointElement,
  LinearScale,
  Chart,
  LineElement,
} from "chart.js";
// import csd from "./components/chart.json";
import { HistoricalChart } from "./config/api";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

<<<<<<< HEAD
const CryptoChart = ({ id, name, sym }) => {
  // console.log(csd.market_caps);
=======
const CryptoChart = ({,id name, sym }) => {
>>>>>>> bb5beab31e1d7eb71e0ba879ca9e307a81fd3ac6
  const [cryptoData, setCryptoData] = useState([]);
  const [flag, setflag] = useState(false);

  const [days, setDays] = useState(1);
  const { currency } = useCurrency();
  const curr = currency.toLowerCase();

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(HistoricalChart(id, days, curr));
        setCryptoData(response.data.prices);
        setflag(true);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, [id, curr, days]);

  return (
    <div className="mt-8">
      <div className="flex justify-center mb-5">
        <p className="mx-auto md:text-2xl font-semibold">
          {`${name} Price Chart (${sym})`}{" "}
        </p>
      </div>
      {!cryptoData | (flag === false) ? (

        <div className="flex justify-center items-center">
          <BarLoader color="#050f0d" height={10} />
        </div>
      ) : (
        <div className="mx-auto md:w-[80vw] md:h-[80vh] w-[45vh]">
          <Line
            data={{
              labels: cryptoData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: cryptoData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#1E40AF",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          ></div>
        </div>
      )}

      {flag && (
        <div className="mx-auto flex justify-between w-[80vw] md:w-[40vw] my-5">
          <button
            className={`bg-secondary font-semibold px-4 py-1 rounded-lg shadow-xl border ${
              days === 1 &&
              " border-[#090979] border-2  hover:text-[#090979] text-[#090979] "
            } `}
            onClick={() => setDays(1)}
          >
            1Days
          </button>
          <button
            className={`bg-secondary font-semibold px-4 py-1 rounded-lg shadow-xl border ${
              days === 10 &&
              " border-[#090979] border-2  hover:text-[#090979] text-[#090979] "
            } `}
            onClick={() => setDays(10)}
          >
            10Days
          </button>
          <button
            className={`bg-secondary font-semibold px-4 py-1 rounded-lg shadow-xl border ${
              days === 30 &&
              " border-[#090979] border-2  hover:text-[#090979] text-[#090979] "
            } `}
            onClick={() => setDays(30)}
          >
            30Days
          </button>
          <button
            className={`bg-secondary font-semibold px-4 py-1 rounded-lg shadow-xl border ${
              days === 90 &&
              " border-[#090979] border-2  hover:text-[#090979] text-[#090979] "
            } `}
            onClick={() => setDays(90)}
          >
            90Days
          </button>
        </div>
      )}
    </div>
  );
};

export default CryptoChart;
