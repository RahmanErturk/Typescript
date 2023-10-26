interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
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