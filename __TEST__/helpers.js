import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";
import { client } from "../components/apollo-client";

export const server = setupServer(...handlers);

export const renderWithProviders = (ui) => {
	const Wrapper = () => <ApolloProvider client={client}>{ui}</ApolloProvider>;

	// Note: KCD recommended a different form of doing this.
	// watch office hours video to implement that
	return render(<Wrapper />);
};
