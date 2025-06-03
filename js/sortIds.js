const sortGreatesToLeast = () => {
    let fullIterationIndex = 0

    const sortedIds = pokemonIds.map(firstValue => {
        let greaterNumber = firstValue

        for (let index = (0 + fullIterationIndex); index < pokemonIds.length; index++) {
            const secondValue = pokemonIds[index];

            greaterNumber = firstValue < secondValue && secondValue > greaterNumber ? secondValue : greaterNumber

        }

        pokemonIds.splice(pokemonIds.indexOf(greaterNumber), 1, firstValue)
        pokemonIds.splice(pokemonIds.indexOf(firstValue), 1, greaterNumber)

        fullIterationIndex++
        return greaterNumber
    });

    return sortedIds
}

const sortLeastToGreatest = () => {
    let fullIterationIndex = 0

    const sortedIds = pokemonIds.map(firstValue => {
        let lowerNumber = firstValue

        for (let index = (0 + fullIterationIndex); index < pokemonIds.length; index++) {
            const secondValue = pokemonIds[index];

            lowerNumber = firstValue > secondValue && secondValue < lowerNumber ? secondValue : lowerNumber

        }

        pokemonIds.splice(pokemonIds.indexOf(lowerNumber), 1, firstValue)
        pokemonIds.splice(pokemonIds.indexOf(firstValue), 1, lowerNumber)

        fullIterationIndex++
        return lowerNumber
    });

    return sortedIds
}