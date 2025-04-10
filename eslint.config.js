import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
				...globals.browser,
				...globals.node,
        ...globals.jest,
				myCustomGlobal: "readonly",
			}
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
      'prettier': prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': 'warn',  // Warn on unused variables
      '@typescript-eslint/explicit-module-boundary-types': 'off',  // Optional: Enforce explicit return types
      '@typescript-eslint/no-explicit-any': 'warn',  // Warn about usage of 'any' type
      '@typescript-eslint/explicit-function-return-type': 'warn',  // Warn about missing return types on functions
      '@typescript-eslint/member-ordering': 'error',  // Enforce member ordering in classes/interfaces
      '@typescript-eslint/no-inferrable-types': 'warn',  // Warn when types can be inferred
      '@typescript-eslint/ban-ts-comment': 'warn',  // Warn on `@ts-ignore` comments, which bypass type checks

      // React-specific rules
      'react/jsx-uses-react': 'off',  // Not necessary with React 17 JSX transform
      'react/react-in-jsx-scope': 'off',  // Not necessary with React 17 JSX transform
      'react/prop-types': 'off',  // We use TypeScript types, so prop-types are redundant
      'react/jsx-uses-vars': 'error',  // Prevent variables from being marked as unused when used in JSX
      'react/display-name': 'off',  // Disable display-name rule for functional components
      'react/jsx-pascal-case': 'error',  // Enforce PascalCase for component names in JSX

      // Best practices
      'no-console': 'warn',  // Warn when console.log() is used
      'no-debugger': 'error',  // Disallow `debugger` statements
      'no-alert': 'warn',  // Warn on the usage of `alert`
      'no-eval': 'error',  // Disallow the use of `eval()` for security reasons
      'no-implicit-coercion': 'warn',  // Warn about implicit type coercion (e.g., `!!foo`)
      'no-undef': 'error',  // Disallow the use of undeclared variables
      'eqeqeq': ['warn', 'smart'],  // Enforce strict equality (`===`)
      'curly': ['error', 'all'],  // Enforce consistent use of curly braces
      'consistent-return': 'warn',  // Ensure `return` statements are consistent (either always or never used)
      'prefer-const': 'warn',  // Prefer `const` for variables that are never reassigned
      'no-magic-numbers': 'warn',  // Warn on the use of magic numbers (like `5`, `100`, etc.)

      // TypeScript-specific (advanced)
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],  // Prefer `Array<Type>` instead of `Type[]`
      '@typescript-eslint/explicit-module-boundary-types': 'warn',  // Warn about missing return types on functions
      '@typescript-eslint/no-var-requires': 'warn',  // Warn when using `require` statements in TypeScript
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],

      // Prettier integration
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],  
    },
  },
)
