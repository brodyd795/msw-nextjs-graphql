import { LoginForm } from "../components/login-form";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import { renderWithProviders, server } from "./helpers";
import { ApolloProvider } from "@apollo/client";
import { client } from "../components/apollo-client";

describe("login", () => {
	const renderComponent = () =>
		render(
			<ApolloProvider client={client}>
				<LoginForm />
			</ApolloProvider>
		);

	beforeAll(() => {
		server.listen({ onUnhandledRequest: "error" });
	});

	beforeEach(() => {
		server.resetHandlers();
		server.printHandlers();
	});

	afterAll(() => server.close);

	test("should show user data after user submits form", async () => {
		renderComponent();

		user.type(await screen.findByLabelText("Username:"), "brody");
		user.click(await screen.findByText("Submit"));

		expect(await screen.findByText("Maverick")).toBeInTheDocument();
	});
});
