import { actionTypes } from "./ActionTypes";

const setTheme = (state, action) => {
  return {
    ...state,
    theme: action.payload.theme,
  };
};

const setCurrencies = (state, action) => {
  return {
    ...state,
    currencies: action.payload.currencies,
  };
};

const setSelectedCurrency = (state, action) => {
  return {
    ...state,
    selectedCurrency: action.payload.currency,
  };
};

const handlers = {
  [actionTypes.SET_THEME]: setTheme,
  [actionTypes.SET_CURRENCIES]: setCurrencies,
  [actionTypes.SET_SELECTED_CURRENCY]: setSelectedCurrency,
};

function Reducer(state, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default Reducer;
