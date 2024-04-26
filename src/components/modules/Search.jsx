function Search({ currency, setCurrecy }) {
  return (
    <div>
      <input type="text" />
      <select value={currency} onChange={(e) => setCurrecy(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
