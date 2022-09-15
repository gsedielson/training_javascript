var cadeira = {
    cor: "preta",
    altura : 118,
    largura: 74,
    profundidade: 6,
    peso: 17
};
document.write("<h2>apresentação</h2><hr>");
document.write("cor da cadeira " +cadeira.cor+ "<br><hr>");
document.write("altura da cadeira " +cadeira.altura+ "<br><hr>");
document.write("largura da cadeira " +cadeira.largura+ "<br><hr>");
document.write("profundidade da cadeira " +cadeira.profundidade+ "<br><hr>");
document.write("peso da cadeira " +cadeira.peso+ "<br><hr>");

document.write("<h2>mudança</h2><hr>");
cadeira.cor = "branca",
cadeira.altura = 120,
cadeira.largura = 80,
cadeira.profundidade = 12,
cadeira.peso = 15,
document.write("cor da cadeira " + cadeira.cor +"<br><hr>");
document.write("Altura da cadeira " +cadeira.altura+ "<br><hr>");
document.write("largura da cadeira " +cadeira.largura+ "<br><hr>");
document.write("profundidade da cadeira " +cadeira.profundidade+ "<br><hr>");
document.write("peso da cadeira " +cadeira.peso+ "<br><hr>");

document.write("<h2>exclusao</h2><hr>");
//demostração
document.write("<h3>antes da exclusao</h3><hr>");
document.write("antes da exclusão cor da cadeira " + cadeira.cor +"<br><hr>");
document.write("antes da exclusão altura da cadeira " +cadeira.altura+ "cm<br><hr>");
document.write("antes da exclusão largura da cadeira " +cadeira.largura+ "cm<br><hr>");
document.write("antes da exclusão profundidade da cadeira " +cadeira.profundidade+ "cm<br><hr>");
document.write("antes da exclusão peso da cadeira " +cadeira.peso+ "cm<br><hr>");
//processo de exclusão
delete cadeira.cor;
delete cadeira.altura;
delete cadeira.largura;
delete cadeira.profundidade;
delete cadeira.peso;
//demostração
document.write("<h3>apos da exclusao</h3><hr>");
document.write("apos a exclusão cor da cadeira " + cadeira.cor +"<br><hr>");
document.write("apos a exclusão altura da cadeira " +cadeira.altura+ "<br><hr>");
document.write("apos a exclusão largura da cadeira " +cadeira.largura+ "<br><hr>");
document.write("apos a exclusão profundidade da cadeira " +cadeira.profundidade+ "<br><hr>");
document.write("apos a exclusão peso da cadeira " +cadeira.peso+ "<br><hr>");

document.write("<h2>nova forma</h2><hr>");
var mesa = new Object();
mesa.cor = "preta",
mesa.altura = "40";
mesa.largura = "220",
mesa.profundidade = "40";
mesa.peso = "50";
document.write("cor da mesa: " +mesa.cor+ "<br><hr>");
document.write("Altura da mesa: " +mesa.altura+ "cm<br><hr>");
document.write("largura da mesa: " +mesa.largura+ "cm<br><hr>");
document.write("profundidade da mesa: " +mesa.profundidade+ "cm<br><hr>");
document.write("peso da mesa: " +mesa.peso+ "cm<br><hr>");