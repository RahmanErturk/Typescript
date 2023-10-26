interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // private color: string;
    // private currentLocation: Point;
    
    constructor(private _location: Point = {x:0, y:0}, private color: string = "black") {}

    travelTo(point: Point): void {
        console.log(`Taxi is traveling from X: ${this._location.x} Y: ${this._location.y} to X: ${point.x} Y: ${point.y}`);
    }

    get location(): Point {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('Location must be greater than zero');
        }

        return this._location = value;
    }
    
}

let taxi_1: Taxi = new Taxi({ x: 1, y: 1 });
taxi_1.travelTo({ x: 3, y: 9 });
taxi_1.location = { x: 2, y: 5 };
