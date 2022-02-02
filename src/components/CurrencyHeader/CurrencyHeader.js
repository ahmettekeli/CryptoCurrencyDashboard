import { useState } from "react";
import { useGlobalState } from "context/Store";
import { getCurrenciesSortedBy } from "utility";
import {
  RightTh,
  Wrapper,
  StyledArrowDownwardIcon,
  StyledArrowUpwardIcon,
  StyledTh,
} from "./CurrencyHeader.styles";

function CurrencyHeader() {
  const { theme, currencies, setCurrencies } = useGlobalState();
  const [isClickedPrice, setIsClickedPrice] = useState(false);
  const [isClickedChange, setIsClickedChange] = useState(false);
  const [isClickedVolume, setIsClickedVolume] = useState(false);

  const price = "current_price";
  const change = "price_change_percentage_1h_in_currency";
  const volume = "total_colume";

  //TODO: Find out if sorting should be based on one attribute or by multiple attributes.

  function togglePrice() {
    if (isClickedPrice) {
      setCurrencies(getCurrenciesSortedBy(currencies, price, true));
    } else {
      setCurrencies(getCurrenciesSortedBy(currencies, price, false));
    }
    setIsClickedPrice(!isClickedPrice);
  }

  function toggleChange() {
    if (isClickedChange) {
      setCurrencies(getCurrenciesSortedBy(currencies, change, true));
    } else {
      setCurrencies(getCurrenciesSortedBy(currencies, change, false));
    }
    setIsClickedChange(!isClickedChange);
  }

  function toggleVolume() {
    if (isClickedVolume) {
      setCurrencies(getCurrenciesSortedBy(currencies, volume, true));
    } else {
      setCurrencies(getCurrenciesSortedBy(currencies, volume, false));
    }
    setIsClickedVolume(!isClickedVolume);
  }

  return (
    <Wrapper theme={theme} data-testid="currency-header">
      <tr>
        <th></th>
        <RightTh onClick={togglePrice}>
          Son islem{" "}
          {isClickedPrice ? (
            <StyledArrowDownwardIcon />
          ) : (
            <StyledArrowUpwardIcon />
          )}
        </RightTh>
        <RightTh onClick={toggleChange}>
          Degisim
          {isClickedChange ? (
            <StyledArrowDownwardIcon />
          ) : (
            <StyledArrowUpwardIcon />
          )}
        </RightTh>
        <RightTh onClick={toggleVolume}>
          Hacim
          {isClickedVolume ? (
            <StyledArrowDownwardIcon />
          ) : (
            <StyledArrowUpwardIcon />
          )}
        </RightTh>
        <StyledTh>24s Grafik</StyledTh>
        <th></th>
      </tr>
    </Wrapper>
  );
}

export default CurrencyHeader;
