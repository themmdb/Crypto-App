import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoin.jsx";
import { getCoinList } from "../../services/cryptoApi.js";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(getCoinList());
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      };
      getData();
    } catch (err) {
      console.log(err);
    }

    
  }, []);
  return (
    <div>
      <TableCoins coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
