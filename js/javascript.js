/*
0 = Novedades 
1 = Deportes
2 = Politica
3 = Entretenimiento
4 = Gamer

*/
function getNavButtons(pagina) {
    const navButtons = document.getElementById(pagina + "-button");
    return navButtons;
}

function getPageContent(pagina) {
    const pageContent = document.getElementById(pagina + "-content");
    return pageContent;
}
const navBar = document.getElementById("navigation-bar-unique");
const footer = document.getElementById("footer-content");
const pages = {
    name: ["novedades", "deportes", "politica", "entretenimiento", "gamer"],
    color: ["secondary", "danger", "info", "primary", "warning"]
};
var navBarDefaultClass = "container-fluid sticky-top ";
var buttonDefaultClass = "btn btn-width ";


function displayNone() {
    for (let page of pages.name) {
        if (isDisplayActive(page + "-content")) {
            getPageContent(page).style.display = "none";
            getNavButtons(page).className = buttonDefaultClass;
            console.log(page);
        }
    }
}

function isDisplayActive(parameter) {
    if (document.getElementById(parameter) != "") {
        return true;
    } else {
        return false;
    }
}

function content(pagina) {
    for (let page of pages.name) {
        if (page === pagina) {
            getPageContent(pagina).style.display = "";
        }
    }
}

function color(pagina) {
    for (let page of pages.name) {
        let index = pages.name.indexOf(page)
        if (page === pagina) {
            navBar.className = navBarDefaultClass + "bg-" + pages.color[index];
            getNavButtons(pagina).className = buttonDefaultClass + "bg-" + pages.color[index] + " text-white";
            footer.className = "container-fluid mt-5 py-3 bg-" + pages.color[index];
        }
    }
}

function showPageContent(pagina) {
    displayNone();
    content(pagina);
    color(pagina);

}
const deportesCards = ["deportes-card-1", "deportes-card-2", "deportes-card-3"];
const entretenimientoCards = ["entretenimiento-card-1", "entretenimiento-card-2", "entretenimiento-card-3"];
const politicaCards = ["politica-card-1", "politica-card-2", "politica-card-3"];

function loadLatest() {
    function integerAleatorio(max) {
        return Math.floor((Math.random() * max.length));
    }
    document.getElementById("novedades-card-2").innerHTML = document.getElementById(deportesCards[integerAleatorio(deportesCards)]).innerHTML;
    document.getElementById("novedades-card-2").className = "card border-danger";
    document.getElementById("novedades-card-3").innerHTML = document.getElementById(entretenimientoCards[integerAleatorio(entretenimientoCards)]).innerHTML;
    document.getElementById("novedades-card-3").className = "card border-primary";
    document.getElementById("novedades-card-1").innerHTML = document.getElementById(politicaCards[integerAleatorio(politicaCards)]).innerHTML;
    document.getElementById("novedades-card-1").className = "card border-info";
}