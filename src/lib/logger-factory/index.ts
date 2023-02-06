import path from 'path';
import { createLogger, format, Logger, transports } from 'winston';

class LoggerFactory {
  private winstonLogger(filename: string): Logger {
    const filePath: string = path.relative(process.cwd(), filename);

    return createLogger({
      format: format.combine(
        format.errors({ stack: true }),
        format.label({ label: filePath }),
        format.timestamp({
          format: 'DD/MM/YY HH:mm:ss'
        }),
        format.printf(
          ({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`
        )
      ),
      transports: [
        new transports.File({ filename: './logs/error.log', level: 'error' }),
        new transports.File({ filename: './logs/warn.log', level: 'warn' }),
        new transports.File({ filename: './logs/debug.log', level: 'debug' }),
        new transports.File({ filename: './logs/info.log', level: 'info' }),
        new transports.Console()
      ]
    });
  }

  getLogger(filename: string): Logger {
    return this.winstonLogger(filename);
  }
}

export default new LoggerFactory();
