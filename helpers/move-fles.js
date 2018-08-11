const fs = require('fs');

function copyFileAndMove(source, target) {

    const ReadStream = fs.createReadStream(source);
    const WriteStream = fs.createWriteStream(target);
    
    ReadStream.pipe(WriteStream);
    
    ReadStream.on('error', err => console.log('ReadStream', err));

    WriteStream.on('error', err => console.log('WriteStream', err));

    WriteStream.on('close', ext => console.log('DONE'));

};

let from = `${__dirname}/_vue-material/index.d.ts`;
let to = `${__dirname}/../node_modules/vue-material/index.d.ts`;

copyFileAndMove(from, to);
