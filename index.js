let age = 10;
let movieTime = 70;

// if (age <= 13 || age >= 65) {
//     if (movieTime < 14 && movieTime <= 20) {
//         console.log("The ticket price is $5");
//     } else {
//         console.log("The discount is only available for evening shows.");
//     }
// } else if (age > 13 && age <= 64) {
//     if (movieTime > 14 && movieTime < 20) {
//         console.log("The ticket price is $10");
//     } else {
//         console.log("The standard price is only available for matinee shows.");
//     }
// }

// if (age < 0 || movieTime < 0) {
//     console.log("Invalid input");
// }



switch (true) {
    case (age < 0 || movieTime < 0):
        console.log("Invalid Input");
        break;
    case (age < 13 || age >= 65):
        case (movieTime >= 14 && movieTime <= 20):
            console.log("the ticket price is $5");
            break;
            console.log("The discount is only available for evening shows.");

            break;
    break;
    case (age >= 13 && age <= 64):
        case (movieTime >= 14 && movieTime <= 20):
            console.log("the ticket price is $10");
            break;
            console.log("The standard price is only available for matinee shows.");
            break;
    break;
    default:
        console.log("Invalid input");
}
