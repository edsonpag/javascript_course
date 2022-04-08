const names = ["Ana", "Edson", "Neuza", "Claudio", "Andre"]
const ages = [18, 20, 55, 21, 21]

Array.isArray(names) // se for um array retorna true, caso ñ retorna false
names.length // retorna o tamanho do array
names.forEach((name) => { // para cada nome no array de nomes, exiba no console
    console.log(name)
})
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
