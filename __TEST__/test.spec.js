import Test from "../pages/test";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("test", () => {
	test("should do a thing", () => {
		const { getByText } = render(<Test />);

		expect(getByText("First Test")).toBeInTheDocument();
	});
});
