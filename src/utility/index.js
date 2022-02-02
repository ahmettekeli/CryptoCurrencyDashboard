export function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

function formatPriceForTitle(price) {
  let pricePieces = price.toFixed(2).replace(".", ",").split(",");
  return `${pricePieces[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${
    pricePieces[1]
  }`;
}

export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getPageTitle(price) {
  //TODO: make this dynamic not hard-coded bitcoin.
  return `(${formatPriceForTitle(
    price
  )} - TL - Bitcoin) Yarının dünyasi bu. Paribu`;
}

export function getCurrenciesSortedBy(currencies, col, isAscending = true) {
  let sorted;
  if (isAscending) {
    sorted = [...currencies].sort((a, b) => (a[col] > b[col] ? 1 : -1));
  } else {
    sorted = [...currencies].sort((a, b) => (a[col] < b[col] ? 1 : -1));
  }
  return sorted;
}

export function findCurrency(currencies, id) {
  return currencies.find((currency) => currency.id === id);
}
