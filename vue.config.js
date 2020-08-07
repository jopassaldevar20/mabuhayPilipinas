module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Mabuhay Pilipinas';

      return args;
    });
  },
  lintOnSave: false,
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mabuhayPilipinas/'
    : '/'
};
