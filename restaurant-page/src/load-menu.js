import pizzaImg from './images/pizza.jpg'

export default function loadMenu() {
const menu = document.createElement("div")

const pizza = document.createElement("img")
pizza.src = pizzaImg
pizza.alt = "Pizza with all the fixings"
menu.appendChild(pizza)

const title = document.createElement("h1")
title.textContent = "Pete's Pizza Parlor"
menu.appendChild(title)

const desc = document.createElement("p")
desc.textContent = "Get your hot pizza! With all the fixings!"
menu.appendChild(desc)

return menu
}