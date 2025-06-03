// creates element using pokemon data

function createPokemonCards(pokemonArray) {

    pokemonArray.forEach(pokemon => {
        const container = document.createElement('div')

        container.id = pokemon.id
        container.className = 'item'
        container.classList.add(pokemon.types[0].type.name)

        addListenerToPokeItems(container)
        statAccumulator(pokemon)
        pokemonIds.push(pokemon.id)

        container.innerHTML = `
        <img class='image' src="${pokemon.sprites.front_default}">
        <div class="stats-container">
            <div class="dexNumber ">No. ${pokemon.id}</div>
            <div class="pokemonName">${pokemon.name}</div>
            <div class="pokemonType ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
        </div>
            
           `

        main.append(container)
    });

}