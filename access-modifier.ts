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
    
    constructor(private location: Point = {x:0, y:0}, private color: string = "black") {}

    travelTo(point: Point): void {
        console.log(`Taxi is traveling from X: ${this.location.x} Y: ${this.location.y} to X: ${point.x} Y: ${point.y}`);
    }
    
}

let taxi_1: Taxi = new Taxi({ x: 1, y: 1 });
taxi_1.travelTo({ x: 3, y: 9 });
