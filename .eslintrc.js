module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended",
		"airbnb",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "jest"],
	rules: {
		"no-tabs": "off",
		indent: ["error", "tab"],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"tailwind.config.js",
					"postcss.config.js",
					"**/*.test.js",
					"jest.setup.js",
				],
			},
		],
		"import/prefer-default-export": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
		"react/jsx-closing-bracket-location": "off",
		"react/props-type": "off",
		"react/button-has-type": "warn",
		"react/no-unescaped-entities": "off",
		"@next/next/no-page-custom-font": "off",
	},
};
