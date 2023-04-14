
let chemicalSymbols = {
    sodium: 'Na',
    hydrogen: 'H',
    helium: 'He',
    o: 'O'
}

function getSymbolBy(chemicalName) {
    if (!chemicalSymbols[chemicalName]) {
        return new Error('Symbol not found');
    }

    return chemicalSymbols[chemicalName];
}