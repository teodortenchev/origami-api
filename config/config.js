const dbUrl = require('./dbConnectionString');


const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: dbUrl.connectionString,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];