//SOME EVERY

let names = ['Matheus' , 'Lucas' , 'Henrique'];


console.log(names.some(names => names === 'Matheus'));

//EVERY

let nomes = [
    {nome: 'Matheus' , idade: 18},
    {nome: 'Lucas' , idade: 25},
    {nome: 'Henrique' , idade: 15}
];

console.log(nomes.every(nome => nome.idade >= 18));