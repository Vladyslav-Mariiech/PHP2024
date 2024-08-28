let fuelAmount = "Введите количество бензина в литрах:";
let answer = prompt(fuelAmount);
let fuelConsumption = "Введите расход бензина на 100 км (литры):";
let answer2 = prompt(fuelConsumption);
let distance = (answer / answer2) * 100;
alert(`С учетом ${answer} литров бензина и расхода ${answer2} литров на 100 км, вы можете проехать ${distance} км.`);
