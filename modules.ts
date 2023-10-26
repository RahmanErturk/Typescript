import { Taxi } from './taxi'
import { Bus } from './bus';

let taxi_1: Taxi = new Taxi({ x: 1, y: 1 });
taxi_1.travelTo({ x: 3, y: 9 });
taxi_1.location = { x: 2, y: 5 };

let bus: Bus = new Bus({ x: 2, y: 3 });
bus.travelTo({ x: 4, y: 6 });
bus.location = { x: 6, y: 8 };

