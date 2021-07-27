import { createLogger, format as winstonFormat, transports } from "winston";

const format = winstonFormat.combine(
  winstonFormat.colorize(),
  winstonFormat.simple(),
  winstonFormat.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
  winstonFormat.align(),
  winstonFormat.printf(
    (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
  )
);

export default createLogger({
  transports: [
    new transports.File({
      level: "error",
      filename: "logs/errors.log",
      format,
    }),
  ],
});
