import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoin.jsx";
import { getCoinList } from "../../services/cryptoApi.js";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";
import Chart from "../modules/Chart.jsx";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrecy] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (err) {
        alert(err.message);
      }
    };

    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrecy={setCurrecy} />
      <TableCoins
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
