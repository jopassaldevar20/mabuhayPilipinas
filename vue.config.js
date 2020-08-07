module.exports = {
  lintOnSave: false,
  outputDir: './docs',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Mabuhay Pilipinas';

      return args;
    });
  }
};
