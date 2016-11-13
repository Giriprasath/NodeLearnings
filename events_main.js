/**
 * Created by ggnanasekar on 9/1/2016.
 */

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {

    console.log("connected successfully");

    eventEmitter.emit('data_received')
    
}

var dataHandler = function () {

    console.log("Data received successfully");
}

eventEmitter.on("connection",connectHandler);
eventEmitter.on("data_received",dataHandler);
eventEmitter.emit('connection');

console.log('program completed successfully');