class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;
    constructor(brand, model, carYear, distance, countOfFuel) {
        this.brand = brand;
        this.model = model;
        this.carYear = carYear;
        this.distance = distance;
        this.countOfFuel = countOfFuel;
    }
    getConsumptionFuel() {
        let reshenie = this.countOfFuel / this.distance * 100;
        return `${this.brand} ${this.model}-ой модели ${this.carYear} года, тратит ${reshenie} литров топливо на 100км`;
    }
}
const myCar = new Car("BMW", "M5", 1986, 400, 50);
console.log(myCar.getConsumptionFuel());

