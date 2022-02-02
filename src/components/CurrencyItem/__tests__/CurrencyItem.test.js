import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CurrencyItem from "../CurrencyItem";

describe("CurrencyItem", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<CurrencyItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CurrencyItem />);
    expect(getByTestId("currency-item")).toBeInTheDocument();
  });

  //TODO: finish up with currency item tests.
  it("redirects to detail page on click", () => {});
  it("shows correct theme", () => {});
});
