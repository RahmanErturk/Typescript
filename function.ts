function getAverage(...a: number[]): string {
    let total = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result: ' + result;
}

getAverage(10, 20, 30);
getAverage(10, 20, 30, 50);
getAverage(10, 20);
getAverage(10);

// Arrow function 
// void : gibt keinen Rückgabewert
const get_average = (...a: number[]): void => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    console.log('result: ' + result);
    
    // return 'result: ' + result; error 
}