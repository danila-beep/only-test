const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: isProduction ? '/' : '/',
      assetModuleFilename: 'assets/[name].[hash][ext][query]'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@widgets': path.resolve(__dirname, 'src/widgets'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@entities': path.resolve(__dirname, 'src/entities'),
        '@shared': path.resolve(__dirname, 'src/shared')
      }
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(css|scss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isProduction 
                    ? '[hash:base64:5]' 
                    : '[name]__[local]--[hash:base64:5]'
                },
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024 // 8kb
            }
          },
          generator: {
            filename: 'images/[name].[hash][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash][ext]'
          }
        }
      ]
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false
      }),
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'public',
              to: '',
              globOptions: {
                ignore: ['**/index.html'],
              },
            },
          ],
        }),
      ] : []),
    ],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'public'),
          publicPath: '/'
        },
        {
          directory: path.join(__dirname, 'dist'),
          publicPath: '/'
        }
      ],
      port: 3000,
      hot: true,
      historyApiFallback: true,
      compress: true,
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
  };
};
