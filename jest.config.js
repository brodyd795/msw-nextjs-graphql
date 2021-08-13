module.exports = {
	collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
	transformIgnorePatterns: ["/node_modules/"],
};
