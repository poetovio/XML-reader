const fs = require('fs');
const converter = require('xml2js');

const parser = new converter.Parser();
let inspect = require('eyes').inspector({maxLength: false});

let podjetje = fs.readFileSync(__dirname + '/xmlfile1.xml', 'utf-8');

parser.parseString(podjetje, (err ,result) => {
    inspect(result);
});