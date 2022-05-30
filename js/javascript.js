
const pages = {name:["novedades", "deportes", "politica"], navColor:["secondary", "danger", "info"]};

function displayNone(){
    for (let page of pages.name) {
        if (isDisplayActive(page + "-content")){
            let pageContent = page + "-content";
            document.getElementById(pageContent).style.display = "none";
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
var navBarDefaultClass = "container-fluid sticky-top "
var buttonDefaultClass = "btn btn-secondary "
function deportesContent(){
    displayNone();
    document.getElementById("deportes-button").className = buttonDefaultClass + "active";
    document.getElementById("navigation-bar-unique").className = navBarDefaultClass + "bg-danger";
    document.getElementById("deportes-content").style.display = "";
}
function novedadesContent(){
    displayNone();
    document.getElementById("navigation-bar-unique").className = navBarDefaultClass + "bg-secondary";
    document.getElementById("novedades-content").style.display = "";
}
function politicaContent(){
    displayNone();
    document.getElementById("navigation-bar-unique").className = navBarDefaultClass + "bg-info";
    document.getElementById("politica-content").style.display = "";
}
function pageContent(pagina){
    for (let page of pages.name) {
        if (page === pagina){
            document.getElementById(pagina + "-content").style.display = "";
        }
    }
}
function navBarColor(pagina){
    for (let page of pages.name) {
        let index = pages.name.indexOf(page)
        if (page === pagina){
            document.getElementById("navigation-bar-unique").className = navBarDefaultClass + "bg-" + pages.navColor[index]; 
        }
    }
}
function content(pagina){
    displayNone();
    pageContent(pagina);
    navBarColor(pagina);
    
}