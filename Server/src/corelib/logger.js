import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import config from "config";
import httpContext from "express-http-context";

class Logger {
  types = ["transport", "inbound", "info", "error", "debug", "trace"];
  serviceName = config?.service;
  loggerObj = {};
  constructor() {
    const { types, serviceName } = this;
    for (let i = 0; i < types.length; i++) {
      let transports = [this.getTransport(types[i])];

      if (types[i] === "info") {
        transports.push(new winston.transports.Console());
      }
      this.loggerObj[types[i]] = winston.createLogger({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        ),
        level: "info",
        transports,
        defaultMeta:{
          service: serviceName
        }
      });
    }
    return this;
  }
  getTransport = (logType) => {
    const { service } = config;
    return new DailyRotateFile({
      filename: `./logs/${service}-${logType}-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "info",
    });
  };
  getLogtype = () => {
    const { types } = this;
    let logs = {};
    for (let i = 0; i < types.length; i++) {
      const ty = types[i];
      logs[ty] = (data) => {
        this.loggerObj[ty].info({...data, uuid:httpContext.get('uuid')});
      };
    }
    return logs;
  };
}

export default new Logger().getLogtype();
