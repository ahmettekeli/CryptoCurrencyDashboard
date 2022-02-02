import { useNavigate } from "react-router-dom";
import { useGlobalState } from "context/Store";
import LineChart from "components/LineChart/LineChart";
import { findCurrency, nFormatter } from "utility";
import { routes } from "configs";
import {
  BuyButton,
  ChangePercent,
  ChartTd,
  CurrencyProfile,
  Wrapper,
  StyledTd,
  TdRight,
} from "./CurrencyItem.styles";

function CurrencyItem({
  id,
  image,
  name,
  symbol,
  price,
  changePercent,
  volume,
  chartData,
}) {
  const navigate = useNavigate();
  const { currencies, theme, setSelectedCurrency } = useGlobalState();

  function onClick() {
    setSelectedCurrency(findCurrency(currencies, id));
    navigate(`${routes.trade}/${id}`);
  }

  return (
    <Wrapper theme={theme} onClick={onClick} data-testid="currency-item">
      <StyledTd>
        <CurrencyProfile>
          <img src={image} height="25" width="25" alt={name} />
          <div>
            <strong>{name}</strong> {symbol.toUpperCase()}-TL
          </div>
        </CurrencyProfile>
      </StyledTd>
      <TdRight>
        <div>{price} TL</div>
      </TdRight>
      <TdRight>
        <ChangePercent isPositive={changePercent > 0}>
          %{changePercent.toFixed(1)}
        </ChangePercent>
      </TdRight>
      <TdRight>{`${nFormatter(volume)} ${symbol.toUpperCase()}`}</TdRight>
      <ChartTd>
        <LineChart data={chartData} height={25} width={50} size={"small"} />
      </ChartTd>
      <TdRight>
        <BuyButton>AL</BuyButton>
      </TdRight>
    </Wrapper>
  );
}

export default CurrencyItem;
