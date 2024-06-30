import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		env: {
			browser: true,
			es2021: true,
			node: true
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'prettier',
			'plugin:prettier/recommended'
		],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: ['@typescript-eslint', 'prettier'],
		rules: {
			'prettier/prettier': 'error',
			'no-case-declarations': 'off',
			'no-constant-condition': 'off',
			'@typescript-eslint/ban-ts-comment': 'off'
		}
	}
];
