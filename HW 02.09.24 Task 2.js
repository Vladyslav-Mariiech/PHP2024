let start = prompt("Введите начальное значение промежутка:");
let end = prompt("Введите конечное значение промежутка:");


start = Number(start);
end = Number(end);

if (isNaN(start) || isNaN(end) || start > end) 
     alert{"Введены неверные данные.");
} else {
    let primeCount = 0;

    for (let num = start; num <= end; num++) {
        if (num <= 1) {
            continue; 
        }
        
        let isPrime = true;
        
        if (num === 2 || num === 3) {
            isPrime = true;
        } else if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        } else {
            let i = 5;
            while (i * i <= num) {
                if (num % i === 0 || num % (i + 2) === 0) {
                    isPrime = false;
                    break;
                }
                i += 6;
            }
        }

        if (isPrime) {
            primeCount++;
        }
    }

    alert(`Количество простых чисел в промежутке от ${start} до ${end} равно ${primeCount}.`);
