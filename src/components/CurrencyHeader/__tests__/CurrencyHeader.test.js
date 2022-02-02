import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CurrencyHeader from "../CurrencyHeader";

describe("CurrencyHeader", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const tree = renderer.create(<CurrencyHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CurrencyHeader />);
    expect(getByTestId("currency-header")).toBeInTheDocument();
  });

  //TODO: finish up with currency header tests.
  it(("renders correct amount of column headers", () => {}));
  it(("sorts by price ascending", () => {}));
  it(("sorts by price ascending", () => {}));
  it(("sorts by change percentage ascending", () => {}));
  it(("sorts by change percentage descending", () => {}));
  it(("sorts by volume ascending", () => {}));
  it(("sorts by volume descending", () => {}));
  it("shows correct theme", () => {});
});
