<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noticias</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
      .btn-width{
        width:140px;
      }
    </style>
</head>
<body onload="test()">
    <div class="container">
        
    </div>
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