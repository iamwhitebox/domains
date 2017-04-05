const config = {};

config.env = process.env.NODE_ENV || 'development';

config.SERVER_PORT = process.env.SERVER_PORT || 3010;

config.AUTH_MODE = process.env.AUTH_MODE || 'development';

config.DEFAULT_USER = process.env.DEFAULT_USER || 'CHANGEME';
config.DEFAULT_USER_DATA = process.env.DEFAULT_USER_DATA || 'TODO: JSON file with default user data';

config.AUTH_API = process.env.AUTH_API || 'TODO: Auth API details';

config.API_MODE = config.env || 'development';

config.API_KEY = 'lNudxB_Fyb3Vl-vSgVkXwv_sQq48McBs';

if (config.env === 'production') {
  config.API_ROOT = process.env.API_ROOT || 'https://myapi.com/api/v1/items';
} else if (config.API_MODE === 'mock') {
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3010';
} else if (config.API_MODE === 'development') {
  config.API_ROOT = process.env.API_ROOT || 'https://api.mlab.com/api/1/databases/domains/collections/domains?apiKey=' + config.API_KEY;
} else {
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3001/api/v1/items';
}

config.whitelist = ['cars', 'lol'];
config.whitelistValue = '✓';

module.exports = config;
