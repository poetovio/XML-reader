const fs = require('fs');
const converter = require('xml2js');

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

console.log(filtriranUrnik);

/*
let pretvorba = builder.buildObject(filtriranUrnik);

console.log(pretvorba);
*/