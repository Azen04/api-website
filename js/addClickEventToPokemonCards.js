// adds event listeners to pokemon items

function addListenerToPokeItems(pokeContainer) {

    pokeContainer.addEventListener('click', function () {
        const parentElementId = this.parentElement.id
        const containerId = this.id
        const direction = parentElementId == 'main' ? 'toFavs' : 'toMain'

        updateCollections(containerId, direction)
    })
}

const updateCollections = (id, direction) => {
    const item = document.getElementById(id)
    const itemIcon = item.childNodes[1]

    console.log(itemIcon);


    if (direction === 'toFavs') {
        main.removeChild(item)
        favs.appendChild(item)

    } else {
        favs.removeChild(item)
        main.appendChild(item)
    }
}