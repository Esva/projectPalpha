//console.log("Hello Trainer!") // Test if pokedex-app.js is linked and working as intended


// PokéAPI Fetch
const fetchPokemon = () => {
    for(let i =1; i <= 150; i++ ) {
                
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`; //setting API url as a const and testing with single pokemon
    fetch(url) // Calling API url
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log(data); //test to see if API is returning result as an array
            
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', '),
            };
           
            console.log(pokemon); 
        })
    console.log("gathering wild Pokémon") //function is working test
}

fetchPokemon();