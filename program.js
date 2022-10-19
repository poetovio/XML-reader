const fs = require('fs');
const converter = require('xml2js');

const parser = new converter.Parser();

fs.readFile(__dirname + '/xmlfile1.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        console.dir(result);
        console.log('done');
    });
});