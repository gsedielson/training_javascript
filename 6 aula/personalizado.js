var valorUm = 10;
var valorDois = 10;

document.write("<h2>Operador de comparação: igual a </h2>");
if (valorUm == valorDois){
    document.write(valorUm + " igual " + valorDois);
}else{
    document.write(valorUm + " Diferente " + valorDois);
}

document.write("<h2>Operador de comparação: diferente a </h2>");
if(valorUm != valorDois){
    document.write(valorUm + " diferente " + valorDois);
}else{
    document.write(valorUm + " igual " + valorDois);
}

document.write("<h2>Operador de comparação: Menor </h2>");
if(valorUm < valorDois){
    document.write(valorUm + " menor " + valorDois );
}else{
    document.write(valorUm+ " maior " +valorDois);
}

document.write("<h2>Operador de comparação: maior </h2>");
if(valorUm > valorDois){
    document.write(valorUm + " maior " + valorDois);
}else{
    document.write(valorUm + " menor " +valorDois);
}

document.write("<h2>Operador de compração: menor ou igual</h2>");
if(valorUm <= valorDois){
    document.write(valorUm + " menor ou igual " +valorDois);
}else{
    document.write(valorUm + " maior ou igual " +valorDois);
}

document.write("<h2>Operador de comparação: maior ou igual</h2>");
if(valorUm >= valorDois){
    document.write(valorUm + " maior ou igual " + valorDois);
}else{
    document.write(valorUm+ " menor ou igual a " +valorDois);
}

