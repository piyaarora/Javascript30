const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = (e) => {
    e.preventDefault();
    console.log(e);
    const text = (document.querySelector("[name='item']")).value;
    const itemDetails = {
        text,
        done: false
    }
    items.push(itemDetails)
    console.log(itemDetails)
    displayList(items, itemsList)
    localStorage.setItem("items", JSON.stringify(items))
    e.currentTarget.reset();
}

const displayList = (plates = [], platesList) => {
    const list = plates.map((plate, i) => {
        return `<li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>`;
    }).join('')
    platesList.innerHTML = list;
}

const handleToggle = (e) => {
    if (!e.target.matches('input')) return;
    console.log(e.target)
    const index = e.target.dataset.index;
    console.log(index)
    items[index].done = !items[index].done
    localStorage.setItem("items", JSON.stringify(items))
    displayList(items, itemsList)
}
addItems.addEventListener("submit", addItem)
itemsList.addEventListener('click', handleToggle)
displayList(items, itemsList)
