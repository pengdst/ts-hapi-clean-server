module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'xo',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	rules: {
	},
};
