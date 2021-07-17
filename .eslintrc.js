module.exports = {
  extends: [
    require.resolve('@darkobits/ts-unified/dist/config/eslint-react')
  ],
  rules: {
    'no-console': 'off',
    'no-confusing-arrow': 'off',
    'jsx-a11y/no-onchange': 'off',
  }
};
