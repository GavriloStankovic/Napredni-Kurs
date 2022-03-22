let customers = [
    {
        ime: 'Ana',
        prezime: 'Mitrovic',
        godine: 27,
        ceh: {
            redbul: 0,
            viski: 0,
            vodka: 2,
            koktel: 15
        }
    }, 
    {
        ime: 'Jovan',
        prezime: 'Todorovic',
        godine: 18,
        ceh: {
            redbul: 10,
            viski: 2,
            vodka: 3,
            koktel: 8
        }
    }, 
    {
        ime: 'Marko',
        prezime: 'Marovic',
        godine: 17,
        ceh: {
            redbul: 15,
            viski: 0,
            vodka: 5,
            koktel: 0
        }
    }, 
];

let cenaRedbul = 250
let cenaViski = 10000
let cenaVodka = 7900
let cenaKoktel = 450



let punoletni = (customers) => {
    let punoletniRezultat = []
    for(let i = 0; i < customers.length; i++){
    if(customers[i].godine >= 18) {
        punoletniRezultat.push(customers[i])
    }    
    }
    return punoletniRezultat
}
console.log(punoletni(customers))



let naplata = (customers) => {
    let konacniRacuni = [];
    for (let i = 0; i < customers.length; i++) {
        let racunPoOsobi = (customers[i].ceh.redbul*cenaRedbul) + (customers[i].ceh.viski*cenaViski) + (customers[i].ceh.vodka*cenaVodka) + (customers[i].ceh.koktel*cenaKoktel);
        if(customers[i].godine >= 21 && racunPoOsobi > 10000){
            racunPoOsobi = racunPoOsobi - racunPoOsobi*20/100;
        }
        konacniRacuni.push({
            ime:customers[i].ime,
            total:racunPoOsobi
        });
    }

    return konacniRacuni;
}

console.log(naplata(customers))