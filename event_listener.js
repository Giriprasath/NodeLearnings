/**
 * Created by ggnanasekar on 9/1/2016.
 */
var events = require("events");

var eventEmitter = new events.EventEmitter();




var listener1 = function listener1() {

    console.log("First event");

}

var listener2 = function listener2() {

    console.log("Second event");

}
var count = require("events").EventEmitter.listenerCount(eventEmitter,'first');
console.log(count);


eventEmitter.addListener('first',listener1);
eventEmitter.addListener('first',listener2);

var count = require("events").EventEmitter.listenerCount(eventEmitter,'first');
console.log(count);

eventEmitter.emit('first');

eventEmitter.removeListener('first',listener2);
eventEmitter.emit('first');

eventEmitter.removeAllListeners('first');
eventEmitter.emit('first');