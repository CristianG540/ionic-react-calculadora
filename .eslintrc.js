module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'react-app/jest'
  ],
  plugins: [
    '@typescript-eslint',
    'testing-library',
    'jest-dom',
    'react-hooks',
    'react',
    'import'
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: 'src/**/*.test.{js,ts,tsx}',
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'class-methods-use-this': 0,
    'import/newline-after-import': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [2, { caseSensitive: false }], // ts already checks case sensitive imports
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 1,
    'no-param-reassign': 1,
    'no-console': 1,
    'no-unused-vars': 0,
    'prefer-template': 2,
    'require-yield': 0,
    'constructor-super': 'error',
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    radix: 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
