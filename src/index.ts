import loggerFactory from './lib/logger-factory';

const logger = loggerFactory.getLogger(__filename);

(async () => {
  try {
    logger.info('Application initialized');
  } catch (err) {
    logger.error(err);
  }
})();
