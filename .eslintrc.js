module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    document: true,
    navigator: true,
    window: true,
    node: true,
  },
  rules: {
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'no-tabs': 0,
    'class-methods-use-this': 0,
    'import/no-unresolved': 1,
    indent: 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 1,
    'no-console': 'off', // 在这禁止掉console报错检查
    'no-irregular-whitespace': 'off'// 这禁止掉 空格报错检查
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        config: './webpack.dev.js',
      },
    },
  },
};
