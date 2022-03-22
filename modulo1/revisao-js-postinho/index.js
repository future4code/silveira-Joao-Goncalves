
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
        data  = 12/04/2022
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }if(vacina==="Astranezeca"){
       tempo = 90
       data = 13/06/2022
      return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }if(vacina==="Pfizer")
       tempo = 90
       data = 13/06/2022
       return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`//
   
}


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
    for  ( i=0 ; i<2 ; i++){
        if(nomeDoUsuario === usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
        }
    }


console.log(usuarios)}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    for  ( let i=0 ; i<=usuarios.length-1 ; i++){
        if(usuarios[i].imunizacao !== "completa"){
         console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }


}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
    

]

const cadastroDesafio = () => {

    
    let nome = prompt("digite seu nome:")
    let anoDeNascimento = Number(prompt("digite o seu ano de nascimento:"))
    let senha = prompt ("Digite uma seenha com 6 caracteres:")
    let nacionalidade = prompt ("Qual a sua nacionalidade:")
    let idade = (2022-anoDeNascimento)
    
    if(idade < 18 ){
        return "erro no cadastro"
    }
    if(senha.length < 6){
        return "erro no cadastro"
    }
    if(nacionalidade !== "Brasil"){
        return "erro no cadastro"
    }
      const pessoa = {
    nome : nome,
    ano : anoDeNascimento,
    senha :senha,
    nacionalidade: nacionalidade
}
    usuarios.push(pessoa)
    return usuarios
}

 console.log(cadastroDesafio());
//---------------------------------------------------
const loginDesafio = () => {
    const senhaDigitada = prompt("Digite sua senha?")
    let mensagem
    for(let pessoa of usuarios){
     if (senhaDigitada == pessoa.senha){
         mensagem = "usuario logado "
         return mensagem;
     }
    }
    if(mensagem === undefined ){
        console.log("senha invalida")
    }
}
console.log(loginDesafio());
//---------------------------------------------------
const primeiraDoseDesafio = () => {
    let vacina = prompt("Qual vacina você tomou ?")
    let imunizacao = "incompleta"
    usuarios[usuarios.length-1] = {
        ...usuarios[usuarios.length-1],
        vacina: vacina,
        imunizacao: imunizacao
    }
    //  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
//--------------------------------------------------
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));
//---------------------------------------------------
const avisoAosAtrasadosDesafio = () => {
   // Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio())