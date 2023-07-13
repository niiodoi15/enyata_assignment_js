let movieType = "regular";
let age = 21;
let seatSelection = "VIP";

let ticketPrice = 0;

if (movieType === "regular") {
  if (age < 12) {
    ticketPrice = 8;
  } else if (age < 65) {
    ticketPrice = 12;
  } else {
    ticketPrice = 10;
  }
} else if (movieType === "3D") {
  if (age < 12) {
    ticketPrice = 10;
  } else if (age < 65) {
    ticketPrice = 15;
  } else {
    ticketPrice = 12;
  }
} else if (movieType === "IMAX") {
  if (age < 12) {
    ticketPrice = 12;
  } else if (age < 65) {
    ticketPrice = 18;
  } else {
    ticketPrice = 15;
  }
}

if (seatSelection === "VIP") {
  ticketPrice += 5;
}

console.log(`Ticket price is ${ticketPrice}`);