// fetches information


// creates html using inforamtion


// inserts into dom
// get insertable

const getData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/berry/1/')
    const data = await response.json()

    console.log(data);
}

getData()


