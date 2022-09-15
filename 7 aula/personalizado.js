var nota = 8;
var falta = 27;

if ((nota < 4) || (falta > 25)){
    document.write("Reprovado: " + nota + ". falta: " + falta + "<br>");
}

nota = 3;
falta = 27;

if ((nota < 4) && (falta > 25)){
    document.write("Reprovado: " + nota + ". falta: " + falta + "<br>");
}

var situacao = !false;
document.write("Situação: " + situacao + "<br>");