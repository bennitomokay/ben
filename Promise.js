
let number = '';

let Double = new Promise((resolve, reject) => {
    setTimeout(() => {
        number = number*2;
    }, 1341)
});

let Increment = new Promise((resolve, reject) => {
    setTimeout(() => {
        number = number ++;
    }, 34.4)
});

let Triple = new Promise((resolve, reject) => {
    setTimeout(() => {
        number = number*3;
    }, 2000)
});

Double
    .then(() => {
        return Increment;
        })
    .then(()=>{
        return Triple;
    } )
    .then(()=>{
        console.log("Done");
    })