const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: { // NEW
    path: `${__dirname}/client/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development' // NEW
};

module.exports = config;
