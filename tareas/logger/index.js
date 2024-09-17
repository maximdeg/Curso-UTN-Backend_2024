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
    this.id_counter = 0;
  }

  addLog(level, modulo, message) {
    let log = new Log(level, modulo, message, Date.now(), this.id_counter++);
    this.logs.push(log);
  }
}
