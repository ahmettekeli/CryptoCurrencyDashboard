import { useState } from "react";
import { useGlobalState } from "context/Store";
import {
  RightTh,
  Wrapper,
  StyledArrowDownwardIcon,
  StyledArrowUpwardIcon,
  StyledTh,
} from "./CurrencyHeader.styles";

function CurrencyHeader() {
  const { theme } = useGlobalState();
  const [isClickedPrice, setIsClickedPrice] = useState(false);
  const [isClickedChange, setIsClickedChange] = useState(false);
  const [isClickedVolume, setIsClickedVolume] = useState(false);

  function togglePrice() {
    setIsClickedPrice(!isClickedPrice);
  }

  function toggleChange() {
    setIsClickedChange(!isClickedChange);
  }

  function toggleVolume() {
    setIsClickedVolume(!isClickedVolume);
  }

  return (
    <Wrapper theme={theme}>
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
