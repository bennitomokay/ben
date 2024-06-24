let number = 2;

function Double(arg) {
    setTimeout(() => {
        number = number * 2;
        arg();
    }, 1341);
}

function Increment(arg) {
    setTimeout(() => {
        number = number ++;
        arg();
    }, 34,4);
}

function Triple(arg) {
    setTimeout(() => {
        number = number * 3;
        arg();
    }, 2000);
}

Double(function () {
    Increment(function () {
        Triple(function () {
            console.log("Done");
        })
    })
})






