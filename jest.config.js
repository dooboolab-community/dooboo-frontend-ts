module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/dist/',
    'src/models',
    'src/stores',
    'src/utils/Functions',
    'src/utils/Icons',
    'src/ui',
  ],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./test/jestSetup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/fileTransformer.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['dist'],
  globals: {
    window: {},
    'ts-jest': {
      babelConfig: false,
      tsConfig: 'tsconfig.json',
    },
  },
};
