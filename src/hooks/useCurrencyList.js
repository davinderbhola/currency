import { useEffect, useState } from "react";

function useCurrencyList() {
  const [currencyList, setCurrencyList] = useState({});

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then((data) => setCurrencyList(data))
      .catch((err) => console.error("Error loading currency names:", err));
  }, []);
  console.log(currencyList);
  return currencyList;
}

export default useCurrencyList;
