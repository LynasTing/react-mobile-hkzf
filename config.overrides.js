// const {
//   override,
//   addWebpackAlias,
//   addWebpackModuleRule,
// } = require('customize-cra')
const path = require('path')

module.exports = override(
  config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
    return config
  },
  addWebpackAlias({
    '@': path.resolve('./src') // @别名
  }),

  // scss全局变量
  // addWebpackModuleRule({
  //   test: /\.scss$/,
  //   use: [
  //     'style-loader',
  //     'css-loader',
  //     'sass-loader',
  //     {
  //       loader: 'sass-resources-loader',
  //       options: {
  //         resources: ['./src/assets/scss/varable.scss'],
  //       },
  //     },
  //   ],
  // }),
)
