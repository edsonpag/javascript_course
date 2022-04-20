const names = ["Ana", "Edson", "Neuza", "Claudio", "Andre"]
const ages = [18, 20, 55, 21, 21]

Array.isArray(names) // se for um array retorna true, caso ñ retorna false
names.length // retorna o tamanho do array
names.toString() // retorna uma string, seperando os elementos por virgula. Ex: Ana,Edson,Neuza
names.join(" ") // retorna uma string, seperando por espaços (você pode definir qualquer separador)
names.push("Arivaldo") // adiciona um novo elemento no final do array
names.pop() // remove e retorna o ultimo elemento do array
names.shift() // remove e retorna o primeiro elemento do array
names.unshift("Jessica") // adiciona um novo elemento no começo do array
names.concat(ages) // retorna um novo array, juntando os dois arrays em apenas um
names.splice(2, 0, "Fernando", "Gabriela") // Primeiro argumento define a posição que o novo elemento deve ser incluido. O segundo define quantos elementos devem ser removidos (apartir da posição definida). O restante define os novos elementos a serem adicionados
names.splice(2, 4) // Define para remover o indice 2, 3 e 4 do array. O metodo retorna o os valores removidos em um novo array
names.slice(1, 3) // retorna um novo array, usando os indices 1, 2 (ñ remove elementos do array original)
names.sort() // ordena o array
names.reverse() // ordena o array de forma reversa
names.sort(function(a, b) { 
    return a - b
})
// ordenação de números. Se o resultado é negativo "a" irá primeiro. Se o resultdo é positivo significa que "b" é menor, por isso vai primeiro.
Math.max.apply(null, ages) // retorna o valor maximo de um array
Math.min.apply(null, ages) // retorna o valor minimo de um array

names.forEach((name) => {
    console.log(name)
})
// para cada nome no array de nomes, exibe no console

ages.map((age) => {
    return age =+ 1
})
// retorna um novo array, sem modificar o array principal

ages.filter((age) => {
    return age > 20
})
// retorna um novo array, com todos os elementos que retornarem true no teste

ages.reduce((initValue, age) => {
    return initValue + age
}, 1)
// Nesse ex o initValue inicia com 1, a cada iteração é somado a age. Após todas as iterações é retornado o valor final de initValue

ages.every((age) => {
    return age > 18
})
// retorna true ou false, se todos os elementos do array passaram no teste

ages.some((age) => {
    return age === 18
})
// retorna true ou false, se pelo menos 1 dos elementos passarem no teste

names.indexOf("Edson") // procura por um elemento no array e retorna a sua primeira posição (-1 caso ñ encontre). Usar lastIndexOf() para enconrtar a ultima posição

ages.find((age) => {
    return age > 20
})
// retorna o primeiro elemento do array que passar no teste

ages.findIndex((age) => {
    return age > 20
})
// retorna o index do primeiro elemento que passar no teste

Array.from("Edson") // transforma o valor passado em um array. Ex: ['E', 'd', 's', 'o', 'n']
names.includes("Claudio") // retorna true ou false, se encontrar o elemento no array