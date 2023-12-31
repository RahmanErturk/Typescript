interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    color: string;
    currentLocation: Point;
    
    constructor(location: Point = {x:0, y:0}, color: string = "black") {
        this.currentLocation = location;
        this.color = color;
    }

    travelTo(point: Point): void {
        console.log(`Taxi is traveling from ${point.x} to ${point.y}`);
    }
    
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Bus is traveling from ${point.x} to ${point.y}`);
    }   
}

let taxi_1: Taxi = new Taxi({ x: 3, y: 9 });

taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.color);
console.log(taxi_1.currentLocation);

let taxi_2 = new Taxi({ x: 3, y: 9 }, 'red')
