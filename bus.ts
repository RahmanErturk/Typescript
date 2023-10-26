import { Vehicle } from "./vehicle";
import { Point } from "./point";

export class Bus implements Vehicle {
    // private color: string;
    // private currentLocation: Point;
    
    constructor(private _location: Point = {x:0, y:0}, private color: string = "black") {}

    travelTo(point: Point): void {
        console.log(`Bus is traveling from X: ${this._location.x} Y: ${this._location.y} to X: ${point.x} Y: ${point.y}`);
    }

    get location(): Point {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('Location must be greater than zero');
        }

        this._location = value;
    }
}