var nota = 2;

if(nota >= 7){
    document.write("Aprovado: " + nota + "<br>");
}else if((nota < 7) && (nota >= 4)){
    document.write("Recuperação: "+ nota + "<br>");
}else{
    document.write("Reprovado: " + nota + "<br>")
}

var sol = false;
var nublado = false;
if(sol){
    document.write("Vamos para praia porque tem o sol!<br>");
}else if(nublado){
     document.write("vamos para o parque!<br>");
}else{
    document.write("vamos ficar em casa estudando javascript!<br>");
}