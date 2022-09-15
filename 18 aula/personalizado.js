document.getElementById("exemplo-um").innerHTML = "Inserir texto no exemplo um";

function exemploDois(){
    var nomeElemento = document.getElementsByName("curso");
    console.log(nomeElemento);

    //Tamanho do NodeList
    console.log("Tamanho do Nodelist " + nomeElemento.length);

    //Ler elemento do NodeList
   console.log("Elemento da Posição 0 " + nomeElemento[0]['value']);
   console.log("Elemento da Posição 1 " + nomeElemento[1]['value']);
   console.log("Elemento da Posição 2 " + nomeElemento[2]['value']);

   for (var i = 0; i < nomeElemento.length; ++i){
    console.log(nomeElemento[i]['value']);
   }
}


function exemeploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag)


     //Tamanho do NodeList
     console.log("Tamanho do Nodelist " + nomeTag.length);

     //Ler elemento do NodeList
    console.log("Elemento da Posição 0 " + nomeTag[0]['value']);
    console.log("Elemento da Posição 1 " + nomeTag[1]['value']);
    console.log("Elemento da Posição 2 " + nomeTag[2]['value']);
 
    for (var i = 0; i < nomeTag.length; ++i){
     console.log(nomeTag[i]['value']);
    }
}




function exemploQuatro(){
    var nommeTagLista = document.getElementsByTagName("li");
    console.log(nommeTagLista);

    //Tamanho do NodeList
    console.log("Tamanho do Nodelist " + nommeTagLista.length);

    //Ler elemento do NodeList
   console.log("Elemento da Posição 0 " + nommeTagLista[0]['value']);
   console.log("Elemento da Posição 1 " + nommeTagLista[1]['value']);
   console.log("Elemento da Posição 2 " + nommeTagLista[2]['value']);

   for (var i = 0; i < nommeTagLista.length; ++i){
    console.log(nommeTagLista[i]['value']);
   }
}



function exemploCinco(){
    var nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);

    //Tamanho do NodeList
    console.log("Tamanho do Nodelist " + nomeClasse.length);

    //Ler elemento do NodeList
   console.log("Elemento da Posição 0 " + nomeClasse[0]['innerHTML']);
   console.log("Elemento da Posição 1 " + nomeClasse[1]['innerHTML']);
   console.log("Elemento da Posição 2 " + nomeClasse[2]['innerHTML']);

   for (var i = 0; i < nomeClasse.length; ++i){
    console.log(nomeClasse[i]['innerHTML']);
}
}