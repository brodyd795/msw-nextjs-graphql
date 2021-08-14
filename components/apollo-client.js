import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink();

export const client = new ApolloClient({
	cache,
	link, // this is apparently required
});
