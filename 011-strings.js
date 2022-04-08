let myName = "Edson Pagani"

myName.length // tamanho da string
myName.charAt(2) // retorna a letra "s" 
myName.endsWith("on") // retorna false, pois a string termina com ...ni
myName.includes("Pag", 2) // retorna true ou false se a string contém ou não o valor especificado. Segundo argumento é a posição para iniciar a procura, padrão: 0
myName.indexOf("son", 0) // retorna a posição, que o valor determinado foi encontrado, caso não seja encontrado retorna -1. Segundo argumento é a posição para iniciar a procura, padrão: 0
myName.lastIndexOf("ni") // retorna a posição, que o valor determinado foi encontrado (començando do ultimo caracter), caso nada seja encontrado retora -1. O segundo argumento tem o valor padrão do tamanho da string
myName.match("ni") // retorna um array se encontrar o valor ou null caso não encontrar
myName.repeat(5) // retorna a String, repetida 5 vezes
myName.replace("Pagani", "Silva") // retorna um nova String, trocando para o novo valor determinado
myName.search("Pag") // procura pelo valor e retorna a primeira posição onde é encontrado. Retorna -1 caso nada seja encontrado
myName.slice(0, 2) // Seleciona os dois primeiros elementos da String e retorna eles. Primeiro argumento a posição inicial e o segundo a posição final (padrão: tamanho da string)
myName.split(" ") // retorna um array, os elementos são separados por um espaço.
myName.split("") // retorna um array, todos os caracteres são separados. O segundo argumento é opcional, define o limite de separações
myName.startsWith("son") // retorna false, pois a string começa com Ed... Segundo argumento pode definir a posição inicial, valor padrão é 0
myName.toLowerCase() // retorna a string em letras minusculas
myName.toUpperCase () // retorna a string com letras maiusculas
myName.trim() // remove os espaços da string
