import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";

import { LoginForm } from "../components/login-form";

import { renderWithProviders, server } from "./helpers";

describe("login", () => {
	// for this server.listen to work, this beforeAll HAS to have a full block,
	// unlike where we can have `beforeAll(() => RTL.cleanup)` and that works fine
	beforeAll(() => {
		server.listen();
	});

	beforeEach(() => {
		server.resetHandlers();
	});

	afterAll(() => {
		server.close();
	});

	test("should show user data after user submits form", async () => {
		renderWithProviders(<LoginForm />);

		user.type(await screen.findByLabelText("Username:"), "brody");
		user.click(await screen.findByText("Submit"));

		expect(await screen.findByText("Maverick")).toBeInTheDocument();
	});
});
