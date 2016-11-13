/**
 * Created by ggnanasekar on 9/1/2016.
 */
var buff = new Buffer(10);
var length = buff.write('Ganiska Giriprasath',0);

console.log(length);
console.log(buff.toString(undefined,0,7));
console.log(buff.toJSON());


var father = new Buffer('Giri ');
var mother = new Buffer('Anitha');
var family = Buffer.concat([father,mother]);

console.log(family.toString());

