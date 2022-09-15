var frutas = ["Abacate", "Abacaxi", "Amora", "Açai", "cereja", "figo"];

//contar a quantidade de itens no array
console.log("quantidade de tipo de frutas " +frutas.length);

//acessar o primeiro item do Array
console.log("Primeiro tipo de frutas: " +frutas[0]);

//acessar um item do Array
console.log("acessar um item do array: " +frutas[2]);

//acessar o ultimo item do Array
console.log("ultimo tipo de frutas: " +frutas[frutas.length-1]);

//Adicionar um item a final do array
frutas.push("maçã");

//adicionar ao inicio do array
frutas.unshift("kiwi"); 

//remover um item do final do Array
frutas.shift();

//romover do inicio do Array
frutas.shift();


//romover do qualquer posição do Array
frutas.shift();

//Remover um item pela posição do indice
//frutas.splice(pos, n);
//apartir da posição (pos) em direção ao fim da array
//(n) define o numero de intens a ser removido
frutas.splice(2,3);

//ler o array completo
frutas.forEach(function(item, indice, array){
    console.log(item, indice);
});

var carros = ["Voyage", "Virtus", "Jetta", "A1", "A2", "A3"];

//Adicionar um item a final do array
carros.push("saveiro");

//Remover um item pela posição do indice
carros.splice(2,3);

//ler o array completo
carros.forEach(function(item, indice, array){
    console.log(item, indice);
});