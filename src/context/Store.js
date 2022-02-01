import React, { createContext, useContext, useEffect } from "react";
import Reducer from "./Reducer";
import { actionTypes } from "./ActionTypes";
import useFetch from "hooks/useFetch";
import { getPageTitle } from "utility";

export const themeEnum = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

const initialState = {
  theme: themeEnum.LIGHT,
  currencies: [],
  selectedCurrency: "",
};

export const Context = createContext(initialState);

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  const { data, isError, isLoading } = useFetch(
    process.env.REACT_APP_ALL_CURRENCIES_URL
  );

  const setTheme = (theme) => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: { theme },
    });
  };

  const setCurrencies = (currencies) => {
    dispatch({
      type: actionTypes.SET_CURRENCIES,
      payload: { currencies },
    });
  };

  const setSelectedCurrency = (currency) => {
    dispatch({
      type: actionTypes.SET_SELECTED_CURRENCY,
      payload: { currency },
    });
  };

  useEffect(() => {
    if (!isError && !isLoading && data) {
      setCurrencies(data);
      setSelectedCurrency(data[0]);
      document.title = getPageTitle(data[0].current_price);
    } else {
      //TODO: Implement loading spinner and error notification.
      console.log("error", isError, isLoading);
    }
  }, [isLoading, data, isError]);

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        currencies: state.currencies,
        selectedCurrency: state.selectedCurrency,
        setTheme,
        setCurrencies,
        setSelectedCurrency,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

export function useGlobalState() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
