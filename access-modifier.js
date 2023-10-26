var Taxi = /** @class */ (function () {
    // private color: string;
    // private currentLocation: Point;
    function Taxi(location, color) {
        if (location === void 0) { location = { x: 0, y: 0 }; }
        if (color === void 0) { color = "black"; }
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi is traveling from X: ".concat(this.location.x, " Y: ").concat(this.location.y, " to X: ").concat(point.x, " Y: ").concat(point.y));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 1 });
taxi_1.travelTo({ x: 3, y: 9 });
