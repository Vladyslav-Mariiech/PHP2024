let input = prompt("Введите целое число:");

if (input === null) {
    console.log("Cancel.");
} else {
    let number = Number(input);

    if (isNaN(number)) {
        alert("Введено не число. Пожалуйста, введите целое число.");
    } else if (number % 1 !== 0) {
        alert("Введено не целое число. Пожалуйста, введите целое число.");
    } else if (number < 0) {
        alert("Факториал не определен для отрицательных чисел.");
    } else if (number === 0) {
        alert("Факториал 0 равен 1.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        alert(`Факториал числа ${number} равен ${factorial}.`);
    }
}
