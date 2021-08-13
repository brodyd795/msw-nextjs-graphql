import { LoginForm } from "../components/login-form";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import { renderWithProviders, server } from "./helpers";
import { ApolloProvider } from "@apollo/client";
import { client } from '../components/apollo-client';

describe("login", () => {
	const renderComponent = () => render(<ApolloProvider client={client}>
		<LoginForm />
	</ApolloProvider>);

	beforeAll(() => server.listen);

	beforeEach(() => {
		server.resetHandlers();
		server.printHandlers();
	});

	afterAll(() => server.close);

	test("should show user data after user submits form", async () => {
		renderComponent();

		user.type(await screen.findByLabelText("Username:"), "brody");
		user.click(await screen.findByText("Submit"));

		/*
		So far, so good! The console logs show that the form is successfully submitted with the expected input,
		but as soon as it gets to the GraphQL mutation, it can't find a matching operation in `handlers.js`
		and it crashes with:

			error: ApolloError: No more mocked responses for the query: mutation Login($username: String!) {
				user {
					id
					firstName
					lastName
					__typename
				}
			}
			
			Expected variables: {"username":"brody"}
		
		In fact, it seems that it never even hits the mutation...? See `handlers.js`
		*/

		expect(await screen.findByText("Maverick")).toBeInTheDocument();
	});
});
