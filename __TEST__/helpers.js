import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../__MOCKS__/handlers";

export const server = setupServer(...handlers);

export const renderWithProviders = (ui) => {
	console.log(`ui`, ui);
	const Wrapper = () => <MockedProvider>{ui}</MockedProvider>;
	console.log(`Wrapper`, Wrapper);

	return render(<Wrapper />);
};
