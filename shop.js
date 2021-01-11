// Shopping
const wallet = 50; // euro

// Store
const applesPrice = 10; // euro per piece
const applesAmount = 3; // pieces in store

const amountToBuy = 5; // pieces

// pseudocode
// say buy if wallet > = amount to buy * price and amount to buy is in store

// if wallet > = amount to buy * price and amount to buy is in store
//     say buy
// else
//     say cannot buy

if (
    amountToBuy * applesPrice <= wallet &&
    amountToBuy <= applesAmount
) {
    console.log('yes, buy');
} else {
    console.log('cannot buy');
}

