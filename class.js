var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi is traveling from ".concat(point.x, " to ").concat(point.y));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus is traveling from ".concat(point.x, " to ").concat(point.y));
    };
    return Bus;
}());
