module.exports = {
  root: true,
  extends: ['@dooboo/eslint-config-react'],
  rules: {
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 0,
    'jest/valid-expect-in-promise': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
  },
};
