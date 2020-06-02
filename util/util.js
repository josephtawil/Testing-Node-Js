const add = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    if (typeof num2 != "number") throw new Error("Second argument must be a number");
    return num1 + num2;
};

const minus = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    if (typeof num2 != "number") throw new Error("Second argument must be a number");
    return num1 - num2;
}

const multiply = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    if (typeof num2 != "number") throw new Error("Second argument must be a number");
    return num1 * num2;
};

const divide = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    if (typeof num2 != "number") throw new Error("Second argument must be a number");
    if (num2 === 0) throw new Error("Second argument must not be 0, undefined");
    return num1 / num2;
};
const power = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    if (typeof num2 != "number") throw new Error("Second argument must be a number");
    return Math.pow(num1, num2);
};

const addAsync = (num1, num2) => {
    return new Promise((resolve, reject) => {
        resolve(num1 + num2);
    });
};

function sayThing(name) {
    return new Promise((resolve, reject) => {
        if (typeof name != "string") reject({ err: "argument must be a string" });
        resolve(`Hello ${name}`);
    });
}
module.exports = { add, minus, multiply, divide, power, addAsync, sayThing };
