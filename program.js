const fs = require('fs');
const converter = require('xml2js');

const parser = new converter.Parser();
let inspect = require('eyes').inspector({maxLength: false});

let podjetje = fs.readFileSync(__dirname + '/xmlfile1.xml', 'utf-8');

let podjetjeJSON = null;

parser.parseString(podjetje, (err ,result) => {
    podjetjeJSON = result;
});


let podjetjeNovo = JSON.parse(JSON.stringify(podjetjeJSON)).Podjetje;

let osebje = podjetjeNovo.Osebje;

let zaposleni = osebje[0].Zaposleni;

zaposleni[0].Zaposlen.filter((element) => {
    console.log(element.Ime + ' ' + element.Priimek);
});