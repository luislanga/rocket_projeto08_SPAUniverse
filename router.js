const route = (event) => {
    
    event = event || window.event
    event.preventDefault();
    window.history.pushState({},"",event.target.href);

    handleLocation();
}

const routes = {
    404: "./pages/404.html",
    "/": "./pages/home.html",
    "/ouniverso": "./pages/ouniverso.html",
    "/exploracao": "./pages/exploracao.html"

}

const ids = {
    "/": document.querySelector('#home-link'),
    "/ouniverso": document.querySelector('#ouniverso-link'),
    "/exploracao": document.querySelector('#exploracao-link')
}


function highlight(id) {

    //loop 

        ids["/"].classList.remove("isClicked")
        ids["/ouniverso"].classList.remove("isClicked")
        ids["/exploracao"].classList.remove("isClicked")
               
        id.classList.add("isClicked")
        
}

function handleLocation() {

    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const id = ids[path] || ids[404]

    highlight(id)

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#main-page').innerHTML = html
    })

}


handleLocation()

window.onpopstate = () => handleLocation()