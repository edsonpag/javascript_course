const weekday = new Date().getDay() // retorna um número de a 0 a 6
let day


switch(weekday) {
    case 0:
        day = 'Sunday'
        break
        
    case 1:
        day = 'Monday'
        break

    case 2:
        day = 'Tuesday'
        break

    case 3:
        day = 'Wednesday'
        break

    case 4:
        day = 'Thursday'
        break
    
    case 5:
        day = 'Friday'
        break

    case 6:
        day = 'Saturday'
        break

    default:
        day = 'O valor deve ser entre 0 e 6'
}