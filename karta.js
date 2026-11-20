const readline = require('readline/promises');

const konsola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//obiekt karty piłkarza
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

//tablica obiektów z formacjami
const formacje = [
    {"nazwa" : "4-4-2", "bramkarz" : 1, "obronca" : 4, "pomocnik" : 4, "napastnik": 2},
    {"nazwa" : "4-3-3","bramkarz" : 1, "obronca" : 4, "pomocnik" : 3, "napastnik": 3},
    {"nazwa" : "4-5-1","bramkarz" : 1, "obronca" : 4, "pomocnik" : 5, "napastnik": 1},
    {"nazwa" : "3-4-3","bramkarz" : 1, "obronca" : 3, "pomocnik" : 4, "napastnik": 3},
    {"nazwa" : "5-3-2","bramkarz" : 1, "obronca" : 5, "pomocnik" : 3, "napastnik": 2},
];

// ===== NAPASTNICY (15) =====
const karta1 = new KartaPilkarza("Rolando", "napastnik", 11, 90, 82, 54, 20);
const karta2 = new KartaPilkarza("Pessi", "napastnik", 15, 89, 95, 40, 10);
const karta3 = new KartaPilkarza("Lewangoalski", "napastnik", 10, 88, 75, 32, 25);
const karta4 = new KartaPilkarza("Mbipi", "napastnik", 12, 91, 77, 34, 12);
const karta5 = new KartaPilkarza("Haalend", "napastnik", 13, 92, 65, 30, 15);
const karta6 = new KartaPilkarza("Winicjusz", "napastnik", 12.5, 87, 80, 36, 13);
const karta7 = new KartaPilkarza("Kein", "napastnik", 12, 90, 83, 42, 16);
const karta8 = new KartaPilkarza("Salach", "napastnik", 12, 88, 84, 38, 12);
const karta9 = new KartaPilkarza("Lautaro Martines", "napastnik", 9.5, 86, 74, 40, 18);
const karta10 = new KartaPilkarza("Osimen", "napastnik", 10.5, 87, 66, 35, 14);
const karta11 = new KartaPilkarza("Dembelle", "napastnik", 8.5, 82, 81, 37, 11);
const karta12 = new KartaPilkarza("Rafinja", "napastnik", 8, 80, 82, 39, 15);
const karta13 = new KartaPilkarza("Lukaco", "napastnik", 7, 84, 70, 41, 19);
const karta14 = new KartaPilkarza("Wlahowicz", "napastnik", 7.5, 83, 67, 33, 14);
const karta15 = new KartaPilkarza("Isakk", "napastnik", 9, 85, 72, 36, 12);

// ===== POMOCNICY (25) =====
const karta16 = new KartaPilkarza("Miller", "pomocnik", 6.5, 80, 86, 52, 19);
const karta17 = new KartaPilkarza("Kewin de Bruin", "pomocnik", 11.5, 82, 94, 58, 22);
const karta18 = new KartaPilkarza("Modrik", "pomocnik", 7, 74, 90, 62, 28);
const karta19 = new KartaPilkarza("Rodrigo", "pomocnik", 9, 68, 84, 85, 35);
const karta20 = new KartaPilkarza("Bellingam", "pomocnik", 13, 83, 86, 72, 24);
const karta21 = new KartaPilkarza("Kimmik", "pomocnik", 10, 70, 91, 80, 30);
const karta22 = new KartaPilkarza("Pedry", "pomocnik", 9.5, 72, 92, 68, 21);
const karta23 = new KartaPilkarza("Gavvi", "pomocnik", 7.5, 66, 85, 70, 23);
const karta24 = new KartaPilkarza("Valverdi", "pomocnik", 9, 78, 84, 79, 26);
const karta25 = new KartaPilkarza("Odegard", "pomocnik", 10, 79, 90, 55, 20);
const karta26 = new KartaPilkarza("Bernardo Silwa", "pomocnik", 9.5, 76, 91, 65, 22);
const karta27 = new KartaPilkarza("Bruno Fernandez", "pomocnik", 9, 84, 89, 56, 18);
const karta28 = new KartaPilkarza("Rajs", "pomocnik", 9.5, 71, 86, 83, 29);
const karta29 = new KartaPilkarza("Krous", "pomocnik", 7, 69, 93, 60, 25);
const karta30 = new KartaPilkarza("Barela", "pomocnik", 8, 73, 87, 77, 27);
const karta31 = new KartaPilkarza("Czuameni", "pomocnik", 8.5, 64, 82, 84, 31);
const karta32 = new KartaPilkarza("Kamawinga", "pomocnik", 7.5, 60, 80, 82, 30);
const karta33 = new KartaPilkarza("Musjala", "pomocnik", 11, 81, 87, 52, 17);
const karta34 = new KartaPilkarza("Wirc", "pomocnik", 10.5, 80, 88, 50, 18);
const karta35 = new KartaPilkarza("Fodden", "pomocnik", 11, 85, 86, 48, 16);
const karta36 = new KartaPilkarza("Grizman", "pomocnik", 7, 84, 88, 64, 23);
const karta37 = new KartaPilkarza("Kasemiro", "pomocnik", 5.5, 62, 78, 86, 32);
const karta38 = new KartaPilkarza("Mak Alister", "pomocnik", 8, 70, 85, 78, 28);
const karta39 = new KartaPilkarza("Czalhanoglu", "pomocnik", 7, 81, 87, 66, 24);
const karta40 = new KartaPilkarza("Szoboslaj", "pomocnik", 8, 82, 85, 63, 22);

