require('dotenv').config();

module.exports = {
    appName     : process.env.APP_NAME,
    appEnv      : process.env.APP_ENV,
    appPort     : process.env.APP_PORT,
    apiKey      : process.env.API_KEY,
    apiBaseURL  : process.env.API_BASE_URL
};