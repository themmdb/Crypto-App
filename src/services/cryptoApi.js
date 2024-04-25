const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-Dp39g9mUSyhsVJy7VTgXSNx8";
const getCoinList = () => {
  return `${BASE_URL}/coins/markets?&x_cg_demo_api_key=${API_KEY}&vs_currency=usd&per_page=20&page=1`;
};

export { getCoinList };
