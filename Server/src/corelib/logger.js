import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import config from "config";
import httpContext from "express-http-context";

/** Logger - This class help us for logging mechanism  */
class Logger {
  types = ["transport", "inbound", "info", "error", "debug", "trace"]; // list of log methods
  serviceName = config?.service;
  loggerObj = {};

  // Initializing  -  all type of log methods 
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

  /**
   * getTransport - This function will return the daily rotate configuration for log files
   * @param {Sting} logType - type of log  transport | inbound | info | error | debug | trace
   * @returns 
   */
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



  /**
   * getLogtype - This function will return all the Initialized log functions
   * @returns 
   */

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
