const printDigits = (num) => {
    let newNum = "";
    while (num > 0) {
        newNum = num % 10;
        console.log(newNum);
        num = Math.floor(num / 10);
    }
}
printDigits(123456);