// ===== OBRONCY (20) =====
const karta41 = new KartaPilkarza("von Dijk", "obronca", 8, 45, 69, 89, 66);
const karta42 = new KartaPilkarza("Ramos Sergio", "obronca", 7.5, 55, 72, 88, 60);
const karta43 = new KartaPilkarza("Alabama", "obronca", 6, 50, 78, 84, 58);
const karta44 = new KartaPilkarza("Walkerr", "obronca", 6.5, 42, 70, 86, 64);
const karta45 = new KartaPilkarza("Rudigier", "obronca", 6.5, 44, 71, 87, 62);
const karta46 = new KartaPilkarza("Militaro", "obronca", 7, 40, 66, 88, 63);
const karta47 = new KartaPilkarza("Markinjos", "obronca", 6.5, 48, 76, 87, 60);
const karta48 = new KartaPilkarza("Hakimy", "obronca", 8, 58, 80, 82, 55);
const karta49 = new KartaPilkarza("Alexander-Arnoldd", "obronca", 8.5, 60, 90, 78, 50);
const karta50 = new KartaPilkarza("Gwardiol", "obronca", 8, 52, 77, 85, 59);
const karta51 = new KartaPilkarza("Diaz Ruben", "obronca", 8.5, 38, 72, 90, 65);
const karta52 = new KartaPilkarza("Salibba", "obronca", 8, 41, 74, 88, 61);
const karta53 = new KartaPilkarza("Bastonni", "obronca", 7, 46, 79, 85, 57);
const karta54 = new KartaPilkarza("Teo Hernandes", "obronca", 8, 64, 76, 81, 52);
const karta55 = new KartaPilkarza("Kundee", "obronca", 7.5, 43, 75, 86, 58);
const karta56 = new KartaPilkarza("Kancelo", "obronca", 7, 62, 85, 79, 48);
const karta57 = new KartaPilkarza("Upamekano", "obronca", 5.5, 35, 68, 84, 62);
const karta58 = new KartaPilkarza("Bremmer", "obronca", 6, 39, 64, 87, 66);
const karta59 = new KartaPilkarza("Dewis", "obronca", 6.5, 50, 77, 80, 54);
const karta60 = new KartaPilkarza("Arauho", "obronca", 6.5, 37, 67, 86, 64);

// ===== BRAMKARZE (5) =====
const karta61 = new KartaPilkarza("Kurta", "bramkarz", 8.5, 35, 66, 63, 92);
const karta62 = new KartaPilkarza("Alison Beker", "bramkarz", 9, 30, 68, 58, 90);
const karta63 = new KartaPilkarza("Oblakk", "bramkarz", 8, 28, 63, 60, 91);
const karta64 = new KartaPilkarza("Noier", "bramkarz", 7, 32, 80, 56, 89);
const karta65 = new KartaPilkarza("Menjan", "bramkarz", 8, 29, 70, 57, 90);

const napastnicy = [
    karta1, karta2, karta3, karta4, karta5,
    karta6, karta7, karta8, karta9, karta10,
    karta11, karta12, karta13, karta14, karta15
];

const pomocnicy = [
    karta16, karta17, karta18, karta19, karta20,
    karta21, karta22, karta23, karta24, karta25,
    karta26, karta27, karta28, karta29, karta30,
    karta31, karta32, karta33, karta34, karta35,
    karta36, karta37, karta38, karta39, karta40
];

const obroncy = [
    karta41, karta42, karta43, karta44, karta45,
    karta46, karta47, karta48, karta49, karta50,
    karta51, karta52, karta53, karta54, karta55,
    karta56, karta57, karta58, karta59, karta60
];

const bramkarze = [
    karta61, karta62, karta63, karta64, karta65
];


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

function obliczKosztSkladu(bazaKart){
    let suma = 0;
    for(let i = 0; i < bazaKart.length; i++){
        suma += bazaKart[i].cena;
    }
    return suma;
}

function losujPilkarza(bazaKart){
    let losowyPilkarz = Math.floor(Math.random() * bazaKart.length);  
    
    return bazaKart[losowyPilkarz];
}

function losujFormacje(formacje){
    let losowaFormacja = Math.floor(Math.random() * formacje.length);

    return formacje[losowaFormacja]; 
}

