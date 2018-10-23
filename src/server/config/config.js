const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/assignment',
};

module.exports = config;
