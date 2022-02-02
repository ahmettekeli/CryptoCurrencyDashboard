import { Wrapper } from "./CurrencyContainer.styles";
import CurrencyItem from "../CurrencyItem/CurrencyItem";
import CurrencyHeader from "components/CurrencyHeader/CurrencyHeader";
import CurrencyFooter from "components/CurrencyFooter/CurrencyFooter";
import { useGlobalState } from "context/Store";

function CurrencyContainer() {
  const { currencies } = useGlobalState();

  function generateCurrencyItems(currencies) {
    return currencies.slice(0, 6).map((currency) => {
      return (
        <CurrencyItem
          key={currency.id}
          id={currency.id}
          image={currency.image}
          name={currency.name}
          symbol={currency.symbol}
          price={currency.current_price}
          changePercent={currency.price_change_percentage_1h_in_currency}
          volume={currency.total_volume}
          chartData={currency.sparkline_in_7d.price.slice(0, 50)}
        />
      );
    });
  }

  return (
    <Wrapper data-testid="currency-container">
      <table>
        <CurrencyHeader />
        <tbody>{generateCurrencyItems(currencies)}</tbody>
      </table>
      <CurrencyFooter />
    </Wrapper>
  );
}

export default CurrencyContainer;
