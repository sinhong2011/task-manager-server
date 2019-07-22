const mongoose = require('mongoose');
const { config } = require('../config/default');

console.log(config.dbUrl);
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
