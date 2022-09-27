let estudantes = [
    {
        nome: "Alex",
        nota1: 10,
        nota2: 3
    },
    {
        nome: "Erika",
        nota1: 10,
        nota2: 10
    },
    {
        nome: "Alessandra",
        nota1: 10,
        nota2: 8
    }
]

function calcMedia(nota1, nota2){
    return (nota1 + nota2) / 2
}

function aprovado(estudante){
    return `A média do(a) aluno(a) ${estudante.nome} é: ${calcMedia(estudante.nota1, estudante.nota2)}\n Parabéns, ${estudante.nome}! Você foi aprovado(a) no concurso!`
}

function reprovado(estudante){
    return `A média do(a) aluno(a) ${estudante.nome} é: ${calcMedia(estudante.nota1, estudante.nota2)}\n Não foi dessa vez, ${estudante.nome}!Tente novamente!`
}

for(estudante of estudantes){
    let media = calcMedia(estudante.nota1, estudante.nota2)
    let mensagemAprovado = aprovado(estudante)
    let mensagemReprovado = reprovado(estudante)

    if(media >=7){
        alert(mensagemAprovado)
    } else {
        alert(mensagemReprovado)
    }
}
