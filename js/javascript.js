/*
0 = Novedades 
1 = Deportes
2 = Politica
3 = Entretenimiento
4 = Gamer

*/
const pages = {name:["novedades", "deportes", "politica", "entretenimiento", "gamer"], color:["secondary", "danger", "info", "primary", "warning"]};
var navBarDefaultClass = "container-fluid sticky-top ";
var buttonDefaultClass = "btn btn-width ";

function displayNone(){
    for (let page of pages.name) {
        if (isDisplayActive(page + "-content")){
            let pageColor = page + "-button";
            let pageContent = page + "-content";
            document.getElementById(pageContent).style.display = "none";
            document.getElementById(pageColor).className = buttonDefaultClass;
            console.log(page);
        }
    }
}

function isDisplayActive(parameter){
    if (document.getElementById(parameter) != ""){
        return true;
    } else {
        return false;
    }
}
function content(pagina){
    for (let page of pages.name) {
        if (page === pagina){
            document.getElementById(pagina + "-content").style.display = "";
        }
    }
}
function color(pagina){
    for (let page of pages.name) {
        let index = pages.name.indexOf(page)
        if (page === pagina){
            document.getElementById("navigation-bar-unique").className = navBarDefaultClass + "bg-" + pages.color[index];
            document.getElementById(pagina + "-button").className = buttonDefaultClass + "bg-" + pages.color[index] + " text-white";
        }
    }
}
function showPageContent(pagina){
    displayNone();
    content(pagina);
    color(pagina);
    
}
const deportesCards = ["deportes-card-1", "deportes-card-2", "deportes-card-3"]
function test(){
    function integerAleatorio(max) {
        return Math.floor((Math.random() * max.length));
      }
    document.getElementById("novedades-card-2").innerHTML = document.getElementById(deportesCards[integerAleatorio(deportesCards)]).innerHTML;
}