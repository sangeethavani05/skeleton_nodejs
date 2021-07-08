const { createLogger, format, transports } = require("winston");

const myFunction = (module) => {
  const logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
      }),
      format.printf(info => `${info.timestamp} [${module}] ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " "))
    ),
    transports: [
      new transports.Console()
    ]
  });
  return logger;
};

module.exports = myFunction;