function otworzZestawKart(bazaKart){
    const zestawKart = [];
    while(zestawKart.length < 5){
        let wylosowanyPilkarz = losujPilkarza(bazaKart);
        if(!zestawKart.includes(wylosowanyPilkarz)){
            zestawKart.push(wylosowanyPilkarz);
        }
    }
    return zestawKart;
}

function otworzZestawFormacji(formacje){
    const zestawFormacji = [];
    while(zestawFormacji.length < 3){
        let wylosowanaFormacja = losujFormacje(formacje);
        if(!zestawFormacji.includes(wylosowanaFormacja)){
            zestawFormacji.push(wylosowanaFormacja);
        }
    }
    return zestawFormacji;
}

const mojSkladDraftu = [];
const MAX_BUDZET = 65;

function dodajDoSkladu(nowaKarta, sklad, budzet){
    let obecnyKoszt = obliczKosztSkladu(sklad);
    if((obecnyKoszt + nowaKarta.cena) > budzet){
        console.log("Odrzucono! Za drogi zawodnik.");
        return false;
    }
    else {
        sklad.push(nowaKarta);
        console.log("Dodano zawodnika: " + nowaKarta.nazwisko);
        return true;
    }
}

// console.log(porownajStrzaly(karta1, karta2));
// console.log(porownajKarty(karta1,karta2, kategoria));
// console.log(obliczKosztSkladu(bazaKart));
// console.log(losujPilkarza(bazaKart));
// console.log(otworzZestawKart(bazaKart));

// const zestaw1 = otworzZestawKart(bazaKart);
// console.log("W zestawie sa: ", zestaw1[0].nazwisko, zestaw1[1].nazwisko, zestaw1[2].nazwisko);
// const wybranaKarta = zestaw1[0];
// dodajDoSkladu(wybranaKarta, mojSkladDraftu, MAX_BUDZET);
// console.log("Moj obecny sklad: ", mojSkladDraftu);

async function draftPozycji(pulaZawodnikow, nazwaPozycji) {
    let dostepniPilkarze = pulaZawodnikow.filter(pilkarz => !mojSkladDraftu.includes(pilkarz));
    let zestawKart = otworzZestawKart(dostepniPilkarze);
    console.log("Wybierasz zawodnika na pozycję: ", nazwaPozycji);
    console.log(`1. ${zestawKart[0].nazwisko} (Cena: ${zestawKart[0].cena})`);
    console.log(`2. ${zestawKart[1].nazwisko} (Cena: ${zestawKart[1].cena})`);
    console.log(`3. ${zestawKart[2].nazwisko} (Cena: ${zestawKart[2].cena})`);
    console.log(`4. ${zestawKart[3].nazwisko} (Cena: ${zestawKart[3].cena})`);
    console.log(`5. ${zestawKart[4].nazwisko} (Cena: ${zestawKart[4].cena})`);
    // await zatrzymuje kod i czeka na Twój wpis!
    const odpowiedz2 = await konsola.question("Wybierz numer karty (1-5): ");
    const indeksPilkarza = parseInt(odpowiedz2) - 1;
    const wybranyPilkarz = zestawKart[indeksPilkarza];
    console.log(`Zanotowałem. Twój wybór to:` , wybranyPilkarz.nazwisko);
    dodajDoSkladu(wybranyPilkarz, mojSkladDraftu, MAX_BUDZET);
    
}

async function UruchomDraft(){
    let zestawFormacji = otworzZestawFormacji(formacje);
    console.log(`1. ${zestawFormacji[0].nazwa}`);
    console.log(`2. ${zestawFormacji[1].nazwa}`);
    console.log(`3. ${zestawFormacji[2].nazwa}`);
    const odpowiedz1 = await konsola.question("Witaj w Drafcie! Wybierz formację (1-3):");
    const indeksFormacji = parseInt(odpowiedz1) - 1;
    const wybranaFormacja = zestawFormacji[indeksFormacji];
    console.log(`Zanotowałem. Twój wybór to:` , wybranaFormacja.nazwa);
    for(let i = 0; i < wybranaFormacja.bramkarz; i++){
        await draftPozycji(bramkarze, "Bramkarz");
    }
    for(let i = 0; i < wybranaFormacja.obronca; i++){
        await draftPozycji(obroncy, "Obrońcy");
    }
    for(let i = 0; i < wybranaFormacja.pomocnik; i++){
        await draftPozycji(pomocnicy, "Pomocnicy");
    }
    for(let i = 0; i < wybranaFormacja.napastnik; i++){
        await draftPozycji(napastnicy, "Napastnicy");
    }
    console.log("Twój skład po wyborze: ", mojSkladDraftu);
    let kosztSkladu = obliczKosztSkladu(mojSkladDraftu);
    console.log("Koszt twojego składu: ", kosztSkladu);
    konsola.close();
}

UruchomDraft();