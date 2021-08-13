import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../__MOCKS__/handlers";

export const server = setupServer(...handlers);

export const renderWithProviders = (ui) => {
	const Wrapper = () => <MockedProvider>{ui}</MockedProvider>;

	return render(<Wrapper />);
};
