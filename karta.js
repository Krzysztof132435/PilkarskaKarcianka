class KartaPilkarza{ 
    constructor(nazwisko, pozycja, cena, strzaly, podania, odbior, parada){
        this.nazwisko = nazwisko;
        this.pozycja = pozycja;
        this.cena = cena;
        this.strzaly = strzaly;
        this.podania = podania;
        this.odbior = odbior;
        this.parada = parada; 
    }
}

const karta1 = new KartaPilkarza("Rolando", "napastnik", 11, 90, 82, 54, 20);
const karta2 = new KartaPilkarza("Pessi", "napastnik", 15, 89, 95, 40, 10);

const skladGracza = [karta1, karta2]


function porownajStrzaly(karta1, karta2) {
    if(karta1.strzaly > karta2.strzaly)
        return `Wygrywa ${karta1.nazwisko}!`;
    else if(karta1.strzaly < karta2.strzaly){
        return `Wygrywa ${karta2.nazwisko}!`;
    }
    else{
        return "Remis:(";
    }
}

const kategoria = "podania";

function porownajKarty(karta1, karta2, kategoria){
    if(karta1[kategoria] > karta2[kategoria])
        return `Wygrywa ${karta1.nazwisko}`;
    else if(karta1[kategoria] < karta2[kategoria])
        return `Wygrywa ${karta2.nazwisko}`;
    else
        return "Remis!";    
}

function obliczKosztSkladu(skladGracza){
    let suma = 0;
    for(let i = 0; i < skladGracza.length; i++){
        suma += skladGracza[i].cena;
    }
    return suma;
}

console.log(porownajStrzaly(karta1, karta2));
console.log(porownajKarty(karta1,karta2, kategoria));
console.log(obliczKosztSkladu(skladGracza));