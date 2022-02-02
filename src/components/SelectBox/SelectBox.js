import React, { useState, useEffect } from "react";
import { MenuItem, Select } from "@material-ui/core";
import SelectItem from "components/SelectItem/SelectItem";
import { useGlobalState } from "context/Store";
import { findCurrency } from "utility";
import { Wrapper } from "./SelectBox.styles";

function generateOptions(currencies) {
  return currencies.map((currency) => {
    return (
      <MenuItem key={currency.id} value={currency.id}>
        <SelectItem
          image={currency.image}
          name={currency.name}
          symbol={currency.symbol}
          price={currency.current_price}
          change={currency.price_change_percentage_1h_in_currency}
        />
      </MenuItem>
    );
  });
}

function SelectBox() {
  const { currencies, selectedCurrency, setSelectedCurrency } =
    useGlobalState();
  const [currency, setCurrency] = useState("bitcoin");

  function onChange(e) {
    setCurrency(e.target.value);
    setSelectedCurrency(findCurrency(currencies, e.target.value));
  }

  useEffect(() => {
    setCurrency(selectedCurrency.id);
  }, [selectedCurrency]);

  return (
    <Wrapper data-testid="select-box">
      <Select value={currency} onChange={onChange}>
        {generateOptions(currencies)}
      </Select>
    </Wrapper>
  );
}

export default SelectBox;
