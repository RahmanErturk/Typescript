let a: number = 5;

let b: string = 'a';

let c: boolean = false;

let d: any;

// Array
let e: number[] = [1, 2, 3, 4, 5];
let f: Array<number> = [1,2,3,4];
let g: any[] = [1, 'a', true];
let h: [number, string, boolean] = [1, 'a', true]; // tuple

const creditPayment = 0;
const transferPayment = 1;
const eftPayment = 2;

enum Payment {credit=0, transfer=1, payAtTheDoor=2, eft=3};

let credit = Payment.credit; // 0
let transfer = Payment.transfer; // 1
let payAtTheDoor = Payment.payAtTheDoor; // 2
let eft = Payment.eft; // 3