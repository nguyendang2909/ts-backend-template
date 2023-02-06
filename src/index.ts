import loggerFactory from './lib/logger-factory';

const logger = loggerFactory.getLogger(__filename);

(async () => {
  try {
    console.log(111);
  } catch (err) {
    logger.error(err.stack || err);
  }
})();
