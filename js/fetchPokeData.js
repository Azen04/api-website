
function fetchPokemonData() {
    const promises = []

    while (promises.length < 6) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`))
    }

    console.log(promises);

    return promises
}

