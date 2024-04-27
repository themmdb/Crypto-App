import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

import { searchCoin } from "../../services/cryptoApi.js";

function Search({ currency, setCurrecy }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoadoing, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) {
      setisLoading(false);
      return;
    }

    const Search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setisLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          alert(err.message);
        }
      }
    };
    setisLoading(true);
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
        {isLoadoing && <MagnifyingGlass width="50px" height="50px" glassColor="#ddf5fd" color="#3874FF" />}
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
