const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-Dp39g9mUSyhsVJy7VTgXSNx8";
const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?&x_cg_demo_api_key=${API_KEY}&vs_currency=${currency}&per_page=20&page=${page}`;
};

const searchCoin = (query) => {
  return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
};

const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};
export { getCoinList, searchCoin, marketChart };
