const debug = require('debug');

module.exports.stringify = (obj) => {
  return JSON.stringify(obj, null, 0);
};

module.exports.parse = (str) => {
  return JSON.parse(str);
};

module.exports.LoggerFactory = (source) => (method) => {
  const logger = debug('app');

  return {
    info(message, ...args) {
      logger(
        `%o - INFO :: ${source} :: ${method} :: ${message}`,
        new Date(),
        ...args,
      );
    },

    warn(message, ...args) {
      logger(
        `%o - WARN :: ${source} :: ${method} :: ${message}`,
        new Date(),
        ...args,
      );
    },

    error(message, ...args) {
      logger(
        `%o - ERROR :: ${source} :: ${method} :: ${message}`,
        new Date(),
        ...args,
      );
    },
  };
};
