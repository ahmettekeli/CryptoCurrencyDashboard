import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useGlobalState, themeEnum } from "context/Store";
import { routes, urls } from "configs";
import {
  BlogIcon,
  Content,
  IconButtonContainer,
  IconContainer,
  LogoContainer,
  Wrapper,
  StyledIconButton,
  Container,
  ContainerLeft,
  ContainerRight,
  StyledLink,
} from "./Footer.styles";

function Footer() {
  const { theme, setTheme } = useGlobalState();
  const footerLogoUrl =
    theme === themeEnum.DARK ? urls.footerLogoDark : urls.footerLogoLight;
  const handleThemeSwitch = () => {
    let themeToSet;
    if (theme === themeEnum.DARK) {
      themeToSet = themeEnum.LIGHT;
    } else {
      themeToSet = themeEnum.DARK;
    }
    setTheme(themeToSet);
  };

  return (
    <Wrapper theme={theme} data-testid="footer">
      <ContainerLeft>
        <Content>
          <LogoContainer>
            <img src={footerLogoUrl} alt="logo" />
          </LogoContainer>
        </Content>
        <Content>
          <StyledLink to={routes.support}> Destek İste</StyledLink>
        </Content>
        <Content>
          <StyledLink to={routes.help}> Yardim Merkezi</StyledLink>
        </Content>
      </ContainerLeft>
      <Container>
        <StyledLink to={routes.youtube}>
          <IconContainer>
            <PlayArrowIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink to={routes.facebook}>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink to={routes.twitter}>
          <IconContainer>
            <TwitterIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink to={routes.linkedin}>
          <IconContainer>
            <LinkedInIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink to={routes.instagram}>
          <IconContainer>
            <InstagramIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink to={routes.blog}>
          <IconContainer>
            <BlogIcon>
              <img src={urls.blogLogo} alt="blog logo" />
            </BlogIcon>
          </IconContainer>
        </StyledLink>
      </Container>
      <ContainerRight>
        <IconButtonContainer>
          <StyledIconButton onClick={handleThemeSwitch}>
            {theme === themeEnum.DARK ? <WbSunnyIcon /> : <NightsStayIcon />}
          </StyledIconButton>
        </IconButtonContainer>
        <Content>
          <img src={urls.sslImage} alt="SSL secure" />
        </Content>
      </ContainerRight>
    </Wrapper>
  );
}

export default Footer;
