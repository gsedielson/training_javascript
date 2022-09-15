function carConteudo(){
    document.getElementById("conteudo").innerHTML="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos com as";
}

function mouseOver(){
    document.getElementById("mouseAlt").innerHTML="Retire o mouse";
}

function mouseOut(){
    document.getElementById("mouseAlt").innerHTML="Passe o mouse";
}

function converTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}

function validarSenha(){
    var senha = document.getElementById("senha").value;

    if(senha == "" || senha.length <= 5){
        document.getElementById("erroSenha").innerHTML="<span style='color: #ff0000';> Preencha o campo senha com no minimo 6 caracter</span>";
    }else{
        document.getElementById("erroSenha").innerHTML="<span style='color:#00FF00;'>Senha valida </span>";
    }
}