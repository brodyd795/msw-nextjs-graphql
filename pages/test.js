import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../components/apollo-client";
import { LoginForm } from "../components/login-form";

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
	const { worker } = require("./mocks/browser");
	worker.start();
}

const Test = () => (
	<ApolloProvider client={client}>
		<LoginForm />
	</ApolloProvider>
);

export default Test;
