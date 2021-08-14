import { rest, graphql } from "msw";

export const handlers = [
	graphql.mutation("Login", (req, res, ctx) => {
		const { username } = req.variables;

		if (username === "non-existing") {
			return res(
				ctx.errors([
					{
						message: "User not found",
						extensions: {
							id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
						},
					},
				])
			);
		}

		return res(
			ctx.data({
				user: {
					__typename: "User",
					id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
					firstName: "John",
					lastName: "Maverick",
				},
			})
		);
	}),
	rest.get("https://my.backend/book", (req, res, ctx) => {
		return res(
			ctx.json({
				title: "Lord of the Rings",
				description:
					"The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
			})
		);
	}),
	rest.get("/reviews", (req, res, ctx) => {
		return res(
			ctx.json([
				{
					id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
					author: "John Maverick",
					text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
				},
			])
		);
	}),
];
