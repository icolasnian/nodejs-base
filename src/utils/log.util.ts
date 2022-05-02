import winston, { createLogger, format, transports } from 'winston'

/**
 * Custom Logger
 */
const log = createLogger({
  format: format.combine(
    winston.format.colorize(),
    format.splat(),
    format.simple()
  ),
  transports: [new transports.Console()]
})

export default log