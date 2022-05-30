<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noticias</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
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
        <div class="row">
          
          <div class="mx-auto">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button id="deportes-button" type="button" class="btn btn-secondary" onclick="content(pages.name[1])">Deportes</button>
              <button id="novedades-button" type="button" class="btn btn-secondary" active onclick="content(pages.name[0])">Novedades</button>
              <button id="politica-button" type="button" class="btn btn-secondary" onclick="content(pages.name[2])">Política</button>
            </div>
          </div>   
            
        </div>
    </div>