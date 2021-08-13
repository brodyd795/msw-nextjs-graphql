if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	require("../__MOCKS__");
}

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
