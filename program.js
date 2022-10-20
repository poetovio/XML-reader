const fs = require('fs');
const converter = require('xml2js');

const parser = new converter.Parser();
let inspect = require('eyes').inspector({maxLength: false});

let podjetje = fs.readFileSync(__dirname + '/xmlfile1.xml', 'utf-8');
let urnik = fs.readFileSync(__dirname + '/xmlfile2.xml', 'utf-8');

let urnikJSON = null;
let podjetjeJSON = null;

parser.parseString(urnik, (err ,result) => {
    urnikJSON = result;
});

parser.parseString(podjetje, (err ,result) => {
    podjetjeJSON = result;
});

let urnik2021 = urnikJSON.Urnik.Leto[0];
let urnik2022 = urnikJSON.Urnik.Leto[1];



console.log(urnik2022);

/*
let podjetjeNovo = JSON.parse(JSON.stringify(podjetjeJSON)).Podjetje;

let osebje = podjetjeNovo.Osebje;

let zaposleni = osebje[0].Zaposleni;

zaposleni[0].Zaposlen.filter((element) => {
    console.log(element.Ime + ' ' + element.Priimek);
});
*/