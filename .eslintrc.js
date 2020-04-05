module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/prop-types": "off",
    "react/no-string-refs": "off",
    "no-unused-wars": "off"
  }
};
