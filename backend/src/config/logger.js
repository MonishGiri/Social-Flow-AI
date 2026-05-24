import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",

  redact: {
    paths: ["req.body.password", "req.headers.authorization"],
    censor: "***REDACTED***"
  },

  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: true,
      ignore: "pid,hostname"
    }
  }
});

export default logger;
