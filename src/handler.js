const { LoggerFactory, stringify } = require('./utils');
const log = LoggerFactory('handler');

const someScript = async () => {
  log('someScript').warn('run a valid script');
  return 'ran some script';
};

module.exports = {
  async run() {
    try {
      const response = await someScript();

      log('run').info('%o', response);

      return { body: stringify({ response }), statusCode: 200 };
    } catch (error) {
      log('run').error('%o', error);
    }
  },
};
