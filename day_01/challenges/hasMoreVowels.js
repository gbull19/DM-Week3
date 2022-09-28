// const hasMoreVowels = (word) => {
//     word = word.toLowerCase().split("");
//     const vowels = [];
//     word.forEach( (letter) => {
//         if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             vowels.push(letter);
//         }
//         return "";
//     })
//     if (vowels.length > word.length / 2) {
//         return true;
//     }
//     return false;
// }

// console.log(hasMoreVowels("moose"));


const hasMoreVowels = (word) => {
    let vowelCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (const char of word) {
        if(vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount > word.length / 2;
}

console.log(hasMoreVowels("moose"));
