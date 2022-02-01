import styled from "styled-components";
import { colors } from "configs";
import { themeEnum } from "context/Store";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: auto;
  background-color: inherit;
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  border-bottom: 1px solid ${colors.textDark};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.textDark};
`;

export const InfoText = styled.div`
  font-size: small;
  padding: 0 0.2rem;
`;

export const InfoButton = styled.div`
  cursor: pointer;
  padding: 0 0.2rem;
`;

export const CurrencyInfo = styled.div`
  position: absolute;
  top: 50%;
`;
export const PriceContainer = styled.div`
  font-size: xx-large;
  font-weight: bold;
  color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.textDark : colors.textLight};
`;
export const PriceChangeContainer = styled.div`
  text-align: center;
  color: ${(props) => (props.isPositive ? colors.success : colors.error)};
`;
