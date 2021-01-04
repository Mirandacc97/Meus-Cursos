

function cadastrar (usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Matheus" , "João"];

let novosUsuarios = cadastrar(usuarios , "Henrique" , "Lucas");