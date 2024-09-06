function Car(brand, model, registrationNumber, color) {
   this.brand = brand;
   this.model = model;
   this.registrationNumber = registrationNumber;
   this.color = color;

   this.getDescription = function () {
        return this.brand + ' ' + this.model + '. Registration number: ' + this.registrationNumber + '. Color: ' + this.color + '.';
    }
}

let firstCar = new Car(`Audi`, `A7`, `XR1923LW`, `Dark Blue`);
let secondCar = new Car(`BMW`, `M5`, `FN4521BZ`, `Grey`);

alert(firstCar.getDescription() + '\n' + secondCar.getDescription());


