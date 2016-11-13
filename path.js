/**
 * Created by ggnanasekar on 9/8/2016.c
 *
 * /
 *
 */

var path = require('path');
console.log(path.basename('C:\\temp\\myfile.html'));

console.log(process.env.path);

var paths = process.env.path.split(path.delimiter);

console.log(paths);

console.log(path.dirname('C:\\temp\\myfile.html'));

console.log(
    path.format(
        {
            dir : '/home/user/dir',
            root : '/usr',
            base : 'demo.txt',
            name : 'demo2',
            ext : '.pdf'
        }
    )
);