let date = new Date() // Sat Apr 09 2022 06:12:10 GMT-0300 (Brasilia Standard Time)
date = new Date(2001, 10, 8, 22, 30, 30, 0) //  Ano, mês (0-11), dia, horas, minutos, segundos e milisegundos. Você pode omitir os valores conforme a necessidade. Se você deixar apenas 1 argumento será mostrado como milisegundos. Thu Nov 08 2001 22:30:30 GMT-0200 (Brasilia Summer Time)
date.toUTCString() // Fri, 09 Nov 2001 00:30:30 GMT
date.toDateString() // Thu Nov 08 2001
date = new Date('2001-11-08') // ISO padrão. Dependendo da sua Time Zone o resulado será diferente
date.getTime() // retorna o número de milisegundos desde 01 de Janeiro de 1970
date.getFullYear() // retorna o ano da data. Ex: 2001
date.getMonth() // retorna o mês (0-11)
date.getDate() // retorna o dia (1-31)
date.getHours() // retorna a hora (0-23)
date.getMinutes() // retorna os minutos (0-59)
date.getSeconds() // retorna os segundos
date.getDay() // retorna o dia da semana (0-6) - Domingo até Sabado
date.setFullYear(2010) // define que o ano será 2010
date.setMonth(10) // define que o mês será novembro (0-11) 
date.setDate(8) // define o dia (1-31)
date.setDate(date.getDate() + 3) // define será 3 dias após o dia atual
date.setHours(22) // define o horario (0-23)
date.setMinutes(50) // define os minutos (0-59)
date.setSeconds(20) // define os segundos (0-59)
