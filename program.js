const fs = require('fs');
const converter = require('xml2js');

const parser = new converter.Parser();
let inspect = require('eyes').inspector({maxLength: false});

fs.readFile(__dirname + '/xmlfile1.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        inspect(result);
        console.log('done');
        console.log(JSON.stringify(result));
    });
});

