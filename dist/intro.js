var car = /** @class */ (function () {
    function car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " ").concat(this.year);
    };
    car.prototype.getCarAge = function () {
        if (this.year < 2015) {
            console.log("your car is old");
        }
        else {
            console.log("your car is new");
        }
    };
    return car;
}());
var myCar = new car("Toyota", "Camry", 2022);
myCar.getCarAge();
var nyCar = new car("Toyota", "Camry", 2022);
nyCar.getCarAge();
