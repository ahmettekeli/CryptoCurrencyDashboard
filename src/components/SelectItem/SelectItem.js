import { useGlobalState } from "context/Store";
import {
  ItemDetail,
  ItemDetailChange,
  ItemLogo,
  ItemProfile,
  ItemSymbol,
  Wrapper,
} from "./SelectItem.styles";

function SelectItem({ image, name, symbol, price, change }) {
  const { theme } = useGlobalState();
  return (
    <Wrapper theme={theme}>
      <ItemProfile>
        <ItemLogo src={image} alt={name} />
        <div>{name}</div>
        <ItemSymbol>{symbol.toUpperCase()}</ItemSymbol>
      </ItemProfile>
      <ItemDetail>
        <div>{price}</div>
        {/* TODO: fix showing change in red when change = 0  */}
        <ItemDetailChange isPositive={change > 0}>
          %{change.toFixed(1)}
        </ItemDetailChange>
      </ItemDetail>
    </Wrapper>
  );
}

export default SelectItem;
