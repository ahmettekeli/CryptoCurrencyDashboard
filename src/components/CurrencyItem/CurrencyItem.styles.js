import styled from "styled-components";
import { colors } from "configs";
import { themeEnum } from "context/Store";

//TODO: Fix spacing between elements
//TODO: Add media query for mobile view

export const Wrapper = styled.tr`
  height: 9vh;
  font-size: small;
  color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.textDark : colors.textLight};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK
      ? colors.currencyDark
      : colors.currencyLight};
  border: 1px solid
    ${(props) =>
      props.theme === themeEnum.DARK
        ? colors.currencyBorderDark
        : colors.currencyBorderLight};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === themeEnum.DARK
        ? colors.currencyHoverDark
        : colors.currencyHoverLight};
  }
`;

export const StyledTd = styled.td`
  text-align: center;
  padding: 0 0.5rem;
`;

export const ChartTd = styled(StyledTd)`
  width: 8vw;
`;

export const TdRight = styled.td`
  text-align: right;
  padding: 0 0.5rem;
  span {
    float: right;
  }
`;

export const CurrencyProfile = styled.div`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    margin: 0 0.5rem;
  }
`;

export const ChangePercent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 4vw;
  border-radius: 4px;
  color: ${colors.bodyLight};
  background-color: ${(props) =>
    props.isPositive ? colors.success : colors.error};
`;

export const BuyButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 4vw;
  border-radius: 4px;
  background-color: ${colors.success};
  color: ${colors.bodyLight};
`;
