import "./styles.css"
import loadHome from "./load-home.js"
import loadMenu from "./load-menu.js"
import loadAbout from "./load-about.js"

const tabContent = document.querySelector("#content")

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", () => {
    tabContent.replaceChildren()
    const homeContent = loadHome()
    
    tabContent.appendChild(homeContent)
})

menuButton.addEventListener("click", () => {
    tabContent.replaceChildren()
    const menuContent = loadMenu()
    
    tabContent.appendChild(menuContent)
})

aboutButton.addEventListener("click", () => {
    tabContent.replaceChildren()
    const aboutContent = loadAbout()
    
    tabContent.appendChild(aboutContent)
})

const homeContent = loadHome()
    
tabContent.appendChild(homeContent)