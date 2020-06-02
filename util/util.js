const add = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("First argument must be a number");
    return num1 + num2;
};

module.exports = { add };