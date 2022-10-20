const fs = require('fs');
const converter = require('xml2js');
const json2xml = require('json2xml');

const parser = new converter.Parser();
let inspect = require('eyes').inspector({maxLength: false});
const builder = new converter.Builder();

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

let filtriranUrnik = [];
urnikJSON.Urnik.Teden.filter((teden, i) => {
    if(teden.Ponedeljek[0].Zaposlen != null && teden.Torek[0].Zaposlen != null && teden.Sreda[0].Zaposlen != null && teden.Cetrtek[0].Zaposlen != null && teden.Petek[0].Zaposlen != null) {
        filtriranUrnik.push(teden);
    }
});

fs.writeFileSync('tedniPolni.json', JSON.stringify(filtriranUrnik), (err) => {
    if(err) {
        console.err(err);
    }
    console.log('Datoteka je bila uspesno ustvarjena.');
})

/*
let pretvorba = builder.buildObje;ct(JSON.parse(JSON.stringify(filtriranUrnik)));
*/

fs.readFile('tedniPolni.json', 'utf-8', (err, data) => {
    if(err) { console.err(err); }
    fs.writeFileSync('polniTedni.xml', json2xml(JSON.parse(data)));
});
