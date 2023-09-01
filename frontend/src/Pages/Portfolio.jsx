import React from "react";
import Profile from "./Profile";

const coins = [
  { name: "Bitcoin", price: 6345, holding: 4.3, value: 6345 },
  { name: "Eth", price: 6345, holding: 4.3, value: 6345 },
  { name: "Sol", price: 6345, holding: 4.3, value: 6345 },
  { name: "Pepe", price: 6345, holding: 4.3, value: 6345 },
  { name: "Dot", price: 6345, holding: 4.3, value: 6345 },
];

const Portfolio = () => {
  return (
    <Profile>
      <div className="flex flex-col ">
        <div className="flex px-2 md:px-20">
          <div className="flex text-xl">
            <p className="text-xl font-semibold">Total Investement : </p>
            <p>$94529</p>
          </div>
        </div>
        <div className="flex px-2 md:px-20 font-semibold">
          <p className=" text-xl">Total Profil / Loss : </p>
          <p className="text-xl text-green-400 pl-2">$323</p>
        </div>

        <p className="border-b text-xl font-semibold md:pl-5 md:text-2xl pb-5  mt-20">Holdings :</p>
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="  border-b py-1 md:px-5 md:text-2xl text-lg text-center  ">
                <th>Asset</th>
                <th className="xs:hidden">Price</th>
                <th>Balance</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.name} className=" border-b py-1 text-center ">
                  <td className="text-md font-medium text-gray-500">
                    {coin.name}
                  </td>
                  <td className="xs:hidden">${coin.price}</td>
                  <td>{coin.holding}</td>
                  <td>${coin.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Profile>
  );
};

export default Portfolio;
