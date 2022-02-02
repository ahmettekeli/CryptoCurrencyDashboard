import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CurrencyContainer from "../CurrencyContainer";

describe("CurrencyContainer", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<CurrencyContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CurrencyContainer />);
    expect(getByTestId("currency-container")).toBeInTheDocument();
  });

  //TODO: finish up with currency container tests.
  it("renders correct amount of currencies", () => {});
  it("changes theme accordingly.", () => {});
});
