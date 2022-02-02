import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CurrencyFooter from "../CurrencyFooter";

describe("CurrencyFooter", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<CurrencyFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CurrencyFooter />);
    expect(getByTestId("currency-footer")).toBeInTheDocument();
  });

  //TODO: finish up with currency footer tests.
  it("redirects to trade page on click", () => {});
  it("changes theme accordingly.", () => {});
});
