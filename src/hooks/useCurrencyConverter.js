import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyConverter = (baseCurrency, targetCurrency) => {
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (baseCurrency === targetCurrency) {
      return;
    }

    async function fetchCurrencyRate() {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `https://api.frankfurter.dev/v2/rates?base=${baseCurrency}&quotes=${targetCurrency}`,
        );
        const data = await response.data;
        console.log(data);
        setRate(data[0].rate);
      } catch (e) {
        console.log(e, `while fetching  currency rates`);
        setError("failed to fetch currency rates");
      } finally {
        setLoading(false);
      }
    }

    if (baseCurrency && targetCurrency) {
      fetchCurrencyRate();
    }
  }, [baseCurrency, targetCurrency]);
  return { rate: baseCurrency === targetCurrency ? 1 : rate, loading, error };
};
export default useCurrencyConverter;
