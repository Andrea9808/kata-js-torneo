const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
  ];
  
  const weapons = [
    { 
        name: "Ventaglio della Musa", 
        power: 15 
    },
    { 
        name: "Scouter", 
        power: 30 
    },
    { 
        name: "Bastone Roshi", 
        power: 60 
    },
    { 
        name: "Fagioli Magici", 
        power: 70 
    },
    { 
        name: "Katana di Yajirobei", 
        power: 85 
    },
    { 
        name: "Spada del Dragone Azzurro", 
        power: 115 
    },
    { 
        name: "Armatura Saiyan", 
        power: 145 
    },
    { 
        name: "Cannone da braccio", 
        power: 170 
    },
    { 
        name: "Nuvola d'oro", 
        power: 200 
    },
    { 
        name: "Bastone Nyoi", 
        power: 220
    },
    { 
        name: "Spada Z", 
        power: 235 
    },
    { 
        name: "Orecchini Potara", 
        power: 250 
    }
  ];

//**Milestone 1 - Scelta dell’arma:**

//ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.
console.log("I COMBATTENTI SCELGONO LA LORO ARMA!");
function weaponsToFighters(fighters, weapons) {
    
    // copia l'array di armi per evitare di mutare l'originale
    const availableWeapons = [...weapons]; 

    // assegna un'arma casuale a ciascun combattente tramite il foreach
    fighters.forEach(fighter => {

        // se ci sono armi disponibili, assegna un'arma casuale al combattente
        if (availableWeapons.length) {

            // genera un indice casuale per selezionare un'arma casuale
            const randomIndex = Math.floor(Math.random() * availableWeapons.length);

            // rimuove l'arma selezionata dall'array di armi disponibili e la assegna al combattente
            const weapon = availableWeapons.splice(randomIndex, 1)[0];

            // assegna l'arma al combattente
            fighter.weapon = `${weapon.name} (${weapon.power})`;
        }
    });

    // restituisce l'array di combattenti con le armi assegnate
    return fighters;
}


// assegna un'arma casuale a ciascun combattente
const fightersWithWeapons = weaponsToFighters(fighters, weapons);
console.table(fightersWithWeapons);


//**Milestone 2 - Allenamento:**

//ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.
console.log("I COMBATTENTI SI ALLENANO!");
function training(fighters) {
    
    // assegna un'arma casuale a ciascun combattente
    const trainedFighters = fighters.map(fighter => {

        // genera un numero casuale tra 1 e 100
        const training = Math.floor(Math.random() * 100) + 1;

        // moltiplica la potenza del combattente per il numero casuale generato
        fighter.power *= training;

        // restituisce il combattente allenato
        return fighter;
    });

    // restituisce l'array di combattenti allenati
    return trainedFighters;
}

const fightersTrained = training(fightersWithWeapons);
console.table(fightersTrained);


//**Milestone 3 - Qualificazione:**

//escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

console.log("I COMBATTENTI SI QUALIFICANO!");
function qualification(fighters) {
    
    // restituisce solo i combattenti che hanno una potenza di almeno 2000
    return fighters.filter(fighter => fighter.power >= 2000);
}

const fightersQualified = qualification(fightersTrained);
console.table(fightersQualified);

//**Milestone 4 - Combattimento:**

//i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, 
//assicurandosi che ognuno combatta una sola volta. 
//In ogni scontro vincerà il combattente con la potenza più alta. 
//In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.
//**NB:** bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, 
//altrimenti l'ultimo non avrebbe un avversario. 
//Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.

console.log("I COMBATTIMENTI INIZIANO!");
function fight(fighters) {
    
    // se il numero di combattenti è dispari, aggiunge un combattente "Robot" all'ultimo minuto
    if (fighters.length % 2 !== 0) {
        fighters.push({
            name: 'Robot',
            power: 4000
        });
    }

    // combattimenti
    const fights = [];
    for (let i = 0; i < fighters.length; i += 2) {
        const fighter1 = fighters[i];
        const fighter2 = fighters[i + 1];

        // determina il vincitore del combattimento
        const winner = fighter1.power > fighter2.power ? fighter1 : fighter2;

        // aggiunge il combattimento all'array
        fights.push({
            fighter1: `${fighter1.name} (${fighter1.power})`,
            fighter2: `${fighter2.name} (${fighter2.power})`,
            winner: winner.name
        });
    }

    // restituisce l'array di combattimenti
    return fights;
}

console.table(fight(fightersQualified));