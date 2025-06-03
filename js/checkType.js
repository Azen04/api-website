// checks pokemon type

function statAccumulator(object) {
    const trackerValues = document.getElementsByClassName('stat')

    for (let index = 0; index < object.stats.length; index++) {
        const stat = object.stats[index];

        trackerValues[index].innerText = stat.base_stat + (trackerValues[index].innerText * 1)
    }
}