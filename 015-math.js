let x = 4.5

Math.round(x) // arredonda o número para o inteiro mais proximo. Nesse caso retorna 5
Math.ceil(x) // arredonda para cima sempre. Nesse caso retorna 5
Math.floor(x) // arredonda para baixo. Nesse caso retorna 4
Math.trunc(x) // retorna apenas a parte inteira, nesse caso 4
Math.sign(x) // retorna 1 se for positivo, 0 se for zero e -1 se for negativo
Math.pow(x, y) // retorna x elevado a y
Math.sqrt(x) // retorna a raiz quadrada de x
Math.abs(x) // retorna o valor absoluto de x
Math.min(5, 9, 4, 3, 12, 2, 17) // retorna o valor minimo da lista
Math.max(5, 9, 4, 3, 12, 2, 17) // retorna o valor maximo da lista
Math.random() // retorna um número aleatorio entre 0 (incluso) e 1 (não incluso)
Math.floor(Math.random() * 10) // retorna um número aleatorio entre 0 e 9


let max = 100
let min = 50
Math.floor(Math.random() * (max - min + 1)) + min
// Gera um valor entre 0 e 1 aleatoriamente. Multiplica por 51. Irá retornar um valor entre 0 e 50. Soma +50 ao resultado. Irá retornar um valor entre 50 e 100

