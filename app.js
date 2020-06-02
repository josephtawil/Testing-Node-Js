const { addAsync, sayThing } = require("./util/util");

//answer is the response from the promise
//promise just returns another
// var string = "Hello";
// addAsync(2, 2).then(answer => console.log(answer));
sayThing("Hello").then(answer => {
    console.log(answer)
});
//     return sayThing(4);

// }).then((response) => {
//     console.log(response);
//     return addAsync(2, 3);
// }).then((response) => {
//     console.log(response);
// }).catch((err) => console.log(err));
//.then(() => {
//     console.log(string);
// })

//catch will just stop executing the promise function where the error is found

//if we console log string here it will run before the promise because the system will read the console.log before its finished executing the promise
//to fix it, you should make a .then to run it in the promise function or you can use the setTimeout below
// console.log(string);

// setTimeout(() => {
//     console.log(string);
// }, 1000);

//await is used to with promises
//await is only valid within async function
//global async function
(async function () {
    const message = await sayThing("Full stack Developers");
    console.log(message);
})();

//inside async function
const asyncMessage = async (mes) => {
    const message = await sayThing(mes);
    console.log(message);
};

asyncMessage("full stack devs");