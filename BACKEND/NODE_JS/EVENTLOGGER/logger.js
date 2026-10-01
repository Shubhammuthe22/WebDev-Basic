const fs = require("fs");
const os = require('os');

const EventEmitter = require('events');
//'events' are treated as a class here.

class Logger extends EventEmitter{
    log(message){
        this.emit('message' , {message});
        //emit-It is similar as event listener
        //Whenever a particular event triggers just display or emit the current method. 
    }
}

const logger = new Logger();
const logFile = "./eventlog.txt"

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    //toISOString is used to give the date in the radable format
    fs.appendFileSync(logFile , logMessage);
}

logger.on('message',logToFile);
//Here 'on' means logger is continuously listening on the event i.e'message'.

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem())*100
    logger.log(`Current Memoru Usage is: ${memoryUsage.toFixed(2)}`);

},3000)

logger.log("Application started");
logger.log("Application event occured")