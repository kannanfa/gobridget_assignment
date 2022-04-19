const path  = require('path')
const jsconfig  =  require('./jsconfig.json')

module.exports={
  presets: ['@babel/preset-env'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve(path.resolve(), jsconfig.compilerOptions.baseUrl)],
      },
    ],
  ],
};