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
function weaponsToFighters(fighters, weapons) {
    
    // copia l'array di armi per evitare di mutare l'originale
    const availableWeapons = [...weapons]; 

    // assegna un'arma casuale a ciascun combattente tramite il foreach
    fighters.forEach(fighter => {

        // se ci sono armi disponibili, assegna un'arma casuale al combattente
        if (availableWeapons.length > 0) {

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
