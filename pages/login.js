import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../components/apollo-client";
import { LoginForm } from "../components/login-form";

const Login = () => (
	<ApolloProvider client={client}>
		<LoginForm />
	</ApolloProvider>
);

export default Login;
