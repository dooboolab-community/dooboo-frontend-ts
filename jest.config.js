module.exports = {
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  'coverageDirectory': './coverage/',
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    '/test/',
    'src/models',
    'src/stores',
    'src/utils/Functions',
  ],
  'collectCoverage': true,
  'globals': {
    'window': {},
  },
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  'setupFiles': [
    './test/jestSetup.ts'
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  'globals': {
    'ts-jest': {
      'babelConfig': false,
      'tsConfig': 'tsconfig.json'
    }
  }
};
