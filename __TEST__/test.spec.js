import { LoginForm } from "../components/login-form";

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import { renderWithProviders, server } from "./helpers";

describe("test", () => {
	const renderComponent = () => renderWithProviders(<LoginForm />);

	beforeAll(() => server.listen);

	beforeEach(() => {
		server.resetHandlers();
		server.printHandlers();
	});

	afterAll(() => server.close);

	test("should show user data after user submits form", async () => {
		const { getByText } = renderComponent();

		user.type(await screen.findByLabelText("Username:"), "brody");
		user.click(await screen.findByText("Submit"));

		expect(await screen.findByText("Maverick")).toBeInTheDocument();
	});
});
