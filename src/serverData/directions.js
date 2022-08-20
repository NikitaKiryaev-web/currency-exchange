export const directions = [
  { code: "BTC", name: "Bitcoin BTC " },
  { code: "ETH", name: "Ethereum ETH " },
  { code: "CASHUSD", name: "Наличные USD " },
  { code: "CASHRUB", name: "Наличные RUB " },
  { code: "ACRUB", name: "Альфа-банк RUB " },
  { code: "SBERRUB", name: "Сбербанк RUB " },
  { code: "TCSBRUB", name: "Тинькофф RUB " },
  { code: "USDTTRC", name: "Tether TRC20 USDT " },
];

export const currencyFilters = {
  crypto: directions.filter(
    (item) =>
      item.code === "BTC" || item.code === "USDTTRC" || item.code === "ETH"
  ),
  cash: directions.filter(
    (item) => item.code === "CASHUSD" || item.code === "CASHRUB"
  ),
  banksRU: directions.filter(
    (item) =>
      item.code === "SBERRUB" ||
      item.code === "ACRUB" ||
      item.code === "TCSBRUB"
  ),
  all: [...directions],
};
console.log(currencyFilters);
