module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'no-console': 1,
    'no-unused-vars': 0,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/prop-types': 0,
    'import/newline-after-import': 1,
    'import/no-duplicates': 2,
    'import/namespace': 0,
    /*'react/react-in-jsx-scope': 0,
        'react/jsx-curly-spacing': [2, 'never'],
        'react/prop-types': 0,

        'no-console': 1,
        'no-unused-vars': 0,

        'react/jsx-filename-extension': 0,
        /!*'import/extensions': ['error', 'js' | 'jsx'],*!/
        'import/newline-after-import': 1,
        'import/no-duplicates': 2,
        'import/namespace': 0,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],*/
  },
};
