import { Point } from './point';

export interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}