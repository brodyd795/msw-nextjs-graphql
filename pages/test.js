import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../components/apollo-client";
import { LoginForm } from "../components/login-form";

// Start the mocking conditionally. --- I think this is handled in the _app.js already...
// if (process.env.NODE_ENV === "development") {
// 	const { worker } = require("../__MOCKS__/browser");
// 	worker.start();
// }

const Test = () => (
	<ApolloProvider client={client}>
		<LoginForm />
	</ApolloProvider>
);

export default Test;
