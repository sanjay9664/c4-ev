// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

let nav = document.getElementById("NAVBAR")

nav.innerHTML = navbar();


let search = (e) => {

    if (e.key === "Enter") {

        getdata()
    }
}

document.getElementById("search_input").addEventListener("keydown", search)

let arr = JSON.parse(localStorage.getItem("news")) || []
let getdata = async() => {

    let value = document.getElementById("search_input").value


    let container = document.getElementById("results")

    try {

        let res = await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${value}`)

        let data = await res.json()

        let news = data.articles

        news.forEach((el) => {

            let div = document.createElement("div")

            let img = document.createElement("img")

            img.src = el.urlToImage

            let title = document.createElement("h3")

            title.innerText = el.title

            let description = document.createElement("h2")

            description.innerText = el.description

            div.append(img, title, description)
            container.append(div)

            arr.push(el)

            localStorage.setItem("news", JSON.stringify(arr))
        })



    } catch (err) {
        console.log(err)
    }
}

getdata()


// function csearch() {

//     console.log(this.id)
// }

// for (var el of sidebar) {
//     console.log
// }