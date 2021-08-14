import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../__MOCKS__/handlers";
import { client } from "../components/apollo-client";

export const server = setupServer(...handlers);

export const renderWithProviders = (ui) => {
	const Wrapper = () => <ApolloProvider client={client}>{ui}</ApolloProvider>;

	return render(<Wrapper />);
};
