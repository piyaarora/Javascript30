let card = document.querySelector('.cards-wrapper');
let searchbar = document.querySelector('.search');
let sortoptions = document.querySelector("#sorting");
let filterData = document.querySelector('#filters');
let buttonText = "Add to Favourites"
let allResults = []

const getData = () => fetch("./api/mockData.json")
    .then(data => console.log(data));


let cardLayout = (item) => {
    let a = JSON.parse(localStorage.getItem('fav'));
    let favIconClass = ''
    if (a !== null) {
        favIconClass = (!a.find(hotel => hotel.id == item.id)) ? "fa-heart" : "fa-heart-red";
    } else {
        favIconClass = "fa-heart"
    }

    return `<div class="res-card">
        <div class="res-card__image"><img src=${item.img} alt="" srcset=""></div>
        <div class="res-card__name"><h2>${item.name}</h2></div>
        <div class="res-card__location"><h4>Location: ${item.location}</h4></div>
        <div class="res-card__ratings"><span class="fa fa-star icon" ></span>${item.rating}</div>
        <div class="res-card__eta"><b>Estimated time of arrival: </b>${item.eta} min</div>
        <div class="res-card__tags"><em>${item.tags.join(', ')}</em></div>
        <a onclick="markFavourite(this, ${item.id})" id="${favIconClass}" class="fav"><i class="fa fa-heart"></i><a>
        </div>`

}

let generateView = data => data.map(restaurant => cardLayout(restaurant));

let allRestaurants = () => {
    getData()
        .then(data => {
            allResults = data;
            card.innerHTML = generateView(data).join('');
            console.log(data);
        })
}

allRestaurants();

const search = () => {
    console.log("calling");
    let searchRes = allResults.filter(hotel => hotel.name.toString().toLowerCase().indexOf(searchbar.value.toLowerCase()) > -1)
    card.innerHTML = generateView(searchRes).join('')
}

const sorting = () => {
    if (sortoptions.value === 'eta') {
        console.log(sortoptions.value)
        let sortbyETA = allResults.sort((val1, val2) => val1.eta - val2.eta)
        card.innerHTML = generateView(sortbyETA).join('')
    } else if (sortoptions.value === 'ratings') {
        console.log(sortoptions.value)
        let sortbyratings = allResults.sort((val1, val2) => val1.rating - val2.rating)
        card.innerHTML = generateView(sortbyratings).join('')
    }

}


filterData.addEventListener('click', e => {
    let filterItems = allResults.filter(hotel => hotel.tags.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    card.innerHTML = generateView(filterItems).join('')
})


markFavourite = (val, id) => {
    if (!localStorage.getItem("fav")) {
        let a = [];
        localStorage.setItem('fav', JSON.stringify(a));
    }
    let a = [];
    a = JSON.parse(localStorage.getItem('fav'));
    let markedHotel = allResults.filter(hotel => hotel.id == id);
    if (!a.find(hotel => hotel.id == id)) {
        a.push(...markedHotel);
        val.setAttribute("style", "color: #da3737!important;");
    } else {
        let indexOfExistingHotel = a.indexOf(a.find(hotel => hotel.id == id));
        a.splice(indexOfExistingHotel, 1);
        val.setAttribute("style", "color:  #c8cbd3!important;");
    }
    localStorage.setItem('fav', JSON.stringify(a));
}

// see all favourite resetro
const seeAllFavouriteRestro = () => {
    let allFavourite = JSON.parse(localStorage.getItem("fav"));
    card.innerHTML = generateView(allFavourite).join('');
}

