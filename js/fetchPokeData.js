
function fetchPokemonData() {
    const promises = []
    const registered = []

    while (promises.length < 7) {
        const id = Math.floor(Math.random() * 151)

        if (!registered.includes(id)) {
            registered.push(id)
        } else {
            continue
        }

        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
    }

    return promises
}

