const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
const fetchData = fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// console.log(fetchData); //returns a promise
// console.log(cities);

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex) // to match city or state
    })
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

const fetchResult = (e) => {
    const val = e.target.value
    const matchArr = findMatches(val, cities);
    const html = matchArr.map(item => {
        const regex = new RegExp(val, 'gi')
        const cityName = item.city.replace(regex, `<span class="hl">${val}</span>`);
        const stateName = item.state.replace(regex, `<span class="hl">${val}</span>`);

        return `<li>
        <span className="name">${cityName}, ${stateName} </span>
        <span className="population">${numberWithCommas(item.population)} </span>
        </li>`
    }).join('')
    suggestions.innerHTML = html
    console.log(matchArr);
}
console.log(findMatches('bos', cities))


search.addEventListener('input', fetchResult);


// const filterData = fetchData.filter()

// 1. fetch data using endpoints
// 2. push data to cities array
// 3. find matched function to return data that matched to input value
// 4. 
