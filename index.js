module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint-config-airbnb",
  "rules": {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/no-did-mount-set-state": 0,
    semi: [2, "never"],
    quotes: 0,
    radix: 0,
    "default-case": 0,
    "no-else-return": 0,
    "no-underscore-dangle": 0,
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "peerDependencies": true}]
  }
};
