export default function loadAbout() {
const about = document.createElement("div")

const title = document.createElement("h1")
title.textContent = "About?"
about.appendChild(title)

const message = document.createElement("p")
message.textContent = "Why, we're about pizza! What else!"
about.appendChild(message)

return about
}