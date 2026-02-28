function settleLife(name, isBCS, marriage, patri){
    if(isBCS){
        marriage(patri);
    }
}

function boloKobol(patri){
    console.log('Kobul', patri);
}

settleLife('Jamshed', true, boloKobol, 'Mumir');

// boloKobol('Mumir');