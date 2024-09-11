import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  ChainlinkPlugin,
  MainnetPriceFeeds,
} from "@chainsafe/web3-plugin-chainlink";

interface Crypto {
  amount: number;
  price: number;
  name: string;
  conversionAddress: string;
  label: string;
}

const Price: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([
    {
      amount: 0,
      price: 0,
      name: "Eth",
      conversionAddress: MainnetPriceFeeds.EthUsd,
      label: "From",
    },
    {
      amount: 0,
      price: 0,
      name: "Btc",
      conversionAddress: MainnetPriceFeeds.BtcUsd,
      label: "To",
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const web3 = new Web3((window as any).ethereum);
    web3.registerPlugin(new ChainlinkPlugin());

    const checkNetwork = async () => {
      const networkId = await web3.eth.net.getId();
      //   if (networkId !== 1n) {
      //     alert("Please switch to the Ethereum Mainnet to use this application.");
      //   }
    };

    const fetchPrices = async () => {
      setLoading(true);
      try {
        const firstResult = await web3.chainlink.getPrice(
          cryptos[0].conversionAddress
        );
        const secondResult = await web3.chainlink.getPrice(
          cryptos[1].conversionAddress
        );

        const firstPrice = parseFloat(firstResult.answer) / 1e8;
        const secondPrice = parseFloat(secondResult.answer) / 1e8;

        setCryptos((prev) => [
          { ...prev[0], price: firstPrice },
          { ...prev[1], price: secondPrice },
        ]);
      } catch (error) {
        console.error("Error fetching prices:", error);
      } finally {
        setLoading(false);
      }
    };

    checkNetwork();
    fetchPrices();
  }, [cryptos[0].conversionAddress, cryptos[1].conversionAddress]);

  const handleConversion = () => {
    if (cryptos[0].amount && cryptos[0].price && cryptos[1].price) {
      const conversionResult =
        (cryptos[0].amount * cryptos[0].price) / cryptos[1].price;
      setCryptos((prev) => [prev[0], { ...prev[1], amount: conversionResult }]);
    }
  };

  const filteredPriceFeeds = Object.entries(MainnetPriceFeeds).filter(([key]) =>
    key.endsWith("Usd")
  );

  const currencies = Array.from(
    new Set(
      filteredPriceFeeds.map(([key, value]) => {
        return {
          name: key.replace("Usd", ""),
          address: value as string,
        };
      })
    )
  );

  const handleInputChange = (
    index: number,
    field: keyof Crypto,
    value: string | number
  ) => {
    setCryptos((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">Crypto Price Converter</h2>
      <p className="font-bold text-lg mb-6">
        (Convert between any two Cryptocurrencies)
      </p>

      <div className="flex gap-8">
        {cryptos.map((crypto, index) => (
          <div key={index} className="flex flex-col gap-4">
            <label className="font-bold">{crypto.label}</label>
            <input
              className="border border-gray-300 p-2 rounded"
              type="number"
              placeholder="amount"
              value={crypto.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", parseFloat(e.target.value))
              }
            />
            <select
              className="border border-gray-300 p-2 rounded"
              value={crypto.name}
              onChange={(e) => {
                const selectedCurrency = currencies.find(
                  (currency) => currency.name === e.target.value
                );
                handleInputChange(index, "name", selectedCurrency?.name || "");
                handleInputChange(
                  index,
                  "conversionAddress",
                  selectedCurrency?.address || ""
                );
              }}
            >
              {currencies.map((currency) => (
                <option key={currency.name + index} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
            <p className="text-sm font-bold">
              {crypto.name}/USD:{" "}
              {loading
                ? "Loading..."
                : crypto.price
                ? `$${crypto.price.toFixed(2)}`
                : "Loading..."}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleConversion}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Convert
      </button>

      {cryptos[1].amount ? (
        <p className="mt-4 text-lg">
          Converted Amount: {cryptos[1].amount.toFixed(2)} {cryptos[1].name}
        </p>
      ) : null}

      <footer className="mt-12">
        <p>
          Made by{" "}
          <a
            href="https://github.com/jovells"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Jovells
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Price;
