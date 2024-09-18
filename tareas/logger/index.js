const filesystem = require("fs");

class Log {
  constructor(level, modulo, message, timestamp, id) {
    this.level = level;
    this.modulo = modulo;
    this.message = message;
    this.timestamp = timestamp;
    this.id = id;
  }
}

class LoggerManager {
  constructor() {
    this.logs = [];
    this.id_counter = 1;
  }

  addLog(level, modulo, message) {
    const log = new Log(level, modulo, message, new Date(), this.id_counter++);
    this.logs.push(log);

    const contentString = `\n[ID: ${log.id}] [${log.level.toUpperCase()}] [${
      log.modulo
    }] [${log.timestamp.getFullYear()}-${
      log.timestamp.getMonth() + 1
    }-${log.timestamp.getDate()} ${log.timestamp.getHours()}:${log.timestamp.getMinutes()}:${log.timestamp.getSeconds()}] ${
      log.message
    }`;

    this.writeLog(contentString);
  }

  writeLog(contentString) {
    if (filesystem.existsSync("./logs/logs.txt")) {
      filesystem.appendFileSync("./logs/logs.txt", contentString, "utf-8");
    } else {
      filesystem.writeFileSync("./logs/logs.txt", contentString, "utf-8");
    }
  }
}

const logger = new LoggerManager();
logger.addLog("debug", "app.js", "Error al suscribir email");
logger.addLog("info", "app.js", "Usuario suscripto con username");
logger.addLog("warn", "app.js", "Usuario suscripto con e-mail");
logger.addLog("error", "app.js", "Error al suscribir usuario");
console.log(logger.logs);
