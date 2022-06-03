<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Cache-control" content="no-cache">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noticias</title>
    <link rel="stylesheet" href="/portal-de-noticias/css/bootstrap.css">
    <style>
      .btn-width{
        width:140px;
      }
      body{
          min-height:100vh;
      }
      img {
          aspect-ratio: 172/115;
          object-fit:cover;
      }
      .transition-out {
          transition:1s;
          opacity:0%;
      }
      .transition-in {
          transition:1s;
          opacity:100%;
      }
      .ocultar{
          display:none;
      }
      .mostrar{
          display:unset;
      }
    </style>
</head>
<body id="id-body" class="d-flex flex-column align-content-between" onload="loadLatest()">
    <div class="d-flex flex-column">
        
    <div class="container-fluid text-center bg-dark py-3 ">
        <div class="row text-white font-weight-bold">
            <div class="col">
                
            </div>
            <div class="col">
                <h1>El Chismosito</h1>
                
            </div>
            <div class="col">
              
            </div>
        </div>
    </div>
    <div id="navigation-bar-unique" class="container-fluid sticky-top bg-secondary">
        <div class="row justify-content-center">
          
          
            <div class="btn-group" role="group" aria-label="Basic example" >
<!--
  Array[n] 
0 = Novedades 
1 = Deportes
2 = Politica
3 = Entretenimiento
4 = Gamer
 -->
            <button id="deportes-button" type="button" class=" btn btn-width" onclick="showPageContent(pages.name[1])">Deportes</button>
            <button id="politica-button" type="button" class="btn btn-width" onclick="showPageContent(pages.name[2])">Política</button>
            <button id="novedades-button" type="button" class="btn btn-width btn-secondary" active onclick="showPageContent(pages.name[0])">Novedades</button>
            <button id="entretenimiento-button" type="button" class="btn btn-width" onclick="showPageContent(pages.name[3])">Entretenimiento</button>
            <button id="gamer-button" type="button" class="btn btn-width" onclick="showPageContent(pages.name[4])">Gamer</button>
            </div>
             
            
        </div>
    </div>