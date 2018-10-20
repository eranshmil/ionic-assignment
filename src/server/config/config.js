const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/assignment',
  defaultUrl: process.env.DEFAULT_URL || 'https://www.google.com',
};

module.exports = config;
