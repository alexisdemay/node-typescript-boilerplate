import log4js, { Logger } from 'log4js';
import { DEFAULT_LOG_FILENAME } from './constants';

export function configureLogger(
  logFilename?: string | undefined | null
): Logger {
  log4js.configure({
    appenders: {
      fileAppender: {
        type: 'file',
        filename: logFilename ? logFilename : DEFAULT_LOG_FILENAME,
      },
      consoleAppender: {
        type: 'console',
      },
    },
    categories: {
      default: {
        appenders: ['consoleAppender'],
        level: 'debug',
      },
      myapp: {
        appenders: ['fileAppender', 'consoleAppender'],
        level: 'info',
      },
    },
  });
  return getLogger();
}

export function getLogger(): Logger {
  return log4js.getLogger('myapp');
}
