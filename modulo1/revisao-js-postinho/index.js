
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${1}!==${3} é ${1 !== 3}`
}
console.log(checarDesigualdade(1, 3))

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdades ${1}=== ${3} e ${1 === 3}`
       

}
console.log(checarIgualdade(1,3))

// c-)Faça uma função chamada "verificaSeEMaior"
function verifacaSeMaior(a, b){
return `No comparador de verifaçãoSeEMaior ${321} > ${2156} e ${321 > 2156}`
}


    console.log(verifacaSeMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
//exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null = true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []
    let nome = prompt("digite seu nome:")
    let idade = Number(prompt("digite sua idade:"))
    let nacionalidae = prompt("Qual seu país de origem:")
    let senha = prompt ("Digite uma senha com 6 caracteres:")
    if(idade < 18 ){
        return "erro no cadastro"
    }
    if(senha.length < 6){
        return "erro no cadastro"
    }
    if(nacionalidae !== "Brasil"){
        return "erro no cadastro"
    }
const pessoa = {
    nomeDoUsuario: nome,
    idade: idade,
    SenhaDoUsuario:senha,
    nacionalidae:nacionalidae
}
    usuario.push(pessoa)
    return usuario
    //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    let senha = prompt ("digite sua senha:");
    if (senha === "labenu" ) {
        return "usuario logado"
    }else {
        return "senha invalida"
    }
    
    

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    let nome = prompt("qual o seu nome:");
    let vacina = prompt("qual a vacina que voce tomou:")
    let tempo = ""
    let data = ""
    if(vacina==="coronavac"){
        tempo = 28
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }if(vacina==="Astranezeca"){
       tempo = 90
      return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }if(vacina==="Pfizer")
       tempo = 90
       return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
      
       //  Sua lógica aqui




console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());