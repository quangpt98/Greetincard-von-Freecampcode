// Beispiel Closure (Funktion in ein Funktion)

function createLogger(namespace){
  function logger(message){
    console.log(`[${namespace}] ${message}`)
  }
  return logger
}


const logger1 = createLogger("INFOR")

logger1("Hier ist Fehler txt")