const config = {};

config.env = process.env.NODE_ENV || 'development';

config.SERVER_PORT = process.env.SERVER_PORT || 3010;

config.AUTH_MODE = process.env.AUTH_MODE || 'development';

config.DEFAULT_USER = process.env.DEFAULT_USER || 'CHANGEME';
config.DEFAULT_USER_DATA = process.env.DEFAULT_USER_DATA || 'TODO: JSON file with default user data';

config.AUTH_API = process.env.AUTH_API || 'TODO: Auth API details';

config.API_MODE = 'mock'; //config.env || 'development';

if (config.env === 'production') {
  config.API_ROOT = process.env.API_ROOT || 'https://myapi.com/api/v1';
} else if (config.API_MODE === 'mock') {
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3010';
} else {
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3001/api/v1';
}

config.whitelist = ['cars', 'lol'];
config.whitelistValue = '✓';

module.exports = config;
