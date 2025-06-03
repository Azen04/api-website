const sortBtn = document.getElementsByClassName('sortBtn')

const main = document.getElementById('main')
const favs = document.getElementById('favs')

const pokemonIds = []

for (const btn of sortBtn) {
    btn.addEventListener('click', function () {
        const sortedArray = this.dataset.sortdir == 'asc' ? sortLeastToGreatest() : sortGreatesToLeast()

        for (const id of sortedArray) {
            const card = document.getElementById(`${id}`)
            const parent = card.parentElement
            card.remove()
            parent == main ? main.append(card) : favs.append(card)
        }
    })
}

Promise.all(fetchPokemonData())
    .then((responses) => {
        const pokemonData = []

        for (const response of responses) {
            pokemonData.push(response.json())
        }

        return Promise.all(pokemonData)
    })
    .then((data) => createPokemonCards(data))




