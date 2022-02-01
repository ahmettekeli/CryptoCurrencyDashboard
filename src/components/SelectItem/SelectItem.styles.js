import { colors } from "configs";
import { themeEnum } from "context/Store";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  padding: 1.5rem 1rem;
  border: 1px solid
    ${(props) =>
      props.theme === themeEnum.DARK
        ? colors.currencyBorderDark
        : colors.currencyBorderLight};
  color: ${(props) =>
    props.theme === themeEnum.DARK ? colors.textDark : colors.textLight};
  background-color: ${(props) =>
    props.theme === themeEnum.DARK
      ? colors.currencyDark
      : colors.currencyLight};
`;

export const ItemProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    margin: 0 0.3rem;
  }
`;

export const ItemLogo = styled.img`
  margin: 0 0.3rem;
  width: 2rem;
  height: 2rem;
`;
export const ItemSymbol = styled.div`
  font-size: small;
  color: gray;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemDetailChange = styled.span`
  font-size: small;
  color: ${(props) => (props.isPositive ? colors.success : colors.error)};
`;
