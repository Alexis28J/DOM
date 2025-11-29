console.log('Esercizi');

const nintendoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Action-Adventure", "Open World"],
        releaseYear: 2017,
        developer: "Monolith Soft, Nintendo EPD",
        isMultiplayer: false,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Super Mario Odyssey",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2017,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 97,
        priceUSD: 62.99,
        isExclusive: true
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
        genre: ["Life Simulation", "Social Simulation"],
        releaseYear: 2020,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 90,
        priceUSD: 40.99,
        isExclusive: true
    },
    {
        title: "Metroid Dread",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Platform"],
        releaseYear: 2021,
        developer: "MercurySteam, Nintendo EPD",
        isMultiplayer: false,
        rating: 88,
        priceUSD: 56.99,
        isExclusive: true
    },
    {
        title: "Splatoon 3",
        platform: ["Nintendo Switch"],
        genre: ["Shooter", "Action"],
        releaseYear: 2022,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 83,
        priceUSD: 50.99,
        isExclusive: true
    },
    {
        title: "Pokémon Scarlet and Violet",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Adventure"],
        releaseYear: 2022,
        developer: "Game Freak",
        isMultiplayer: true,
        rating: 72,
        priceUSD: 58.99,
        isExclusive: true
    },
    {
        title: "Super Smash Bros. Ultimate",
        platform: ["Nintendo Switch"],
        genre: ["Fighting", "Action"],
        releaseYear: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        isMultiplayer: true,
        rating: 93,
        priceUSD: 49.99,
        isExclusive: true
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: ["Nintendo Switch"],
        genre: ["Racing", "Party"],
        releaseYear: 2017,
        developer: "Nintendo EAD",
        isMultiplayer: true,
        rating: 92,
        priceUSD: 69.99,
        isExclusive: true
    },
    {
        title: "Fire Emblem: Three Houses",
        platform: ["Nintendo Switch"],
        genre: ["Tactical RPG", "Strategy"],
        releaseYear: 2019,
        developer: "Intelligent Systems, Koei Tecmo",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 39.99,
        isExclusive: true
    },
    {
        title: "Luigi’s Mansion 3",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Puzzle"],
        releaseYear: 2019,
        developer: "Next Level Games",
        isMultiplayer: true,
        rating: 86,
        priceUSD: 69.99,
        isExclusive: true
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2018,
        developer: "Retro Studios",
        isMultiplayer: true,
        rating: 87,
        priceUSD: 70.99,
        isExclusive: true
    },
    {
        title: "Xenoblade Chronicles 3",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Action"],
        releaseYear: 2022,
        developer: "Monolith Soft",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 62.99,
        isExclusive: true
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2022,
        developer: "HAL Laboratory",
        isMultiplayer: true,
        rating: 85,
        priceUSD: 58.99,
        isExclusive: true
    },
    {
        title: "Bayonetta 3",
        platform: ["Nintendo Switch"],
        genre: ["Action", "Hack and Slash"],
        releaseYear: 2022,
        developer: "PlatinumGames",
        isMultiplayer: false,
        rating: 87,
        priceUSD: 53.99,
        isExclusive: true
    }
]



function renderGameList(games) {  // funzione per renderizzare la lista dei giochi

    const gameContainer = document.getElementById('game-container');
    gameContainer.innerText = '';  //'' per svuotare il container prima di riempirlo di nuovo

    for (const game of nintendoGames) {

        const gameCard = document.createElement('div')
        gameCard.classList.add('game-card');
        gameCard.classList.add('nintendo-background');
        gameContainer.appendChild(gameCard);

        // title
        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode('TITLE: ' + game.title));
        gameCard.appendChild(titleSpan);

        //platform
        const platformSpan = document.createElement('span');
        platformSpan.appendChild(document.createTextNode('PLATFORM: ' + game.platform));
        gameCard.appendChild(platformSpan);

        //genre
        const genreSpan = document.createElement('span');
        genreSpan.appendChild(document.createTextNode('GENRE: ' + game.genre));
        gameCard.appendChild(genreSpan)

        //releaseYear
        const releaseYearSpan = document.createElement('span');
        releaseYearSpan.appendChild(document.createTextNode('RELEASE YEAR: ' + game.releaseYear));
        gameCard.appendChild(releaseYearSpan);

        //isMultiplayer
        const isMultiplayerSpan = document.createElement('span');
        isMultiplayerSpan.appendChild(document.createTextNode('IS MULTIPLAYER?: ' + game.isMultiplayer));
        gameCard.appendChild(isMultiplayerSpan);

        //rating
        const ratingSpan = document.createElement('span');
        ratingSpan.appendChild(document.createTextNode('RATING: ' + game.rating));
        gameCard.appendChild(ratingSpan);

        //priceUSD
        const priceSpan = document.createElement('span');
        priceSpan.appendChild(document.createTextNode('PRICE IN USD: $' + game.priceUSD));
        gameCard.appendChild(priceSpan);

        //isExclusive
        const isExclusiveSpan = document.createElement('span');
        isExclusiveSpan.appendChild(document.createTextNode('IS EXCLUSIVE?: ' + game.isExclusive));
    

    }

};

renderGameList(nintendoGames);


const orderTitleBtn = document.getElementById('title-order');  //mi prendo il bottone

function compareTitles(g1, g2){
    return g1.title.localeCompare(g2.title);
}


function orderGamesByTitle() {
    
     nintendoGames.sort(compareTitles);
     
     renderGameList(nintendoGames);

};

orderTitleBtn.addEventListener('click', orderGamesByTitle);


//TASK:
//COMPLETARE LE SCHEDE DEI GIOCHI RENDENDOLE MOLTO BELLE! (CON TUTTE LE PROPRIETà)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AGGIUNGERE L'ORDINAMENTO PER PREZZO (DAL PIù ECONOMICO AL PIù CARO)

const ascendentPriceOrder = document.getElementById('price-order'); 

function comparePrices(g1, g2){
    return g1.priceUSD - g2.priceUSD;
}

function orderGamesByPrice() {
    
     nintendoGames.sort(comparePrices);
     
     renderGameList(nintendoGames);

};

ascendentPriceOrder.addEventListener('click', orderGamesByPrice);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//AGGIUNGERE L'ORDINAMENTO PER RATING (DAL RATING MIGLIORE AL PEGGIORE)

const descendentRatingOrder = document.getElementById('rating-order');

function compareRatings(g1, g2){
    return g2.rating - g1.rating;
}

function orderGamesByRating(){

    nintendoGames.sort(compareRatings);
    renderGameList(nintendoGames);
}

descendentRatingOrder.addEventListener('click', orderGamesByRating);