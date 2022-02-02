import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import InfoIcon from "@material-ui/icons/Info";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LineChart from "components/LineChart/LineChart";
import SelectBox from "components/SelectBox/SelectBox";
import { useGlobalState } from "context/Store";
import { findCurrency, formatPrice } from "utility";
import {
  CurrencyInfo,
  DetailHeader,
  InfoButton,
  InfoContainer,
  InfoText,
  PriceContainer,
  PriceChangeContainer,
  Wrapper,
} from "./DetailContainer.styles";
import { lineChartSize } from "components/LineChart/LineChart.styles";

function DetailContainer() {
  const { id } = useParams();
  const { currencies, selectedCurrency, setSelectedCurrency, theme } =
    useGlobalState();
  // const changePercent = selectedCurrency.price_change_percentage_1h_in_currency;
  // const price = selectedCurrency.current_price;
  // const chartData = selectedCurrency.sparkline_in_7d.price.slice(0, 50);

  const [changePercent, setChangePercent] = useState(0);
  const [price, setPrice] = useState(0);
  const [chartData, setChartData] = useState([]);

  //TODO: Fix using red color when change = 0;
  const isPositive = changePercent > 0;

  //TODO: Fix visiting directly to /trade/bitcoin
  useEffect(() => {
    if (isEmpty(selectedCurrency)) {
      const currency = findCurrency(currencies, id);
      setChangePercent(currency.price_change_percentage_1h_in_currency);
      setPrice(currency.current_price);
      setChartData(currency.sparkline_in_7d.price.slice(0, 50));
    } else {
      setChangePercent(selectedCurrency.price_change_percentage_1h_in_currency);
      setPrice(selectedCurrency.current_price);
      setChartData(selectedCurrency.sparkline_in_7d.price.slice(0, 50));
    }
  }, [selectedCurrency, currencies]);

  return (
    <Wrapper data-testid="detail-container">
      <DetailHeader>
        <SelectBox />
        <InfoContainer>
          <InfoText>BILGILENDIRME</InfoText>
          <InfoButton>
            <InfoIcon />
          </InfoButton>
        </InfoContainer>
      </DetailHeader>
      <LineChart
        data={chartData}
        size={lineChartSize.LARGE}
        width={500}
        height={500}
      />
      <CurrencyInfo>
        <PriceContainer theme={theme}>{`₺${formatPrice(
          price
        )}`}</PriceContainer>
        <PriceChangeContainer isPositive={isPositive}>
          {`%${changePercent.toFixed(2)}`}
          {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          {/* {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
        </PriceChangeContainer>
      </CurrencyInfo>
    </Wrapper>
  );
}

export default DetailContainer;
