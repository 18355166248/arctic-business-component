const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/components/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: require.resolve('babel-loader'),
        include: [resolve('src')],
        query: {
          cacheDirectory: true,
          plugins: [['import', { libraryName: 'antd', style: true }]],
        },
      },
      {
        test: /\.(css|less)?$/,
        exclude: [resolve('src/components')],
        use: [
          { loader: require.resolve('style-loader') },
          { loader: require.resolve('css-loader') },
          {
            loader: require.resolve('less-loader'),
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(css|less)?$/,
        include: [resolve('src/components')],
        use: [
          { loader: require.resolve('style-loader') },
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: '[path][name]-[local]-[hash:5]',
              },
            },
          },
          {
            loader: require.resolve('less-loader'),
          },
        ],
      },
      {
        test: /\.png?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
