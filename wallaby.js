"use strict";

module.exports = () => ({
	debug: true,
	testFramework: "mocha",
	files: [
		"src/**/*.js",
		"test/fixtures/*.json"
	],
	tests: [
		"test/*.spec.js"
	],
	env: {
		type: "node"
	}
});
