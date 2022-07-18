// Ude Import export (MANDATORY)


import { navbar } from "../components/navbar.js";

let nav = document.getElementById("NAVBAR")

nav.innerHTML = navbar();



let arr = JSON.parse(localStorage.getItem("news")) || []



arr.forEach((el) => {

    let div = document.createElement("div")

    let img = document.createElement("img")

    // img.onclick = ("click", img) {

    //     arr.append(-1, 1)

    //     arr.window.location = "news.html"
    // }

    img.src = el.urlToImage

    let title = document.createElement("h3")

    title.innerText = el.title

    let description = document.createElement("h2")

    description.innerText = el.description

    div.append(img, title, description)
    document.getElementById("results").append(div)
})