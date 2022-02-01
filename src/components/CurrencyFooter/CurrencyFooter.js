import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useGlobalState } from "context/Store";
import { routes } from "configs";
import { Wrapper, StyledLink } from "./CurrencyFooter.styles";

function CurrencyFooter() {
  const { theme } = useGlobalState();
  return (
    <StyledLink to={routes.trade}>
      <Wrapper theme={theme}>
        PIYASADAKI TUM KRIPTO PARA BIRIMLERINI KESFEDIN <ArrowRightAltIcon />
      </Wrapper>
    </StyledLink>
  );
}

export default CurrencyFooter;
