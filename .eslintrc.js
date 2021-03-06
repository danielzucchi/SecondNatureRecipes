module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['prettier', 'import', 'only-warn', 'json'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parser: 'babel-eslint',
  rules: {
    'global-require': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
