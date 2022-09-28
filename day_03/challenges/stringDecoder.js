// const decoder = (code) => {
//     let message = "";
//     for (const letter of code) {
//         if (!isNaN(letter))   {
//             i += letter;
//         }
//         return message += code[i];
//     } 
//     return message
// }

// console.log(decoder("0h2xce5ngbrdy"));


const decoder = (code) => {
    let message = "";
    for (let i = 0; i < code.length; i++) {
        let converted = parseInt(code[i]);
        if (isNaN(converted) != true)   {
            i += converted;
        } else {
            message += code[i];
        }
    } 
    return message;
}

console.log(decoder("2bna0p1mp2osl0e"))