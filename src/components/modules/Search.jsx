import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi.js";

function Search({ currency, setCurrecy }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) return;

    const Search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          alert(err.message);
        }
      }
    };
    Search();

    return () => controller.abort();
  }, [text]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrecy(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;