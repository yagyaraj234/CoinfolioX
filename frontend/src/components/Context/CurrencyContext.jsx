import React, { createContext, useState, useContext, useEffect } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const storedCurrency = localStorage.getItem("selectedCurrency");
  const storedSymbol = localStorage.getItem("selectedSymbol");

  const [currency, setCurrency] = useState(storedCurrency || "USD");
  const [symbol, setSymbol] = useState(storedSymbol || "$");

  useEffect(() => {
    localStorage.setItem("selectedCurrency", currency);
    localStorage.setItem("selectedSymbol", symbol);
  }, [currency, symbol]);

  return (
    <CurrencyContext.Provider
      value={{ symbol, currency, setCurrency, setSymbol }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
