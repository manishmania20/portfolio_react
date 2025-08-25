// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended', // turns off formatting rules; uses Prettier
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'dist/', 'coverage/'],
  plugins: ['jest'],
  rules: {
    // Formatting handled by Prettier
    indent: 'off',
    quotes: 'off',
    'no-tabs': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',

    // Custom rules
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',

    // Allow dev dependencies in test files
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**',
          '**/*.test.*',
          '**/*.spec.*',
          'jest.config.js',
          'jest.setup.js',
          'tailwind.config.js',
          'postcss.config.js',
        ],
      },
    ],
  },
};
