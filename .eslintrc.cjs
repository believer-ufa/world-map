module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked', // 'plugin:@typescript-eslint/strict-type-checked' - could be useful
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'react/prop-types': 0,
    'no-shadow': 0,
    'react/no-array-index-key': 0,
    'react/button-has-type': 0,
    'no-nested-ternary': 0,
    indent: ['warn', 2, { SwitchCase: 1 }],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-useless-fragment': 0,
    'function-paren-newline': 0,
    'function-call-argument-newline': 0,
    'no-restricted-exports': 0,
    'default-param-last': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'no-return-assign': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'max-len': ['warn', { code: 130 }],
    'arrow-body-style': 0,
    'react/jsx-one-expression-per-line': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'object-curly-spacing': 2,
    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    'spaced-comment': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': ['error', { ignore: ['.src/'] }],
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
