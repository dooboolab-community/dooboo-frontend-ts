const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion',
    '@babel/plugin-transform-runtime',
    'babel-plugin-fbt-runtime',
    [
      'babel-plugin-fbt',
      {
        fbtEnumPath: path.join(__dirname, '.enum_manifest.json'),
        extraOptions: {__self: true},
      },
    ],
  ],
};
