module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
  },
};
