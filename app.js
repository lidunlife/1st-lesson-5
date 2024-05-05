let DayOfWeek = +prompt(`Write your number`)

function week(day) {
    switch (day) {
        case 1:
            alert(`Today is Monday`)
            break;
        case 2:
            alert(`Today is Tuesday`)
            break;
        case 3:
            alert(`Today is Wednesday`)
            break;
        case 4:
            alert(`Today is Thursday`)
            break;
        case 5:
            alert(`Today is Friday`)
            break;
        case 6:
            alert(`Today is Saturday`)
            break;
        case 7:
            alert(`Today is Sunday`)
            break;
    
        default:
            alert(`It is not day of the week`)
            break;
    }
}
week(DayOfWeek)