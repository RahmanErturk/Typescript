var a = 5;
var b = 'a';
var c = false;
var d;
// Array
var e = [1, 2, 3, 4, 5];
var f = [1, 2, 3, 4];
var g = [1, 'a', true];
var h = [1, 'a', true]; // tuple
var creditPayment = 0;
var transferPayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["transfer"] = 1] = "transfer";
    Payment[Payment["payAtTheDoor"] = 2] = "payAtTheDoor";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var credit = Payment.credit; // 0
var transfer = Payment.transfer; // 1
var payAtTheDoor = Payment.payAtTheDoor; // 2
var eft = Payment.eft; // 3
