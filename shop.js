// Shopping
const wallet = 50; // euro

// Store
const applesPrice = 10; // euro per piece
const applesAmount = 3; // pieces in store

const amountToBuy = 5; // pieces

// Using logical AND (&&)
// pseudocode
// say buy if wallet > = amount to buy * price and amount to buy is in store

// if wallet > = amount to buy * price and amount to buy is in store
//     say buy
// else
//     say cannot buy

// if (
//     amountToBuy * applesPrice <= wallet &&
//     amountToBuy <= applesAmount
// ) {
//     console.log('yes, buy');
// } else {
//     console.log('cannot buy');
// }


// Using logical OR (||)
// pseudocode
// say cannot buy if I cannot afford it or if there are not enough pieces in stock
if (
    amountToBuy * applesPrice > wallet ||
    amountToBuy > applesAmount
) {
    console.log('cannot buy');
} else {
    console.log('yes, buy');
}

