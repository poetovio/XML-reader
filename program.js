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

let index = 0;
let minVrednost = 100000;

console.log(urnik2022.Teden[0].Torek[0].Zaposlen.length)

/*
urnik2022.Teden.filter((teden, i) => {
    if(teden.Ponedeljek[0].Zaposlen.length < minVrednost) {
        index = i;
        minVrednost = teden.Ponedeljek[0].Zaposlen.length;
    }
});
*/

console.log('V ' + (1 + index) + '. tednu je bilo v ponedeljek najmanj v pisarni. Bilo jih je ' + minVrednost);

urnik2022.Teden.filter((teden, i) => {
    if(teden.Torek[0].Zaposlen == null) {
        console.log('Prazen teden!');
    } else {

        console.log(teden.Torek[0].Zaposlen.length);
    }
});

/*
urnik2022.Teden.filter((teden, i) => {
    if(teden.Torek[0].Zaposlen.length < minVrednost) {
        index = i;
        minVrednost = teden.Torek[0].Zaposlen.length;
    }
});
console.log('V ' + (1 + index) + '. tednu je bilo v torek najmanj v pisarni. Bilo jih je ' + minVrednost);

*/

/*
let podjetjeNovo = JSON.parse(JSON.stringify(podjetjeJSON)).Podjetje;

let osebje = podjetjeNovo.Osebje;

let zaposleni = osebje[0].Zaposleni;

zaposleni[0].Zaposlen.filter((element) => {
    console.log(element.Ime + ' ' + element.Priimek);
});
*/