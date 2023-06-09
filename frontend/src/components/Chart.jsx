import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CryptoChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );

        // Extract relevant data for the chart
        const prices = response.data.prices;
        const timestamps = response.data.timestamps.map(timestamp =>
          new Date(timestamp)
        );

        // Create the chart dataset
        const chartData = {
          labels: timestamps,
          datasets: [
            {
              label: 'Bitcoin Price',
              data: prices,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD',
                  },
                },
                display: true,
              },
              y: {
                display: true,
                beginAtZero: true,
              },
            },
          }}
        />
      ) : (
        <p className="text-center">Loading chart data...</p>
      )}
    </div>
  );
};

export default CryptoChart;
