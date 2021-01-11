// "hello" -> 1
// "apple" -> 0
// "string" -> 3
// "STRAWBERRY" -> 3
// "MELON" -> 1
// "piNNEaPLE" -> 1

// All vowels
const a = 'a';
const o = 'o';
const u = 'u';
const e = 'e';
const i = 'i';

// Words
const word = "hello" // 1
// const word = "apple" // 0
// const word = "string" // 3
// const word = "STRAWBERRY" // 3
// const word = "MELON" // 1
// const word = "piNNEaPLE" // 1

let index = word.length - 1; // set an index, as large as possible

if (word.indexOf(a) !== -1) {
    if (word.indexOf(a) < index) {
        index = word.indexOf(a); // update the index value
    }
}
if (word.indexOf(o) !== -1) {
    if (word.indexOf(o) < index) {
        index = word.indexOf(o);
    }
}
if (word.indexOf(u) !== -1) {
    if (word.indexOf(u) < index) {
        index = word.indexOf(u);
    }
}
if (word.indexOf(e) !== -1) {
    if (word.indexOf(e) < index) {
        index = word.indexOf(e);
    }
}
if (word.indexOf(i) !== -1) {
    if (word.indexOf(i) < index) {
        index = word.indexOf(i);
    }
}

console.log(`First vowel index is ${index}`);