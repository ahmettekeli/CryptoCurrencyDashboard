import InfoIcon from "@material-ui/icons/Info";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LineChart from "components/LineChart/LineChart";
import SelectBox from "components/SelectBox/SelectBox";
import { useGlobalState } from "context/Store";
import { formatPrice } from "utility";
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
  const { selectedCurrency, theme } = useGlobalState();

  const changePercent = selectedCurrency.price_change_percentage_1h_in_currency;
  const price = selectedCurrency.current_price;
  const chartData = selectedCurrency.sparkline_in_7d.price.slice(0, 50);
  //TODO: Fix using red color when change = 0;
  const isPositive = changePercent > 0;

  return (
    <Wrapper>
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
