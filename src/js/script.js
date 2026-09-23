// Sistema de cadastro de vinhos - Vinheria Agnello

alert("Bem vindo a Vinheria Agnello! Vamos cadastrar um vinho.")

// pegando as informações do vinho
var nome = prompt("Digite o nome do vinho:")
var tipo = prompt("Qual o tipo do vinho? (Tinto, Branco ou Rosé)")
var safra = Number(prompt("Qual a safra do vinho? (ano)"))
var quantidade = Number(prompt("Quantas unidades tem no estoque?"))

// calculando a idade do vinho
var anoAtual = 2026
var idade = anoAtual - safra

alert("Cadastro realizado! Veja os detalhes no console.")

// mostrando no console
alert("A seguir, veja os detalhes do vinho no console.")
console.log("===== VINHO CADASTRADO =====")
console.log("Nome: " + nome)
console.log("Tipo: " + tipo)
console.log("Safra: " + safra)
console.log("Idade do vinho: " + idade + " anos")
console.log("Quantidade em estoque: " + quantidade + " unidades")
console.log("============================")