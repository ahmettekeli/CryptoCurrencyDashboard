import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";
import Provider from "./context/Store";
import { routes } from "./configs";
import { StyledApp, Content } from "./App.styles";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Provider>
          <StyledApp>
            <Header />
            <Content>
              <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.tradeCurrency} element={<Detail />} />
                <Route path={routes.notFound} element={<NotFound404 />} />
                <Route element={<NotFound404 />} />
              </Routes>
            </Content>
            <Footer />
          </StyledApp>
        </Provider>
      </Router>
    </>
  );
}

export default App;
