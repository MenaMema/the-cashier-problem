const input = require("readline-sync"); //load package to read from terminal (comand: "npm install readline-sync")

let cost = input.question("What is the price of the item that you want?: ");
let paid = input.question("How much money are you paying with?: ");

const moneyCash = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]; //Coins that I have

//let cost = 22.75; //Total price
//let paid = 50; //Money recieved
if (paid >= cost) {
  let change = paid - cost; //Return
  let i = 0; //Indicate the first value of the array of the money
  console.log(`The total change is ${change}`);
  while (change >= 0.01) {
    if (moneyCash[i] <= change) {
      let aux = Math.floor(change / moneyCash[i]);
      //console.log(aux);
      change = (change - moneyCash[i] * aux).toFixed(2);
      //console.log(change);
      console.log("\t" + aux + " x €" + moneyCash[i]);
    } else {
      i++;
    }
  }
  console.log(
    `The remaining ammount is ${change}, thanks for buying at Coviran Manolo`
  );
} else {
  console.log(`You need more money, concretely ${cost - paid}€`);
}
