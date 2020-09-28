module.exports = {
	'extends': [
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react'
	],
	'plugins': [
		'react'
	],
	'globals': {
		'$': true,
		'jQuery': true
	},
	'rules': {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		'prettier/prettier': 'error',
		'react/jsx-uses-vars': 1,
		'no-unused-vars': 'warn',
		'no-console': 1,
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		"jsx-a11y/anchor-is-valid": [ "error", {
			"components": [ "Link" ],
			"specialLink": [ "to" ]
		}],
		"import/no-cycle": [0],
		"react/jsx-props-no-spreading": "off",
	},
	'env': {
		'es6': true,
		'browser': true,
		'node': true,
	},

	'parser': 'babel-eslint',

	'parserOptions': {
		'ecmaVersion': 2017,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
};
