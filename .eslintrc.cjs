module.exports = {
	extends: [ // then, enable whichever type-aware rules you want to use
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser', // add the TypeScript parser
	plugins: [
		'svelte3',
		'@typescript-eslint' // add the TypeScript plugin
	],
	overrides: [ // this stays the same
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2023,
		// project: "path/to/your/tsconfig.json",
		extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	settings: {
		'svelte3/typescript': true,
	},
	rules: {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'prefer-const': [
			'error',
			{
				'destructuring': 'all'
			}
		],
		// "@typescript-eslint/no-explicit-any": "off",
		'svelte/valid-compile': 'off',
		"indent": ["error", 2]
	}
}
