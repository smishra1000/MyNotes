module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'tests/spec/**/*.spec.js'
    ],
    preprocessors: {
      'tests/spec/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: []
      },
      resolve: {
        extensions: ['.js']
      }
    },
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
    ],
  });
};
